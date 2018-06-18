import axios from 'axios'
import './config'

export default {
    capture(params) {
        return axios.post(`/api/artifact`, params)
    },
    files({ file }) {
        const config = { headers: { 'Content-Type': 'multipart/form-data' } }
        const data = new FormData()
        data.append('UploadFile', file.files[0])
        return axios.post(`/api/avatar/upload`, data, config)
    },
    postArtifact(params) {
        return axios.post(`/api/artifact`, params)
    },
    getArtifact(artifactId) {
        return axios.get(`/api/artifact/${artifactId}?includeFileList=true`)
    },
    postArtifactBoxes(params) {
        return axios.post(`/api/artifactbox`, params)
    },
    getArtifactBoxes(params) {
        return axios.get(`/api/artifactboxes`, params)
    },
    deleteArtifactBoxes({ boxId }) {
        return axios.delete(`/api/artifactbox/${boxId}`)
    }
}
