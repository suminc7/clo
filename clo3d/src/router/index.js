import Vue from 'vue'
import Router from 'vue-router'

import account from './account'
import mypage from './mypage'
import error from './error'
import pricing from './pricing'
import users from './users'
import news from './news'
import download from './download'
import explore from './explore'
import business from './business'
import admin from './admin'
import styleGuide from './styleGuide'
import event from './event'

import Index from '../components/Index.vue'
import helpCenter from '../components/Helpcenter.vue'
import notFound from '../components/error/NotFound.vue'
import maintenance from '../components/error/Maintenance'
import browserUpgrade from '../components/error/BrowserUpgrade'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Index',
            component: Index,
            meta: { }
        },
        {
            path: '/helpcenter',
            name: 'Helpcenter',
            component: helpCenter
        },
        {
            path: '/contact',
            name: 'Contact',
            component: r => require.ensure([], () => r(require('../components/contact/ContactUs.vue')), 'contact')
        },
        //https://www.clo3d.com/contact/renewalLicenseExpired{?userid=aa&product=1&...}
        {
            path: '/contact/renewalLicenseExpired',
            name: 'ContactRlcRenewal',
            component: r => require.ensure([], () => r(require('../components/contact/RenewalLicenseExpired.vue')), 'contact')
        },
        {
            path: '/contact/complete',
            name: 'ContactComplete',
            component: r => require.ensure([], () => r(require('../components/contact/Complete.vue')), 'contact')
        },
        {
            path: '/quickstart',
            name: 'QuickStart',
            component: r => require.ensure([], () => r(require('../components/quickStart/QuickStart.vue')), 'quickstart')
        },
        {
            path: '/maintenance',
            name: 'Maintenance',
            component: maintenance
        },
        {
            path: '/browserupgrade',
            name: 'browserupgrade',
            component: browserUpgrade
        },

        ...explore,
        ...account,
        ...mypage,
        ...error,
        ...pricing,
        ...news,
        ...users,
        ...download,
        ...styleGuide,
        ...business,
        ...event,
        ...admin,
        {
            path: '*',
            name: 'NotFound',
            component: notFound
        }
    ],
    // 페이지 이동시 스크롤되는 위치 설정
    scrollBehavior(to, from, savedPosition) {
        console.log('scrollBehavior')

        // router-link를 통하지 않고 라우터 이동 시(next()) matched length는 0이다.
        // 새로고침 하거나 a테그로 이동할 때는 scrollBehavior 실행되지 않는다.

        if (from.matched.length === 0 || to.matched.length === 0) {
            return false
        }

        if (from.matched[0].path === '/mypage' && to.matched[0].path === '/mypage') {
            return false
        }

        if (from.matched[0].path === '/download' && to.matched[0].path === '/download') {
            return false
        }

        if (to.hash) { // 같은 페이지내 링크 걸때
            return false
        }

        return { x: 0, y: 0 }
    }
})

