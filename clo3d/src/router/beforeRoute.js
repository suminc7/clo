
import * as cookies from '../utils/cookies'
import emailVerifyStatus from '../utils/getEmailStatus'
import { ae, ad } from '../utils/encrypt'
import { isCheckMobile } from '../utils/mobile-detect'

export function createSSID(session) {
    const enc = ae(cookies.getUserId() + ':' + session.path, cookies.getToken())
    cookies.setSSID(enc)
}

function removeRedirect(session) {
    cookies.removeItem('ssid')
    window.location.href = session.path
}

function checkToken(session) {
    const enc = cookies.getSSID()
    const dec = ad(enc, cookies.getToken())

    return dec.split(':')[0] === cookies.getUserId() && dec.split(':')[1] === session.path
}

export default function(router, store) {
    router.beforeEach((to, from, next) => {
        /*
         * -1: 로그인 상태가 아닐때만 접근 가능하고 로그인 상태일땐 index로 redirect 된다, 예) login, join 등
         *  1: 로그인 상태일때만 접근 가능, 로그인페이지로 보내주고 이전 페이지로 redirect 된다, 예) /mypage/** 등
         *  2: 로그인 상태일때만 접근 가능, 로그인페이지로 보내지만 index로 redirect 된다, 예) /checkout/revieworder 등
         *  10: emailVerifyStatus가 epnding이 아니면 index로 redirect
         *  11: emailVerifyStatus가 epnding이 아니면 이전페이지로 redirect
         */

        let auth = null
        let session = null
        let mobile = null
        to.matched.some(record => {
            auth = record.meta.auth
            session = record.meta.session
            mobile = record.meta.mobile
        })

        if (mobile === 0 && isCheckMobile) {
            next({ path: '/' })

            return
        }

        const isLogin = store.state.account.isLogin()
        console.log('auth', auth)
        console.log('session', session)

        // 1: token 없으면 path url로 간다, 2: 마지막 페이지 session 생성은 각 페이지에서 createSSID 메서드로 한다.
        if (session && session.id === 1) {
            if (cookies.getToken()) {
                if (!checkToken(session)) {
                    removeRedirect(session)
                }
            }
        } else if (session && session.id === 2) {
            if (cookies.getToken()) {
                if (checkToken(session)) {
                    cookies.removeItem('ssid')
                } else {
                    removeRedirect(session)
                }
            }
        } else {
            cookies.removeItem('ssid')
        }

        if (auth === -1) {
            isLogin ? next({ path: '/' }) : next()
        } else if (auth === 1) {
            isLogin ? next() : next({ path: '/login', query: { 'return_to': to.fullPath } })
        } else if (auth === 2) {
            isLogin ? next() : next({ path: '/' })
        } else if (auth === 10) {
            emailVerifyStatus() === 'pending' ? next() : next({ path: '/' })
        } else if (auth === 11) {
            emailVerifyStatus() === 'pending' ? next() : next({ path: to.query['return_to'] })
        } else {
            next()
        }
    })
}
