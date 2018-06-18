export default [
    {
        path: '/mypage',
        name: 'mypage',
        redirect: '/mypage/dashboard',
        component: r => require.ensure([], () => r(require('../components/mypage/Layout.vue')), 'mypage'),

        children: [
            {
                path: 'dashboard',
                name: 'mypageDashboard',
                meta: { auth: 1, mobile: 0 },
                component: r => require.ensure([], () => r(require('../components/mypage/dashboard/Dashboard.vue')), 'mypage')
            },
            {
                path: 'account',
                name: 'mypageAccount',
                meta: { auth: 1, mobile: 0 },
                component: r => require.ensure([], () => r(require('../components/mypage/account/Account.vue')), 'mypage')
            },
            {
                path: 'license',
                name: 'mypageLicense',
                redirect: '/mypage/license/list',
                meta: { auth: 1, mobile: 0 },
                component: r => require.ensure([], () => r(require('../components/mypage/license/Layout.vue')), 'mypage'),
                children: [
                    {
                        path: '/mypage/license/list',
                        name: 'logdata',
                        meta: { auth: 1, mobile: 0 },
                        component: r => require.ensure([], () => r(require('../components/mypage/license/List')), 'mypage')
                    },
                    {
                        path: '/mypage/license/logdata',
                        name: 'logdata',
                        meta: { auth: 1, mobile: 0 },
                        component: r => require.ensure([], () => r(require('../components/mypage/license/LogData')), 'mypage')
                    }
                ]
            },
            {
                path: 'order',
                name: 'mypageOrder',
                meta: { auth: 1, mobile: 0 },
                component: r => require.ensure([], () => r(require('../components/mypage/order/Order.vue')), 'mypage')
            },
            {
                path: 'myitem',
                name: 'mypageMyItem',
                meta: { auth: 1, mobile: 0 },
                component: r => require.ensure([], () => r(require('../components/mypage/MyItem.vue')), 'mypage')
            }
        ]
    }
]
