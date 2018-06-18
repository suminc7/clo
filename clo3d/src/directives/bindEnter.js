import Vue from 'vue'

let targetEl = null
const onEnter = function(event) {
    if (event.which === 13) {
        targetEl.click() // ajax 보내지 않는 팝업(ajax 보내는 팝업은 form 사용)
    }
    console.log('enter key')
}

Vue.directive('bindEnter', {
    inserted(el, binding, vnode) {
        const focusedEl = document.querySelectorAll(':focus')
        targetEl = el

        focusedEl.forEach((el, index) => {
            el.blur()
        })

        document.addEventListener('keyup', onEnter)
    },
    unbind() {
        document.removeEventListener('keyup', onEnter)
    }
})
