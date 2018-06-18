import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VueI18n from 'vue-i18n'
import messages from '../languages/lang.json'

import 'babel-polyfill'
import '../sass/style.scss'

Vue.config.productionTip = false

Vue.use(VueI18n)
const i18n = new VueI18n({
    locale: 'en',
    messages // set locale messages
})

new Vue({
    el: '#app',
    router,
    store,
    i18n,
    template: '<App/>',
    components: { App }
})

/* eslint-disable */
// ;(function(d, s, id) {
//     let js, fjs = d.getElementsByTagName(s)[0]
//     if (d.getElementById(id)) { return }
//     js = d.createElement(s); js.id = id
//     js.src = '/static/js/benefit.js'
//     fjs.parentNode.insertBefore(js, fjs)
// }(document, 'script', 'benefit-widget'))
/* eslint-enable */

