import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'
import foo from './modules/foo'
import userInfo from './modules/userInfo'
import popup from './modules/popup'
import account from './modules/account'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    actions,
    getters,
    modules: {
        foo,
        account,
        userInfo,
        popup
    },
    strict: debug,
    plugins: []
})

