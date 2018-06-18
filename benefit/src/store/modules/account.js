import api from '../../api/account'
import { getCookie, setCookie } from '../../utils/cookie'
import axios from 'axios'
import decode from 'jsonwebtoken/decode'
import * as types from '../mutation-types'
import router from '../../router'

const state = {
    userInfo: {
        ...setInfo()
    }

}

const getters = {
    userInfo: state => state.userInfo
}
const actions = {
    setToken({ commit, dispatch }, data) {
        commit(types.LOGIN, data)
        dispatch('store/mystructure', null, { root: true })
    },
    signup({ commit, dispatch }, data) {
        return api.signup(data)
    },

    signin({ commit, dispatch }, data) {
        return api.login(data)
    },

    login({ commit, dispatch }, data) {
        return new Promise((resolve, reject) => {
            dispatch('signin', data)
                .then(response => {
                    resolve(response)
                }).catch(reject)
        })
    },
    logout({ commit, dispatch }) {
        dispatch('reset')
        commit(types.LOGOUT)
    },
    reset({ commit }) {
        commit(types.RESET)
    }
}

const mutations = {
    [types.LOGIN](state, data) {
        setCookie('btk', data)
        setCookie('bem', decode(data).unique_name)
        axios.defaults.headers.common['Authorization'] = `Bearer ${data}`

        state.userInfo = setInfo()
    },
    [types.LOGOUT](state) {
        const route = { path: '/fittingroom' }
        router.replace(route)
        window.location.reload()
    },
    [types.RESET](state) {
        setCookie('btk', '', -1)
        setCookie('bem', '', -1)
        state.userInfo = {}
        axios.defaults.headers.common['Authorization'] = ``
    }
}

function setInfo() {
    try {
        const email = getCookie('bem')
        const userName = email.split('@')[0]
        const key = getCookie('btk')
        const btk = decode(key)
        const uniqueName = btk.unique_name

        if (btk.exp < Math.floor(Date.now() / 1000) || email !== uniqueName) {
            setCookie('btk', '', -1)
            setCookie('bem', '', -1)
        } else {
            axios.defaults.headers.common['Authorization'] = `Bearer ${key}`
        }

        return {
            isLogin: email === uniqueName,
            email,
            userName,
            uniqueName
        }
    } catch (e) {

    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
