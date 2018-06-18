import axios from 'axios'
import './config'

export default {
    member(params) {
        return axios.get(`/api/member`, { params })
    },
    memberInfo(email) {
        return axios.get(`/api/member/${email}`)
    }

}

