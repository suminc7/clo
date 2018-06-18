import MobileDetect from 'mobile-detect'
const md = new MobileDetect(window.navigator.userAgent)

const ismobile = (function() {
    return !!(md.mobile() || md.tablet())
})()

export const isCheckMobile = ismobile
console.log('checkMobile', isCheckMobile)
