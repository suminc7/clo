import axios from 'axios'

axios.defaults.baseURL = ''
axios.defaults.headers.common['Content-Type'] = 'application/json'

axios.interceptors.response.use(response => {
    if (!response.data) {
        return Promise.reject(response)
    }
    return response
}, (error) => {
    // if (error.request.status === 401) {
    //     router.push('/login')
    // }
    return Promise.reject(error)
})
