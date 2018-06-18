// initial state
import * as types from './upload-types'
import _reject from 'lodash/reject'

const state = {
    isTab: false,
    fileItems: JSON.parse(localStorage.getItem('benefit-upload-files')) || []
}

// getters
const getters = {
    isUploadTab: state => state.isTab,
    fileItems: state => state.fileItems
}

// actions
const actions = {
    onUpload({ commit }) {
        commit(types.ON_UPLOAD)
    },
    offUpload({ commit }) {
        commit(types.OFF_UPLOAD)
    },
    setItems({ commit }, data) {
        return new Promise((resolve, reject) => {
            commit(types.SET_ITEMS, data)
            resolve(data)
        })
    },
    removeItems({ commit }, data) {
        commit(types.REMOVE_ITEMS, data)
    }
}

// mutations
const mutations = {
    [types.ON_UPLOAD](state) {
        state.isTab = true
    },
    [types.OFF_UPLOAD](state) {
        state.isTab = false
    },
    [types.SET_ITEMS](state, { file, fileId, artifactId }) {
        console.log('========================--SET_ITEMS', arguments)
        const filename = file.value.replace(/^.*[\\\/]/, '')
        const shortFilename = filename.split('.')[0].length > 25 ? filename.split('.')[0].substring(0, 25) + '...' + filename.split('.')[1] : filename
        const data = {
            fileId,
            artifactId,
            shortFilename,
            fileName: filename
        }
        if (state.fileItems.length > 10) {
            state.fileItems.pop()
        }
        state.fileItems.unshift(data)
        localStorage.setItem('benefit-upload-files', JSON.stringify(state.fileItems))
    },
    [types.REMOVE_ITEMS](state, data) {
        state.fileItems = _reject(state.fileItems, data)
        localStorage.setItem('benefit-upload-files', JSON.stringify(state.fileItems))
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
