import * as types from './mutation-types'
import * as popupTypes from './popup-types'

const state = {
    loadingStatus: '',
    isLoading: false,
    activated: false,
    connectionId: null,
    benefitId: localStorage.getItem('benefit-id'),
    drapingData: null,
    currentTab: null,
    currentPopup: null,
    currentFileItem: null
}

const getters = {
    loadingStatus: state => state.loadingStatus,
    fileId: state => state.fileId,
    activated: state => state.activated,
    isLoading: state => state.isLoading,
    currentTab: state => state.currentTab,
    currentPopup: state => state.currentPopup
}

const actions = {
    // completeArtifact({ commit, dispatch }, images) {
    //     dispatch('avatar/completeArtifact', images)
    // },
    setFileItem({ commit }, data) {
        commit(types.SET_FILE_ITEM, data)
    },
    getError({ commit, dispatch }, value) {
        commit(types.GET_ERROR, value)
        dispatch('offLoading')
    },
    activate({ commit, dispatch, state, rootState }, value) {
        if (rootState.account.userInfo.isLogin) {
            // dispatch('benefit/getArtifactBoxes', null, { root: true })
        } else {
            dispatch('popup/onPopup', { type: 'login' })
            return
        }
        commit(types.ACTIVATE, value)
    },
    changeTab({ commit }, value = 'fitting') {
        commit(types.CHANGE_TAB, value)
    },
    render({ commit }) {
        commit(types.RENDER)
    },
    onWorkerError({ commit }, { error }) {
        commit(types.ON_WORKER_ERROR, { error })
    },
    openPopup({ commit }, type) {
        commit(popupTypes.OPEN, type)
    },
    closePopup({ commit }) {
        commit(popupTypes.CLOSE)
    },
    onLoading({ commit }) {
        commit(types.ON_LOADING)
    },
    offLoading({ commit }) {
        commit(types.OFF_LOADING)
    },
    setLoadingStatus({ commit }, value) {
        commit(types.LOADING_STATUS, value)
    }
}

const mutations = {
    [types.GET_ERROR](state, value) {
        if (value === 0) {
            return true
        } else if (value === 503) {
            alert('SERVICE_UNAVAILABLE')
        } else if (value === 1001) {
            alert('BF_ERROR_PARSE_JSON')
        } else if (value === 1002) {
            alert('BF_ERROR_SCENEGRAPH')
        } else if (value === 1003) {
            alert('BF_ERROR_AVATAR_DOWNLOAD')
        } else if (value === 1004) {
            alert('BF_ERROR_AVATAR_IMPORT')
        } else if (value === 1005) {
            alert('BF_ERROR_GARMENT_DOWNLOAD')
        } else if (value === 1006) {
            alert('BF_ERROR_GARMENT_IMPORT')
        } else if (value === 1007) {
            alert('BF_ERROR_GARMENT_SIMULATE')
        } else if (value === 1008) {
            alert('BF_ERROR_GARMENT_EXPORT')
        } else if (value === 1009) {
            alert('BF_ERROR_OUTPUT_UPLOAD')
        } else if (value === 1013) {
            alert('Unregistered topology.')
        } else if (value === 1014) {
            alert('Unexpected scale of unit')
        } else if (value === 1015) {
            alert('The garment is not saved on the known avatar.')
        } else if (value === 1016) {
            alert('Colorway index is out of range.')
        } else if (value === 1017) {
            alert('Grading index is out of range.')
        } else {
            alert(value)
        }
    },
    [types.SET_FILE_ITEM](state, item) {
        state.currentFileItem = item
    },
    [types.SINGLE](state, layer) {
        state.isSingle = layer === -1
    },
    [types.CONNECTION](state, id) {
        state.connectionId = id
    },
    [types.ACTIVATE](state, value) {
        state.activated = value
    },
    [types.RENDER_COMPLETE](state) {
        state.isLoading = false
    },
    [types.CHANGE_TAB](state, val) {
        state.currentTab = val
    },
    [types.RENDER](state) {
        state.isLoading = true
        if (!state.benefitId) {
            state.benefitId = state.connectionId
            localStorage.setItem('benefit-id', state.benefitId)
        }
    },
    [types.ON_WORKER_ERROR](state, { error }) {
        state.isLoading = false
        window.alert('Has no worker now!')
        console.error('worker error', error)
    },
    [types.ON_LOADING](state) {
        state.isLoading = true
    },
    [types.OFF_LOADING](state) {
        state.isLoading = false
    },
    [types.LOADING_STATUS](state, value) {
        state.loadingStatus = value
    },
    [popupTypes.OPEN](state, type) {
        state.currentPopup = type
    },
    [popupTypes.CLOSE](state) {
        state.currentPopup = null
    }
}

export {
    state,
    getters,
    actions,
    mutations
}
