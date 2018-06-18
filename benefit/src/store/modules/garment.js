import _map from 'lodash/map'
import closetApi from '../../api/closet'
import * as types from './benefit-types'
import _sortBy from 'lodash/sortBy'
import _remove from 'lodash/remove'
import _find from 'lodash/find'
import _chunk from 'lodash/chunk'
import _reject from 'lodash/reject'
import { parseItem } from '../../utils/item'

const state = {
    items: [],
    artifacts: []
}

// getters
const getters = {
    garments: state => state.items
}

// actions
const actions = {
    async reset({ commit }) {
        commit(types.RESET_GARMENT)
    },
    hideGarment({ commit, dispatch }, layer) {
        commit(types.SET_HIDE_GARMENT, { layer })
        dispatch('benefit/updateImages', null, { root: true })
    },
    async setGarment({ commit, dispatch }, data) {
        console.log('========================= setGarment', data)
        commit(types.SET_GARMENT, data)
    },
    async removeGarment({ commit, dispatch }, layer) {
        commit(types.REMOVE_GARMENT, { layer })
        await dispatch('benefit/setArtifacts', null, { root: true })
        dispatch('benefit/updateImages', null, { root: true })
    },
    async updateGarment({ commit, dispatch }, { artifactId, fileList, thumbnail, input: { garment } }) {
        console.log('========================= updateGarment', garment)
        // const { info: { layer }, ThumbnailPath: thumbnail } = await dispatch('item', { itemId: garment.closetItemId })
        dispatch('setGarment', { artifactId, fileList, layer: garment.layer, thumbnail })
    },
    async item({ commit, dispatch, rootState }, { itemId }) {
        return new Promise((resolve, reject) => {
            closetApi.item({ itemId }).then(response => {
                const item = parseItem(response.data)
                resolve(item)
            }).catch(err => {
                reject(err)
            })
        })
    },
    async draping({ commit, dispatch, state, rootState }, { itemId, colorway, grading, simulation, layer, avatarId, thumbnail }) {
        console.log('++++++++ draping', { itemId, colorway, grading, simulation, layer, avatarId, thumbnail })
        const params = {
            input: {
                requestType: 'TRYON',
                avatar: {
                    avatarId: avatarId
                },
                garment: {
                    closetItemid: itemId,
                    colorway,
                    grading,
                    layer,
                    simulation
                }
            },
            output: {
                fileType: 'PNG'
            }
        }
        const { artifactId } = await dispatch('benefit/artifact', params, { root: true })
        const { fileList } = await dispatch('benefit/getArtifact', { artifactId }, { root: true })
        if (layer === 0 || _find(state.items, o => o.layer === 0)) dispatch('reset')
        dispatch('setGarment', { artifactId, fileList, layer, thumbnail })
        await dispatch('benefit/setArtifacts', null, { root: true })
    },

    async tryon({ commit, dispatch, state, rootState }, { itemId, colorway, grading }) {
        if (!rootState.avatar.avatarId) {
            dispatch('activate', true, { root: true })
            return
        }
        if (!rootState.activated) dispatch('activate', true, { root: true })
        dispatch('onLoading', null, { root: true })
        const { info: { simulation, layer }, ThumbnailPath: thumbnail } = await dispatch('item', { itemId })
        await dispatch('draping', { itemId, colorway, grading, simulation, layer, avatarId: rootState.avatar.avatarId, thumbnail })
        dispatch('benefit/updateImages', null, { root: true })
    }
}

// mutations
const mutations = {
    [types.SET_HIDE_GARMENT](state, { layer }) {
        const item = _find(state.items, { layer: layer })
        item.isHide = !item.isHide
    },
    [types.SET_GARMENT](state, { artifactId, fileList, layer, thumbnail }) {
        const arr = _chunk(fileList, 8)
        const items = [...state.items]
        _remove(items, o => o.layer === layer)
        items.push({ artifactId, layer, images: { garment: arr[1], fitmap: arr[0] }, isHide: false, thumbnail })
        state.items = _sortBy(items, ['layer'])
        state.artifacts = _map(state.items, o => o.artifactId)
    },
    [types.RESET_GARMENT](state) {
        // avatar가 변경되면 모든 의상 삭제
        state.items = []
        state.artifacts = []
    },
    [types.REMOVE_GARMENT](state, { layer }) {
        state.items = _reject(state.items, ['layer', layer])
        state.artifacts = _map(state.items, o => o.artifactId)
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
