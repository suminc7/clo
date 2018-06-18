// import axios from 'axios'
// import * as cookieUtils from '../utils/cookies'

// interceptors 설정
// status 401 이면 우선 home으로 Redirect
// axios.interceptors.response.use((response) => {
//     // Do something with response data
//     return response
// }, (error) => {
//     if (error.request.status === 400 || error.request.status === 401) {
//         cookieUtils.deleteUserCookies()
//         window.location.href = '/login'
//         actions.signout()
//     }
//     return Promise.reject(error)
// })

const actions = {

}

export default actions
