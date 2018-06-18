<template>
    <div id="app">
        <router-view></router-view>
        <popup />
        <a href="#" @click.prevent="gotoTop" class="goToTopBtn"></a>
    </div>
</template>

<script>
    import { mapActions } from 'vuex'
    import { TweenLite, Power2 } from 'gsap'
    import ScrollToPlugin from 'gsap/ScrollToPlugin'
    import popup from './components/popup/Popup'

    export default {
        name: 'app',
    
        data() {
            return {
                gotoBtn: null,
                ison: false,
                isoff: true
            }
        },
        components: {
            popup
        },
        methods: {
            ...mapActions('account', [
                'setHeaders'
            ]),
            ...mapActions('userInfo', [
                'setData'
            ]),
            gotoTop() {
                new ScrollToPlugin()
                TweenLite.to(window, 0.6, { scrollTo: { y: 0, ease: Power2.easeInOut } })
            },
            setTopButton(e) {
                const scrollTop = document.documentElement.scrollTop || document.body.scrollTop || 0

                if (scrollTop > 500) {
                    if (this.ison) return
                    TweenLite.to(this.gotoBtn, 0.3, { opacity: 1 })
                    //                    console.log('ison scrollTop', scrollTop)
                    this.ison = true
                    this.isoff = false
                } else {
                    if (this.isoff) return
                    TweenLite.to(this.gotoBtn, 0.3, { opacity: 0 })
                    //                    console.log('isoff scrollTop', scrollTop)
                    this.ison = false
    
                    this.isoff = true
                }
            }
        },
        created() {
            this.setHeaders() // 새로 고침 했을 때, axio header등 기본 세팅 다시 한다. (새로고침 하면 전부 날라감.)
        },
        mounted() {
            this.gotoBtn = document.querySelector('.goToTopBtn')
            TweenLite.set(this.gotoBtn, { opacity: 0 })
            window.addEventListener('scroll', this.setTopButton)
        }
    }
</script>

<style lang="scss">
    .goToTopBtn {
        position: fixed;
        bottom: 180px;
        right: 1%;
        display: block;
        width: 50px;
        height: 50px;
        background: url('~static/images/common/top.svg') no-repeat center;
        z-index: 9000;
    }
</style>