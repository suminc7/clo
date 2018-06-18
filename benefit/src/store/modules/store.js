import api from '../../api/closet'
import * as types from './store-types'
import _find from 'lodash/find'
import _filter from 'lodash/filter'
import { parseItem } from '../../utils/item'
import { getObject } from '../../utils/array'

// initial state
const state = {
    brandItems: [],
    mycompany: [],
    rooms: [],
    childRooms: [],
    items: [],
    roomItems: [],
    currentRoomInfo: {},
    viewGarmentItem: null,
    myClosetItem: {
        SpaceName: '',
        SpaceId: ''
    },
    roomId: null,
    myClosetDepth: [],
    isMyCloset: false,
    structure: null,
    listLoadingStatus: ''
}

// getters
const getters = {
    viewGarmentItem: state => state.viewGarmentItem,
    listLoadingStatus: state => state.listLoadingStatus
}

// actions
const actions = {
    mystructure({ commit, state }) {
        return new Promise(async() => {
            const { data: { Data } } = await api.mycompany()
            const { data } = await api.mystructure({ spaceType: 1, spaceId: Data[0].CompanyId })

            function setPublicRoom() {
                const myClosetItem = getObject(data.Children, 'SpaceName', 'Public Room', 'Children')
                if (myClosetItem) commit(types.SET_MYCLOSET_ITEM, myClosetItem)
            }

            api.getmycloset()
                .then(response => {
                    if (response.data.depth.length) {
                        const depth = response.data.depth
                        commit(types.GET_MYCLOSET_ITEM, depth)
                        commit(types.SET_MYCLOSET_ITEM, { SpaceName: depth[2].value, SpaceId: depth[2].key })
                    } else {
                        setPublicRoom()
                    }
                })
                .catch(err => {
                    if (err.response && err.response.status === 404) setPublicRoom()
                })
        })
    },
    structure({ commit, state }, params = { spaceType: 1, spaceId: 13 }) {
        return new Promise((resolve) => {
            api.company().then(({ data: { Data } }) => {
                const item = _filter(Data, o => o.Name.indexOf('Benefit') > -1)[0]
                if (item) params.spaceId = item.CompanyId
                api.structure(params).then(response => {
                    commit(types.STRUCTURE, response.data)
                    resolve(response.data)
                })
            })
        })
    },
    getRooms({ commit, state }, { id, params }) {
        return new Promise((resolve) => {
            api.rooms(id, params).then(response => {
                commit(types.GET_ROOMS, response.data)
                resolve(state.rooms)
            })
        })
    },
    getChildRooms({ commit, state }, { Name, params }) {
        const roomId = _find(state.rooms, o => o.Name.toLowerCase() === Name).RoomId
        return new Promise((resolve) => {
            api.rooms(roomId, params).then(response => {
                commit(types.GET_CHILD_ROOMS, response.data)
                resolve(state.childRooms)
            })
        })
    },
    getItems({ commit, state }, { roomId }) {
        if (state.roomId === roomId && new Date().getTime() < state.getTime + 180 * 1000) {
            return
        }
        return new Promise((resolve, reject) => {
            commit(types.LIST_LOADING_STATUS, 'Loading...')
            const item = getObject(state.structure.Children, 'SpaceId', roomId, 'Children')
            const getItem = item ? api.items : api.myItems
            getItem({ roomId })
                .then(response => {
                    commit(types.GET_ITEMS, { data: response.data, roomId })
                    resolve(state.items)
                    state.items.length || commit(types.LIST_LOADING_STATUS, 'No item')
                })
                .catch(err => {
                    console.log(err)
                    reject(err)
                })
        })
    },
    getItemsByChildRoomName({ commit, state }, { Name }) {
        const roomId = _find(state.childRooms, o => o.Name.toLowerCase() === Name).RoomId
        return new Promise((resolve) => {
            api.items({ roomId }).then(response => {
                commit(types.GET_ITEMS, response.data)
                resolve(state.items)
            })
        })
    },
    setMyClosetItem({ commit, state }, { SpaceName, SpaceId }) {
        commit(types.SET_MYCLOSET_ITEM, { SpaceName, SpaceId })
    },
    getMyClosetItem({ commit }) {
        return new Promise((resolve) => {
            api.getmycloset()
                .then(response => {
                    const depth = response.data.depth
                    resolve(depth)
                    commit(types.GET_MYCLOSET_ITEM, depth)
                })
                .catch(err => {
                    console.log(err)
                })
        })
    }
}

// mutations
const mutations = {
    [types.STRUCTURE](state, data) {
        state.structure = data
        state.brandItems = _filter(data.Children, function(o) { return o.SpaceType === 2 })
    },
    [types.GET_ROOMS](state, data) {
        state.rooms = data
    },
    [types.GET_CHILD_ROOMS](state, data) {
        state.childRooms = data
    },
    [types.LIST_LOADING_STATUS](state, text) {
        state.listLoadingStatus = text
    },
    [types.GET_ITEMS](state, { data, roomId }) {
        state.items = data
        state.items.forEach(parseItem)
        state.roomId = roomId.toString()
        state.getTime = new Date().getTime()
    },
    [types.GET_COMPANY](state, data) {
        state.mycompany = data
    },
    [types.SET_MYCLOSET_ITEM](state, { SpaceName, SpaceId }) {
        console.log('SET_MYCLOSET_ITEM', { SpaceName, SpaceId })
        state.myClosetItem = { SpaceName, SpaceId }
    },
    [types.GET_MYCLOSET_ITEM](state, depth) {
        console.log('SET_MYCLOSET_ITEM', depth)
        state.myClosetItem = depth
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
