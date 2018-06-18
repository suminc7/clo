<template>
    <div class="section unlimited-design clearfix">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide img img1"></div>
                <div class="swiper-slide img img2"></div>
                <div class="swiper-slide img img3"></div>
                <div class="swiper-slide img img4"></div>
            </div>


            <div class="content-box" :class="{white: isWhite}">
                <div class="content-boxInner">
                    <p v-if="!isMobile"><img src="~static/images/common/img-slideguide.svg" class="slideGuide" alt="icon guide" /></p>
                    <div class="title title-sub-style01-black" v-html="$t('explore.TEMP_EX8')"></div>
                    <div class="desc contents-txt-style02-black">{{ $t('explore.TEMP_EX9') }}</div>
                    <div class="swiper-pagination"></div>
                </div>
            </div>


            <div class="copyright" :class="{white: copyrightWhite}">{{ $t('explore.UNLIMITED_COPY_RIGHT') }}</div>
        </div>
    </div>
</template>

<script>
    import Swiper from '../../externals/swiper.jquery.umd'
    import { isCheckMobile } from '../../utils/mobile-detect'

    export default {
        name: 'UnlimitedDesign',
        data() {
            return {
                name: 'UnlimitedDesign',
                isWhite: false,
                copyrightWhite: false,
                isMobile: isCheckMobile
            }
        },
        mounted() {
            const swiper = new Swiper('.unlimited-design .swiper-container', {
                pagination: '.unlimited-design .swiper-pagination',
                loop: true,
                onSlideChangeStart: (e) => {
                    console.log(e.activeIndex)
                    this.isWhite = e.activeIndex === 4 || e.activeIndex === 0
                    this.copyrightWhite = e.activeIndex === 4 || e.activeIndex === 0
                },
                onTouchStart: () => {
                    clearInterval(timer)
                }
            })

            let timer = null
            const scrollMonitor = require('scrollmonitor')
            const myElement = document.querySelector('.unlimited-design .title')
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
        .unlimited-design {
            padding: 0;
            position: relative;

            .copyright {
                @include media-breakpoint-down(sm) {
                    color: white;
                }
            }

            .title {
                padding-top: 10px;
            }

            @include media-breakpoint-up(sm) {
                .title {
                    text-align: center;
                }

                .desc {
                    text-align: center;
                }

                .swiper-pagination {
                    text-align: center;
                }
            }

            @include media-breakpoint-up(md) {
                .title {
                    text-align: left;
                }

                .desc {
                    text-align: left;
                }

                .swiper-pagination {
                    text-align: left;
                }
            }


            .swiper-slide {
                height: 670px;
                background-color: #8c8c8e;
                &:before {
                    content: "";
                    display: block;
                    width: 100%;
                    height: 100%;
                    background-color: rgba(0,0,0,0.5);
                }
                @include media-breakpoint-up(md) {
                    height: 768px;
                    &:before {
                        display: none;
                    }
                }
                @include media-breakpoint-up(xl) {
                    height: 810px;
                    &:before {
                        display: none;
                    }
                }
                @include media-breakpoint-up(xxl) {
                    height: 1079px;
                    &:before {
                        display: none;
                    }
                }
            }


            .content-box {
                position: absolute;
                top: 0;
                left: 0;
                bottom: 0;
                max-width: $fhd;
                margin: 0 auto;

                .content-boxInner {
                    display: inline-block;
                    vertical-align: middle;
                }

                &:before {
                    content: '';
                    display: inline-block;
                    height: 100%;
                    vertical-align: middle;
                }

                &.white {
                    .title,
                    .desc,
                    .swiper-pagination {
                        color: white;
                    }
                }

                @include media-breakpoint-up(xs) {
                    & {
                        width: 100%;
                        padding: 0 20px;
                    }

                    .title,
                    .desc,
                    .swiper-pagination {
                        color: white;
                    }
                }

                @include media-breakpoint-up(md) {
                    & {
                        width: 260px;
                        box-sizing: content-box;
                        padding: 0 90px;
                    }

                    .title,
                    .desc,
                    .swiper-pagination {
                        color: #232328;
                    }
                }

                @include media-breakpoint-up(xl) {
                    & {
                        width: 460px;
                        padding: 0 170px;
                    }
                }
            }

            .img {
                background-size: cover!important;
                &.img1 {
                    background: url('~static/images/explore/img_UnlimitedDesign_m1.jpg') no-repeat top center;
                    @include media-breakpoint-up(md) {
                        background: url('~static/images/explore/img-unlimited-md-1.jpg') no-repeat top center;
                    }
                    @include media-breakpoint-up(xl) {
                        background: url('~static/images/explore/img-unlimited-1.jpg') no-repeat top center;
                    }
                }
                &.img2 {
                    background: url('~static/images/explore/img_UnlimitedDesign_m2.jpg') no-repeat top center;
                    @include media-breakpoint-up(md) {
                        background: url('~static/images/explore/img-unlimited-md-2.jpg') no-repeat top center;
                    }
                    @include media-breakpoint-up(xl) {
                        background: url('~static/images/explore/img-unlimited-2.jpg') no-repeat top center;
                    }
                }
                &.img3 {
                    background: url('~static/images/explore/img_UnlimitedDesign_m3.jpg') no-repeat top center;
                    @include media-breakpoint-up(md) {
                        background: url('~static/images/explore/img-unlimited-md-3.jpg') no-repeat top center;
                    }
                    @include media-breakpoint-up(xl) {
                        background: url('~static/images/explore/img-unlimited-3.jpg') no-repeat top center;
                    }
                }
                &.img4 {
                    background: url('~static/images/explore/img_UnlimitedDesign_m4.jpg') no-repeat top center;
                    @include media-breakpoint-up(md) {
                        background: url('~static/images/explore/img-unlimited-md-4.jpg') no-repeat top center;
                    }
                    @include media-breakpoint-up(xl) {
                        background: url('~static/images/explore/img_unlimited_4.jpg') no-repeat top center;
                    }
                }

            }

            .slideGuide {
                display: none;

                @include media-breakpoint-up(xl) {
                    & {
                        display: block;
                    }
                }
            }
        }
    }

    .ko .explore .unlimited-design .content-box {

        @include media-breakpoint-up(sm) {
            & {
                padding: 0 40px;
            }
        }

        @include media-breakpoint-up(md) {
            & {
               // padding: 0;
            }
        }

        @include media-breakpoint-up(lg) {
            & {
               // width: 300px;
            }
        }

        @include media-breakpoint-up(xl) {
            & {
                width: 300px;
                padding: 0 80px;
            }
        }

        @include media-breakpoint-up(xxl) {
            & {
                width: 460px;
                padding: 0 80px;
            }
        }


    }
</style>