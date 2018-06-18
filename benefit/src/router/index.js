import Vue from 'vue'
import Router from 'vue-router'
import NotFound from '../components/NotFound'
import StyleGuide from '../views/StyleGuide.vue'
import Main from '../containers/Main.vue'
import StoreContainer from '../containers/StoreContainer.vue'
import Index from '../views/Index.vue'
import TestBenefitApi from '../components/TestBenefitApi'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Main,
            redirect: { name: 'Index' },
            children: [
                {
                    path: 'about',
                    name: 'Index',
                    component: Index
                },
                {
                    path: 'advantages',
                    name: 'Advantages',
                    component: r => require.ensure([], () => r(require('../views/Advantages')), 'advantages')
                },
                {
                    path: 'our-expertise',
                    name: 'OurExpertise',
                    component: r => require.ensure([], () => r(require('../views/OurExpertise')), 'our-expertise')
                },
                {
                    path: 'contact-us',
                    name: 'ContactUs',
                    component: r => require.ensure([], () => r(require('../views/ContactUs')), 'contact-us')
                }
            ]
        },
        {
            path: '/style-guide',
            name: 'StyleGuide',
            component: StyleGuide
        },
        {
            path: '/test-benefit-api',
            name: 'TestBenefitApi',
            component: TestBenefitApi
        },
        {
            path: '/store',
            name: 'StoreContain',
            redirect: { name: 'StoreContainer' },
            children: [
                {
                    path: 'main',
                    name: 'Store2'
                },
                {
                    path: ':roomId',
                    name: 'StoreList2',
                    redirect: { name: 'StoreList' }
                },
                {
                    path: 'info/:id',
                    name: 'StoreView2'
                }
            ]
        },
        {
            path: '/fittingroom',
            name: 'StoreContainer',
            // redirect: { name: 'StoreList', params: { roomId: null } },
            component: StoreContainer,
            children: [
                {
                    path: 'main',
                    name: 'Store',
                    component: r => require.ensure([], () => r(require('../components/Store')), 'store')
                },
                {
                    path: ':roomId',
                    name: 'StoreList',
                    component: r => require.ensure([], () => r(require('../components/store/StoreList')), 'store')
                },
                {
                    path: 'info/:id',
                    name: 'StoreView',
                    component: r => require.ensure([], () => r(require('../components/store/StoreView')), 'store')
                }
            ]
        },
        {
            path: '*',
            name: 'NotFound',
            component: NotFound
        }
    ],
    scrollBehavior(to, from, savedPosition) {
        if (to.name === 'StoreView' || to.name === 'StoreContainer') {
            return { x: 0, y: 0 }
        }
    }
})
