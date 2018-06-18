import Vue from 'vue'

Vue.directive('video', {
    inserted(el, binding, vnode) {
        el.style.position = 'relative'

        const video = el.querySelector('video')
        const playBtn = el.querySelector('.btn-play-video')

        playBtn.addEventListener('click', () => {
            video.play()
        })

        if (video) {
            video.onplay = () => {
                playBtn.style.visibility = 'hidden'
            }
        }
    }
})
