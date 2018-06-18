import * as types from '../types/mutation-types'

let vuexDispatch = null
const escEventhandler = function(event) {
    if (event.which === 27) {
        vuexDispatch('closePopup')
    }

    console.log('esc key')
}

const state = {
    currentPopup: null,
    popupData: null
}

const getters = {
    currentPopup: state => state.currentPopup,
    popupData: state => state.popupData
}

const mutations = {
    [types.POPUP_OPEN](state, { popupType, post }) {
        state.currentPopup = popupType
        state.popupData = post
    },
    [types.POPUP_CLOSE](state) {
        state.currentPopup = null
        state.popupData = null
    }
}

const actions = {
    openPopup({ commit, dispatch }, data) {
        if (typeof data === 'string') {
            commit(types.POPUP_OPEN, { popupType: data })
        } else {
            commit(types.POPUP_OPEN, { popupType: data.popupType, post: data.post })
        }

        // esc 누르면 팝업 닫힘
        vuexDispatch = dispatch
        document.addEventListener('keyup', escEventhandler)
    },
    closePopup({ commit }) {
        document.removeEventListener('keyup', escEventhandler)
        commit(types.POPUP_CLOSE)
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
