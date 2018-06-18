import axios from 'axios'
import './config'

export default {
    // signin(params) {
    //     return axios.post(`/api/accounts/extlogin`, params)
    // },
    // signup(params) {
    //     return axios.post(`/api/accounts/extsignup`, params)
    // },
    // closet(params) {
    //     return axios.post(`/api/closet/verify`, params)
    // },
    login(params) {
        return axios.post(`/api/accounts/login`, params)
    },
    signup(params) {
        return axios.post(`/api/accounts/signup`, params)
    }
}

