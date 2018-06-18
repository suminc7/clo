import axios from 'axios'
import CryptoJS from 'crypto-js'
import * as types from '../types/mutation-types'
import accountApi from '../../api/account'
import * as cookieUtils from '../../utils/cookies'

// initial state
const state = {
    listItem: {},
    isLogin: () => !!cookieUtils.getToken(), // state 불러올 때마다 cookie에서 읽기 때문에, mutation 필요 없다. -> cookie에서 삭제해주면 state 변함.
    profileAddress: () => {
        // get profile image src
    }
}

// getters
const getters = {
    listItem: state => state.listItem,
    isLogin: state => state.isLogin()
}

// actions
const actions = {
    register({ commit }) {
        accountApi.register().then(({ data }) => {
            commit(types.FETCH_INVOICE_SELLER, data)
        })
    },
    setHeaders({ commit, dispatch }) {
        console.log('set header')

        // 모든 요청의 interceptor 역할
        axios.interceptors.response.use((response) => {
            return response
        }, (error) => {
            if (error.request.status === 401) {
                commit(types.SIGN_OUT, '/login?return_to=' + window.location.pathname)
            }
            return Promise.reject(error)
        })

        const xUid = cookieUtils.getUserId()
        const xUpa = cookieUtils.getUpw()
        const token = cookieUtils.getToken()

        // axios 헤더에 auth 정보 삽입한다.
        commit(types.SET_AXIOS_HEADER, {
            id: xUid,
            token: token,
            pwd: xUpa
        })

        if (token) {
            accountApi.userInfo().then(response => {
                console.log('get user info to set data')
                dispatch('userInfo/setData', response.data, { root: true })
                console.log(response)
            }).catch(error => {
                console.log(error)
            })
        }
    },
    // TODO: setAuth 공통 함수로 만들다 fail....
    /* setAuth({ commit }, data){
        commit(types.SET_AXIOS_HEADER, data)

        // login한 후에는 cookie에 저장되 있다.
        cookieUtils.setUserId(data['x-uid'])
        cookieUtils.setUpw(data['x-upa'])
        cookieUtils.setToken(data['token'])
        cookieUtils.setVerifytype(data['verifytype'] ? data['verifytype'] : cookieUtils.getVerifytype())
        cookieUtils.setHasEmail(data['email'] ? data['email'] : cookieUtils.getHasEmail())
    },*/
    resetAuth({ commit }, data) {
        commit(types.SET_AXIOS_HEADER, data)
        commit(types.SET_USER_COOKIES, data)
    },
    setUserCookie({ commit }, data) {
        commit(types.SET_USER_COOKIES, data)
    },
    signout({ commit }, url = '/login') {
        commit(types.SIGN_OUT, url)
    }
}

// mutations
const mutations = {
    [types.FETCH_INVOICE_SELLER](state, data) {
        state.listItem = data
    },
    [types.SIGN_OUT](state, url) {
        cookieUtils.deleteUserCookies()

        // 로그인 안했을 때 (401 에러나면 무조건 signout 시킴)
        if (!axios.defaults.headers.common['Token']) {
            window.location.href = url
            return false
        }

        accountApi.signout().then(response => {
            window.location.href = url
        }).catch(error => {
            console.log(error)
        })
    },
    [types.SET_AXIOS_HEADER](state, data) {
        const wordArray = CryptoJS.enc.Utf8.parse(`${data.id}:${data.pwd}`)
        const base64 = CryptoJS.enc.Base64.stringify(wordArray)

        axios.defaults.headers.common['x-uid'] = data.id
        axios.defaults.headers.common['Token'] = data.token
        axios.defaults.headers.common['Authorization'] = `Basic ${base64}`
    },
    [types.SET_USER_COOKIES](state, data) {
        cookieUtils.setUserId(data.id)
        cookieUtils.setUpw(data.pwd)
        cookieUtils.setToken(data.token)
        cookieUtils.setVerifytype(data.verifyType ? data.verifyType : cookieUtils.getVerifytype())
        cookieUtils.setHasEmail(data.hasEmail ? data.hasEmail : cookieUtils.getHasEmail())
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
