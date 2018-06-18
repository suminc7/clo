import axios from 'axios'
import './config'
// import qs from 'querystring'

export default {
    upload({ name, binary }) {
        return axios.post(`/api/shapeapi/files?filename=${name.toLowerCase()}`, binary, {
            headers: {
                // 'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
    },
    artifact(params) {
        return axios.post(`/api/shapeapi/artifacts`, params, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
    },
    status(artifactId) {
        return axios.get(`/api/shapeapi/artifacts/${artifactId}`, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
    },
    components(artifactId) {
        axios.get(`/api/shapeapi/artifacts/${artifactId}/components/measurements`, {
            headers: {
                'Content-Type': 'application/json'
            }
        })

        return axios.get(`/api/shapeapi/artifacts/${artifactId}/components/mesh`, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }
}
