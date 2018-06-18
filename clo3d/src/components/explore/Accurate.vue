<template>
    <div class="section col-12 accurate section-pad">
        <div class="content-box col-md-6 offset-md-3">
            <div class="title title-sub-style01-black">{{ $t('explore.TEMP_EX6') }}</div>
            <div class="desc contents-txt-style02-black">{{ $t('explore.TEMP_EX7') }}</div>
        </div>
        <div class="swiper-container clearfix">
            <div class="swiper-pagination"></div>
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <div class="col-12 col-md-5 offset-md-1 img img1"></div>
                    <div class="col-12 col-md-5 img img2"></div>
                </div>
                <div class="swiper-slide">
                    <div class="col-12 col-md-5 offset-md-1 img img3"></div>
                    <div class="col-12 col-md-5 img img4"></div>
                </div>
                <div class="swiper-slide">
                    <div class="col-12 col-md-5 offset-md-1 img img5"></div>
                    <div class="col-12 col-md-5 img img6"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Swiper from '../../externals/swiper.jquery.umd'
    export default {
        name: 'Accurate',
        data() {
            return {
                name: 'Accurate'
            }
        },
        mounted() {
            const swiper = new Swiper('.accurate .swiper-container', {
                pagination: '.accurate .swiper-pagination',
                loop: true,
                onTouchStart: () => {
                    clearInterval(timer)
                }
            })

            let timer = null
            const scrollMonitor = require('scrollmonitor')
            const myElement = document.querySelector('.accurate .swiper-pagination')
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
    @import "~sass/responsive";
    @import "~sass/variables";
    .explore {
        .accurate {
            .swiper-pagination {
                margin-bottom: 10px;
                @include media-breakpoint-up(md) {
                    margin-bottom: 20px;
                }
                @include media-breakpoint-up(xl) {
                    margin-bottom: 40px;
                }

            }

            .img1 {
                background: url(~static/images/explore/img-accurate-1@2x.jpg) no-repeat center center;
                background-size: contain;
                height: 240px;
                margin-top: 10px;
            }
            .img2 {
                background: url('~static/images/explore/accurate.gif') no-repeat center top;
                background-size: contain;
                height: 240px;
                margin-top: 10px;
            }
            .img3 {
                background: url('~static/images/explore/img-accurate-3.jpg') no-repeat center top;
                background-size: contain;
                height: 240px;
                margin-top: 10px;
            }
            .img4 {
                background: url('~static/images/explore/img-accurate-4.jpg') no-repeat center top;
                background-size: contain;

                height: 240px;
                margin-top: 10px;
            }
            .img5 {
                background: url('~static/images/explore/img-accurate-5.jpg') no-repeat center top;
                background-size: contain;
                height: 240px;
                margin-top: 10px;
            }
            .img6 {
                background: url('~static/images/explore/img-accurate-6.jpg') no-repeat center top;
                background-size: contain;
                height: 240px;
                margin-top: 10px;
            }
            .img {
                @include media-breakpoint-up(md) {
                    height: 276px;
                }
                @include media-breakpoint-up(xl) {
                    height: 400px;

                }
                @include media-breakpoint-up(xxl) {
                    height: 658px;
                }
            }
        }
    }
</style>