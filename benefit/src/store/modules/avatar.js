import * as types from './benefit-types'
import api from '../../api/benefit'
import avatarApi from '../../api/avatar'
import _filter from 'lodash/filter'

const state = {
    avatarId: null,
    artifactId: null,
    images: [],
    currentNum: 0,
    avatarBoxes: []
}

// getters
const getters = {
    avatarBoxes: state => state.avatarBoxes
}

// actions
const actions = {
    rotateAvatar({ commit, dispatch }, type) {
        dispatch('onLoading', null, { root: true })
        commit(types.ROTATE_AVATAR, type)
        dispatch('benefit/updateImages', null, { root: true })
    },
    setAvatar({ commit, dispatch }, { avatarId, artifactId, fileList }) {
        commit(types.SET_AVATAR, { avatarId, artifactId, fileList })
    },
    updateAvatar({ commit, dispatch }, { input: { avatar: { avatarId } }, artifactId, fileList }) {
        dispatch('setAvatar', { avatarId, artifactId, fileList })
    },
    getAvatarBoxes({ commit, dispatch, state }) {
        return new Promise((resolve, reject) => {
            avatarApi.getAvatarBoxes().then(response => {
                resolve(response.data)
                commit(types.GET_AVATAR_BOXES, response.data)
            }).catch(error => {
                reject(error)
            })
        })
    },
    deleteAvatarBox({ commit, dispatch, state }, { boxId }) {
        return new Promise((resolve, reject) => {
            avatarApi.deleteAvatarBox({ boxId }).then(response => {
                resolve(response.data)
                commit(types.DELETE_AVATAR_BOX, { boxId })
            }).catch(error => {
                reject(error)
            })
        })
    },
    postAvatarBox({ commit, dispatch, state }, { artifactId, avatarId, name }) {
        const params = {
            artifactId,
            avatarId,
            type: 'FILE',
            gender: 'male',
            name
        }
        return new Promise((resolve, reject) => {
            avatarApi.postAvatarBox(params).then(response => {
                resolve(response.data)
                // commit(types.SET_AVATAR_BOX, response.data)
            }).catch(error => {
                reject(error)
            })
        })
    },
    files({ commit, dispatch }, { file }) {
        dispatch('onLoading', null, { root: true })
        dispatch('setLoadingStatus', 'Uploading avatar ...', { root: true })
        return new Promise((resolve, reject) => {
            api.files({ file }).then(response => {
                const filename = file.value.replace(/^.*[\\\/]/, '')
                const shortFilename = filename.split('.')[0].length > 20 ? filename.split('.')[0].substring(0, 20) + '...' + filename.split('.')[1] : filename
                resolve({ avatarId: response.data.avatarId, filename: shortFilename })
            }).catch(error => {
                reject(error)
            })
        })
    },
    async avatar({ commit, dispatch }, { avatarId }) {
        const params = {
            input: {
                requestType: 'AVATAR',
                avatar: {
                    avatarId
                }
            },
            output: {
                fileType: 'PNG'
            }
        }
        const { artifactId } = await dispatch('benefit/artifact', params, { root: true })
        const { fileList } = await dispatch('benefit/getArtifact', { artifactId }, { root: true })
        await dispatch('setAvatar', { avatarId, artifactId, fileList })
        await dispatch('benefit/setArtifacts', null, { root: true })
        return { artifactId }
    },

    async avatarByMeasurement({ commit, dispatch }, { measureValues }) {
        dispatch('onLoading', null, { root: true })
        dispatch('setLoadingStatus', 'Requesting ...', { root: true })
        const { avatarId } = await dispatch('measure/measurements', { measureValues }, { root: true })
        dispatch('garment/reset', null, { root: true })
        await dispatch('avatar', { avatarId })
        dispatch('benefit/updateImages', null, { root: true })
    },
    async avatarBySample({ commit, dispatch }) {
        await dispatch('avatar', { avatarId: 'sample' })
        dispatch('benefit/updateImages', null, { root: true })
    },
    async avatarByFile({ commit, dispatch }, { file }) {
        const { avatarId, filename } = await dispatch('files', { file })
        dispatch('garment/reset', null, { root: true })
        const { artifactId } = await dispatch('avatar', { avatarId })
        await dispatch('postAvatarBox', { artifactId, avatarId, name: filename })
        dispatch('benefit/updateImages', null, { root: true })
    },
    async avatarByFileId({ commit, dispatch, state }, { artifactId }) {
        const data = await dispatch('benefit/getArtifact', { artifactId }, { root: true })
        dispatch('garment/reset', null, { root: true })
        dispatch('updateAvatar', data)
        await dispatch('benefit/setArtifacts', null, { root: true })
        dispatch('benefit/updateImages', null, { root: true })
    }
}

// mutations
const mutations = {
    [types.SET_AVATAR](state, { avatarId = null, artifactId = null, fileList }) {
        state.avatarId = avatarId
        state.artifactId = artifactId
        console.log('=============================== fileList', fileList[0])
        if (fileList[0]) {
            state.images = fileList
        } else {
            state.images = []
        }
    },
    [types.ROTATE_AVATAR](state, type) {
        if (type === 'left') {
            state.currentNum > 6 ? state.currentNum = 0 : state.currentNum++
        } else if (type === 'right') {
            state.currentNum < 1 ? state.currentNum = 7 : state.currentNum--
        }
    },
    // [types.SET_AVATAR_BOX](state, data) {
    //     state.avatarBoxes.unshift(data)
    // },
    [types.GET_AVATAR_BOXES](state, data) {
        state.avatarBoxes = data
    },
    [types.DELETE_AVATAR_BOX](state, { boxId }) {
        state.avatarBoxes = _filter(state.avatarBoxes, o => o.boxId !== boxId)
    }

}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
