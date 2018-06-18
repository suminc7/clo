
import getEmailStatus from '../utils/getEmailStatus'

const Users = {
    install(Vue, options) {
        const store = options.store

        Vue.prototype.$user = {
            get isLogin() {
                return store.state.account.isLogin()
            },
            get emailStatus() {
                return getEmailStatus()
            }
        }
    }
}

export default Users
