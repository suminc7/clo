import * as types from '../popup-types'
import router from '../../router'

const state = {
    type: null,
    data: {}
}

const getters = {
    popupType: state => state.type,
    popupData: state => state.data
}
const actions = {
    onPopup({ commit, dispatch }, { type, data }) {
        console.log('ON_POPUP', type, data)
        commit(types.ON_POPUP, { type, data })
    },
    offPopup({ commit, dispatch }, data) {
        if (data && data.type === 'selectWorkroom') {
            console.log('OFF_POPUP', data)
            const route = { name: 'StoreList', params: { roomId: data.data.value } }
            router.push(route)
            dispatch('store/setMyClosetItem', { SpaceName: data.data.text, SpaceId: data.data.value }, { root: true })
        }
        commit(types.OFF_POPUP)
    }
}

const mutations = {
    [types.ON_POPUP](state, { type, data }) {
        state.type = type
        state.data = data
    },
    [types.OFF_POPUP](state) {
        state.type = null
        state.data = null
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
