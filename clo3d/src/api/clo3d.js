import axios from 'axios'

let requestUrl = ''

const clo3dAxio = axios.create({
    baseURL: requestUrl
})

// delete custom header for cors request
clo3dAxio.interceptors.request.use(function(config) {
    config.headers = {}
    return config
}, function(error) {
    return Promise.reject(error)
})

export default {
    getArchive(data) {
        return clo3dAxio.get(`/archive/${data.productNum}?pagesize=${data.pageSize}`)
    }
}
