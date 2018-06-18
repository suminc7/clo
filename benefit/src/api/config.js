import axios from 'axios'
import urls from '../utils/urls'
import store from '../store'
import _debounce from 'lodash/debounce'

console.log('urls.api', urls.api)
axios.defaults.baseURL = urls.api
axios.defaults.headers.common['Content-Type'] = 'application/json'

// axios.interceptors.request.use(response => {
//     console.log('response', response)
//     if (!response.data) {
//         return Promise.reject(response)
//     }
//     return response
// }, (error) => {
//     return Promise.reject(error)
// })

const throttledFunc = _debounce(() => {
    store.dispatch('activate', false)
    store.dispatch('account/reset', null, { root: true })
    store.dispatch('popup/onPopup', { type: 'login' })
}, 100)

axios.interceptors.response.use(response => {
    if (!response.data) {
        return Promise.reject(response)
    }
    return response
}, (error) => {
    if (error.request.status === 401) {
        throttledFunc()
    }
    return Promise.reject(error)
})

