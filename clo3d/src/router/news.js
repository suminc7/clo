export default [
    {
        path: '/company/news',
        name: 'News',
        meta: { section: 'scoop' }, // news: scoop, swupdate: swupdate, recruit: recruit
        component: r => require.ensure([], () => r(require('../components/company/News.vue')), 'company')
    },
    {
        path: '/company/newsdetail/:seq',
        name: 'NewsDetail',
        meta: { section: 'scoop' },
        component: r => require.ensure([], () => r(require('../components/company/ArticleDetail.vue')), 'company')
    },
    {
        path: '/company/swupdate/:seq',
        name: 'SwUadeta',
        meta: { section: 'swupdate' },
        component: r => require.ensure([], () => r(require('../components/company/ArticleDetail.vue')), 'company')
    },
    {
        path: '/company/about',
        name: 'About',
        meta: { },
        component: r => require.ensure([], () => r(require('../components/company/About.vue')), 'company')
    }
]
