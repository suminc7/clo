import * as types from './benefit-types'
import api from '../../api/benefit'
import _map from 'lodash/map'

const state = {
    loadImages: [],
    artifactBox: {}
}

// getters
const getters = {
    fileItems: state => state.fileItems,
    loadImages: state => state.loadImages
}

// actions
const actions = {
    onFitmap({ commit, dispatch }, value) {
        commit(types.ON_FITMAP, value)
        dispatch('onLoading', null, { root: true })
        dispatch('setLoadingStatus', 'Downloading output ...', { root: true })
        dispatch('updateImages')
    },
    setArtifacts({ commit, dispatch, state, rootState }) {
        return new Promise((resolve, reject) => {
            const params = {
                avatarId: rootState.avatar.avatarId,
                artifacts: [rootState.avatar.artifactId, ...rootState.garment.artifacts]
            }
            api.postArtifactBoxes(params).then(response => {
                resolve(response.data[0])
                commit(types.SET_ARTIFACT_BOX, response.data)
            }).catch(error => {
                reject(error)
            })
        })
    },
    artifact({ commit, dispatch }, params) {
        dispatch('setLoadingStatus', 'Requesting ...', { root: true })
        return new Promise((resolve, reject) => {
            api.postArtifact(params)
                .then(({ data }) => {
                    resolve({ artifactId: data.artifactId })
                })
                .catch(err => {
                    reject(err)
                    dispatch('getError', err.response.status, { root: true })
                })
        })
    },
    async getArtifact({ commit, dispatch }, { artifactId }) {
        dispatch('onLoading', null, { root: true })
        dispatch('setLoadingStatus', 'Waiting a result ...', { root: true })
        return new Promise((resolve, reject) => {
            // let count = 0
            const call = () => {
                api.getArtifact(artifactId)
                    .then(({ data }) => {
                        // count++
                        // if (count === 30) {
                        //     alert('worker timeout')
                        //     dispatch('offLoading', null, { root: true })
                        //     return
                        // }
                        if (data.status === 'ready' && data.fileList[0] === null) {
                            alert('No fileList.')
                            dispatch('offLoading', null, { root: true })
                            reject(null)
                        } else if (data.status === 'ready' && data.fileList[0] !== null) {
                            resolve(data)
                        } else if (data.status === 'failed') {
                            dispatch('getError', data.errorType, { root: true })
                            reject({ artifactId })
                        } else {
                            setTimeout(call, 2000)
                        }
                    })
            }
            setTimeout(call, 2000)
        })
    },

    /**
     * getArtifactBoxes from FittingTab.vue
     */
    async getArtifactBoxes({ commit, dispatch }) {
        return new Promise((resolve, reject) => {
            // if (state.artifactBox.boxId) {
            //     return
            // }

            api.getArtifactBoxes()
                .then(response => {
                    if (response.data.length === 0) {
                        dispatch('avatar/avatarBySample', null, { root: true })
                        return
                    }
                    dispatch('getArtifacts', response.data[0])
                    resolve(response.data[0])
                    commit(types.SET_ARTIFACT_BOX, response.data[0])
                })
                .catch(reject)
        })
    },

    async getArtifacts({ commit, dispatch, rootState }, { avatarId, artifacts }) {
        console.log('----------------- getArtifacts', { avatarId, artifacts })
        const garments = _map(artifacts, async artifactId => {
            const data = await dispatch('getArtifact', { artifactId })
            console.log('--------------------------------------- data.fileList[0]', data.fileList[0] === null)
            if (data.input.requestType === 'AVATAR' && data.fileList[0] !== null) {
                return dispatch('avatar/updateAvatar', data, { root: true })
            } else if (data.input.requestType === 'TRYON' && data.fileList[0] !== null) {
                return dispatch('garment/updateGarment', data, { root: true })
            }
        })

        Promise.all(garments).then(() => {
            console.log('******************* Promise.all')
            dispatch('updateImages')
        })
    },
    async removeArtifactBoxes({ commit, dispatch, state }) {
        alert('No fileList.')
        dispatch('offLoading', null, { root: true })

        await api.deleteArtifactBoxes(state.artifactBox)
        // dispatch('avatar/setAvatar', { avatarId: null, artifactId: null, fileList: [] }, { root: true })
        // dispatch('garment/reset', {}, { root: true })
        // await dispatch('getArtifactBoxes')
    },
    updateImages({ commit, dispatch, state, rootState }) {
        return new Promise((resolve, reject) => {
            const fittingType = state.isFitmap ? 'fitmap' : 'garment'
            const images = []

            function imageError() {
                throw new Error()
            }

            // fileList 없는경우 artifactbox 삭제
            try {
                if (rootState.avatar.images.length) {
                    images.push(rootState.avatar.images[rootState.avatar.currentNum])
                } else {
                    imageError()
                }

                for (let i = 0; i < rootState.garment.items.length; i++) {
                    if (rootState.garment.items[i].isHide) {
                        images.push(null)
                    } else {
                        images.push(rootState.garment.items[i].images[fittingType][rootState.avatar.currentNum])
                    }
                }
                console.log('updateImages', images)
            } catch (e) {
                console.log(e)
                dispatch('removeArtifactBoxes')
                return
            }

            commit(types.UPDATE_IMAGES, { images })
            resolve(images)
        })
    }
}

// mutations
const mutations = {
    [types.ON_FITMAP](state, value) {
        state.isFitmap = value
    },
    [types.UPDATE_IMAGES](state, { images }) {
        state.loadImages = images
    },
    [types.SET_ARTIFACT_BOX](state, data) {
        state.artifactBox = data
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
