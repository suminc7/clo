<template>
    <div class="section col-12 streamline section-pad">
        <div class="content-box col-md-6 offset-md-3">
            <div class="title title-sub-style01-black">{{ $t('explore.TEMP_EX12') }}</div>
            <div class="desc contents-txt-style02-black">{{ $t('explore.TEMP_EX13') }}</div>
        </div>
        <div class="swiper-pagination clearfix"></div>

        <div class="container swiper-container clearfix container-max-xxl">

            <div class="swiper-wrapper">
                <div class="swiper-slide embed-responsive embed-responsive-16by9 img img1">Slide 1</div>
                <div class="swiper-slide embed-responsive embed-responsive-16by9 img img2">Slide 2</div>
                <div class="swiper-slide embed-responsive embed-responsive-16by9 img img3">Slide 3</div>
                <div class="swiper-slide embed-responsive embed-responsive-16by9 img img4">Slide 4</div>
            </div>
        </div>
    </div>
</template>

<script>
    import Swiper from '../../externals/swiper.jquery.umd'
    export default {
        name: 'StreamLine',
        data() {
            return {
                name: 'StreamLine'
            }
        },
        mounted() {
            const swiper = new Swiper('.streamline .swiper-container', {
                loop: true,
                pagination: '.streamline .swiper-pagination',
                onTouchStart: () => {
                    clearInterval(timer)
                }
            })

            let timer = null
            const scrollMonitor = require('scrollmonitor')
            const myElement = document.querySelector('.streamline .swiper-pagination')
            const elementWatcher = scrollMonitor.create(myElement)
            elementWatcher.enterViewport(() => {
                timer = setInterval(() => {
                    swiper.slideNext()
                }, 4000)
                setTimeout(() => {
                    swiper.slideNext()
                }, 1000)
            })
            elementWatcher.exitViewport(() => {
                clearInterval(timer)
            })
        }

    }
</script>

<style lang="scss">
    .explore {
        .streamline {
            background-color: #ede9e7;
            .swiper-pagination {
                margin-bottom: 25px;
            }

            .img {

                &.img1 {
                    background: url('~static/images/explore/img_stremline_1.jpg') no-repeat top center;
                    background-size: cover;
                }
                &.img2 {
                    background: url('~static/images/explore/img_stremline_2.jpg') no-repeat top center;
                    background-size: cover;
                }
                &.img3 {
                    background: url('~static/images/explore/img_stremline_3.jpg') no-repeat top center;
                    background-size: cover;
                }
                &.img4 {
                    background: url('~static/images/explore/img_stremline_5.jpg') no-repeat top center;
                    background-size: cover;
                }

            }
        }
    }
</style>