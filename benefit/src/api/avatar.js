import axios from 'axios'
import './config'

export default {
    measurements(params) {
        return axios.post(`/api/avatar/measurements`, params)
    },
    postAvatarBox(params) {
        return axios.post(`/api/avatarbox`, params)
    },
    deleteAvatarBox({ boxId }) {
        return axios.delete(`/api/avatarbox/${boxId}`)
    },
    getAvatarBoxes() {
        return axios.get(`/api/avatarboxes`)
    }
}
