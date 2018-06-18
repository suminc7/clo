import Vue from 'vue'
import Vuex from 'vuex'
import store from './modules/store'
import { state, getters, actions, mutations } from './root'
// import avatar from './modules/avatar'
import measure from './modules/measure'
import upload from './modules/upload'
import benefit from './modules/benefit'
import garment from './modules/garment'
import avatar from './modules/avatar'
import popup from './modules/popup'
import account from './modules/account'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const stores = new Vuex.Store({
    actions,
    getters,
    mutations,
    state,
    modules: {
        store,
        avatar,
        garment,
        measure,
        upload,
        benefit,
        popup,
        account
    },
    strict: debug,
    plugins: []
})
export default stores
