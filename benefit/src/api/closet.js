import axios from 'axios'
import { getClosetKey } from './config'

export default {
    closetUpload(formData) {
        if (getClosetKey()) formData.append('AccessKey', getClosetKey())
        console.log('formData', formData)
        return axios.post('/api/closet', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    rooms(id = '', params = {}) {
        console.log('id xxx', 'params', params)
        return axios.get(`/api/closet/rooms/${id}`, {
            params,
            headers: {
                Authorization: ''
            }
        })
    },
    myItems(params = {}) {
        return axios.get(`/api/closet/items`, {
            params
        })
    },
    items(params = {}) {
        return axios.get(`/api/closet/items`, {
            params,
            headers: {
                Authorization: ''
            }
        })
    },
    item({ itemId }) {
        // let obj = {
        //     headers: {
        //         Authorization: ''
        //     }
        // }
        //
        // console.log('store.store.isMyCloset', store.state.store.isMyCloset)
        // if (store.state.store.isMyCloset) {
        //     obj = {}
        // }

        return axios.get(`/api/closet/items/${itemId}`)
    },
    myitem({ itemId }) {
        return axios.get(`/api/closet/items/${itemId}`)
    },
    userRooms(params = {}) {
        return axios.get(`/api/closet/rooms`, {
            params
        })
    },
    closet(params = {}) {
        if (getClosetKey()) params.key = getClosetKey()
        return axios.get('/api/closet', { params })
    },
    company() {
        return axios.get('/api/closet/mycompany', {
            headers: {
                Authorization: ''
            }
        })
    },
    mycompany() {
        return axios.get('/api/closet/mycompany')
    },
    mycloset(params) {
        return axios.post('/api/mycloset', params)
    },
    getmycloset() {
        return axios.get('/api/mycloset')
    },
    structure(params) {
        return axios.get(`/api/closet/structure`, {
            params,
            headers: {
                Authorization: ''
            }
        })
    },
    mystructure(params) {
        return axios.get(`/api/closet/structure`, {
            params
        })
    }

}

