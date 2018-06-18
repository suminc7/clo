import api from '../../../benefit/api/closet'
import * as types from './store-types'
import _filter from 'lodash/filter'
import _reverse from 'lodash/reverse'

// initial state
const state = {
    roomItems: [],
    currentRoomInfo: {},
    garmentListItems: [],
    viewGarmentItem: null
}

// getters
const getters = {
    garmentListItems: state => state.garmentListItems,
    viewGarmentItem: state => state.viewGarmentItem
}

// actions
const actions = {
    getRoom({ commit, state }) {
        return new Promise((resolve) => {
            api.room().then(({ data }) => {
                commit(types.GET_ROOM, data)
                resolve(state.roomItems)
            })
        })
    },
    getGarmentList({ commit, state }, { roomId, roomName }) {
        api.list(roomId).then(({ data }) => {
            commit(types.GET_GARMENT_LIST, { data, roomId, roomName })
        })
    },
    getGarmentItem({ commit, state }, itemId) {
        return api.info(itemId).then(({ data }) => {
            commit(types.GET_GARMENT_ITEM, data)
        })
    }
}

// mutations
const mutations = {
    [types.GET_ROOM](state, data) {
        const items = JSON.parse(data)
        state.roomItems = _reverse(_filter(items, item => item.RoomId !== 31))
    },
    [types.GET_GARMENT_LIST](state, { data, roomId, roomName }) {
        state.garmentListItems = JSON.parse(data)
        state.garmentListItems.forEach((item) => {
            try {
                item.info = JSON.parse(item.Description)
            } catch (e) {
                console.log('e', e.name)
                item.info = {
                    description: 'error description',
                    fabric: '100% Silk',
                    grading: [
                        { indexNo: 1, name: 'E' },
                        { indexNo: 0, name: 'E' }
                    ],
                    layer: null,
                    price: 'Error',
                    simulation: 10
                }
            }
            return item
        })
        state.currentRoomInfo = { roomId, roomName }
    },
    [types.GET_GARMENT_ITEM](state, data) {
        state.viewGarmentItem = JSON.parse(data)
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
