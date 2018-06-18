import axios from 'axios'

export default {
    getArticleList(data) {
        return axios.get(`/article/GetArticleList?pageNum=${data.pageNum}&pageSize=${data.pageSize}&section=${data.section}&lang=${data.lang}`)
    },
    gatArticleDetail(data) {
        return axios.post(`/article/GetArticleDetail?seq=${data.seq}&lang=${data.lang}`)
    }
}
