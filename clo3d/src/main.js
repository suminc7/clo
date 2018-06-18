
import { detect } from 'detect-browser'

try {

    const browser = detect()
    const isOldBrowser = (browser.name === 'ie' && browser.version.indexOf('9') === 0) || (browser.name === 'safari' && browser.version.indexOf('7') === 0)

    if (isOldBrowser) {
        if (window.location.href.indexOf('/browserupgrade') > -1) {
        } else {
            window.location.href = '/browserupgrade'
        }
    }

} catch(e) {
    console.log(e)
}




import Vue from 'vue'
import router from './router'
import beforeRoute from './router/beforeRoute'
import store from './store'
import VueI18n from 'vue-i18n'

import App from './App.vue'
import defaultHeader from './components/Header'
import logoHeader from './components/HeaderLogo'
import MainVideo from './components/index/MainVideo.vue'
import vueFooter from './components/Footer.vue'
import vueFooterSimple from './components/FooterSimple.vue'

import validate from './validate'
import messages from '../languages/lang.json'
import './api/config'
import * as cookies from './utils/cookies'
import vMediaQuery from 'v-media-query'
import Users from './plugins/users'
import Submit from './plugins/submit'
import { breakPoints } from './data'
import './directives/loading'
import './directives/video'
import './directives/select'
import './directives/bindEnter'

Vue.use(vMediaQuery, {
    variables: breakPoints
})

// TODO: extract 변경으로 안되서 차후 수정..
// const aa = require('sass-variables-loader!../sass/variables.scss')
// console.log('aa', aa)

const lang = cookies.getLocale()

Vue.config.productionTip = false
Vue.use(Users, { store })
Vue.use(Submit, {})
Vue.use(VueI18n)

const i18n = new VueI18n({
    locale: lang,
    messages // set locale messages
})

validate(lang, i18n)
beforeRoute(router, store)

// global component 등록.
Vue.component('vueHeader', defaultHeader)
Vue.component('vueHeaderLogo', logoHeader)
Vue.component('vueFooter', vueFooter)
Vue.component('vueFooterSimple', vueFooterSimple)
Vue.component('MainVideo', MainVideo)

new Vue({
    el: '#app',
    router,
    store,
    i18n,
    template: '<App/>',
    components: {
        App
    }
})

