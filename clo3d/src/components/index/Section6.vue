<template>
    <section class="main-section06 section-pad">
        <div class="container clearfix">
            <div class="text col-xxl-3 offset-xxl-9">
                <div class="offset-xxl-2">
                    <h2 class="title-sub-style01-black">{{ $t('index.MAIN_SECTION06_TITLE01') }}<br/>{{ $t('index.MAIN_SECTION06_TITLE02') }}<br/>{{ $t('index.MAIN_SECTION06_TITLE03') }}</h2>
                    <div class="showcase-count italic-txt-style02-black"> <span><strong>0{{showcaseIndex}}</strong> / 0{{ maxImages }}</span></div>
                </div>
            </div>
            <div class="col-xxl-8 offset-xxl-1">
                <div class="zoom-box swiper-container clearfix">
                    <div class="swiper-wrapper">
                        <div v-for="n in maxImages" class="swiper-slide embed-responsive embed-responsive-16by9" :class="'img'+n"></div>
                    </div>
                </div>
                <div class="btn_zoom clearfix">
                    <a href="#" @click.prevent="" class="swiper-button-prev left"></a>
                    <a href="#" @click.prevent="" class="swiper-button-next right"></a>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import Swiper from '../../externals/swiper.jquery.umd'
    export default {
        name: 'Section6',
        data() {
            return {
                name: 'Section6',
                showcaseIndex: 1,
                maxImages: 7

            }
        },
        mounted() {
            const swiper = new Swiper('.zoom-box', {
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev',
                loop: true,
                onSlideChangeStart: (e) => {
                    console.log('onSlideChangeEnd', e.activeIndex)
                    let idx = e.activeIndex % this.maxImages
                    if (idx === 0) idx = this.maxImages
                    console.log(idx)
                    this.showcaseIndex = idx
                },
                onTouchStart: () => {
                    clearInterval(timer)
                }
            })

            let timer = null
            const scrollMonitor = require('scrollmonitor')
            const myElement = document.querySelector('.btn_zoom .swiper-button-next')
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

    .index {
        .main-section06 {
            position: relative;
            background-color: #EDE9E7;
            .container {
                position: relative;
            }

            .swiper-slide {
                /*width: 300px;
                height: 169px;
                @include media-breakpoint-up(md) {
                    width: 780px;
                    height: 440px;
                }
                @include media-breakpoint-up(md) {
                    width: 1180px;
                    height: 665px;
                }*/

                &.img1 {
                    background: url(~static/images/main/img-showcase-01-m@2x.jpg) no-repeat center;
                }
                &.img2 {
                    background: url(~static/images/main/img-showcase-02-m@2x.jpg) no-repeat center;
                }
                &.img3 {
                    background: url(~static/images/main/img-showcase-03-m@2x.jpg) no-repeat center;
                }
                &.img4 {
                    background: url(~static/images/main/img-showcase-04-m@2x.jpg) no-repeat center;
                }
                &.img5 {
                    background: url(~static/images/main/img-showcase-05-m@2x.jpg) no-repeat center;
                }
                &.img6 {
                    background: url(~static/images/main/img-showcase-06-m@2x.jpg) no-repeat center;
                }
                &.img7 {
                    background: url(~static/images/main/img-showcase-07-m@2x.jpg) no-repeat center;
                }
                @include media-breakpoint-up(md) {
                    &.img1 {
                        background: url(~static/images/main/img-showcase-01.jpg) no-repeat center;
                    }
                    &.img2 {
                        background: url(~static/images/main/img-showcase-02.jpg) no-repeat center;
                    }
                    &.img3 {
                        background: url(~static/images/main/img-showcase-03.jpg) no-repeat center;
                    }
                    &.img4 {
                        background: url(~static/images/main/img-showcase-04.jpg) no-repeat center;
                    }
                    &.img5 {
                        background: url(~static/images/main/img-showcase-05.jpg) no-repeat center;
                    }
                    &.img6 {
                        background: url(~static/images/main/img-showcase-06.jpg) no-repeat center;
                    }
                    &.img7 {
                        background: url(~static/images/main/img-showcase-07.jpg) no-repeat center;
                    }
                }


                background-size: 100%!important;
            }

            .swiper-button-prev {
                display: block;
                width: 59px;
                height: 18px;
                background: url(~static/images/common/btn_slide_prev.svg) no-repeat center;
                background-size: contain;
            }

            .swiper-button-next {
                display: block;
                width: 59px;
                height: 18px;
                background: url(~static/images/common/btn_slide_next.svg) no-repeat center;
                background-size: contain;
            }

            .text {
                text-align: left;
                @include media-breakpoint-up(xxl) {
                    position: absolute;
                }

            }

            h2 {
                margin-bottom: 50px;
                text-align: left;
            }

            img {
                width: 100%;
            }

            .showcase-right {
                position: absolute;
                right: 0;
                width: 100%;
                height: 100%;
            }

            .showcase-left {
                position: absolute;
                left: 0;
                width: 100%;
                height: 100%;
            }

            .showcase-count {
                text-align: left;
            }

            .zoom-box {
                position: relative;
            }
            .btn_zoom {
                position: relative;
                a {
                    displaY: inline-block;
                    width: 60px;
                    height: 18px;
                    margin: -58px 0 0 40px;
                    &.right {
                        margin: -58px 40px 0 0;
                    }
                }
            }
        }
        @include media-breakpoint-down(xl) {
            .main-section06 {
                h2 {
                    float: left;
                }
                .showcase-count {
                    float: left;
                    margin-top: 135px;
                    margin-left: 50px;
                }
            }
        }
        @include media-breakpoint-down(lg) {
            .main-section06 {
                h2 {
                    margin-bottom: 40px;
                }
                .showcase-count {
                    margin-top: 75px;
                    margin-left: 30px;
                }
                .zoom-box {
                    position: relative;
                }
                .btn_zoom {
                    a {
                        displaY: inline-block;
                        width: 60px;
                        height: 18px;
                        margin: -38px 0 0 20px;
                        &.right {
                            margin: -38px 20px 0 0;
                        }
                    }
                }
            }
        }

        @include media-breakpoint-down(md) {
            .main-section06 {
                h2 {
                    margin-bottom: 40px;
                    float: left;
                }

                .showcase-count {
                    float: left;
                    text-align: center;
                    margin-bottom: 30px;
                }

                .btn_zoom {

                }
            }
        }
        @include media-breakpoint-down(sm) {
            .main-section06 {
                h2 {
                    margin-bottom: 30px;
                    text-align: center;
                    float: none;
                }
                .showcase-count {
                    float: none;
                    margin-top: auto;
                    margin-left: auto;
                }
                .btn_zoom {
                    a {
                        width: 40px;
                        height: 12px;
                        margin-top: -32px;
                        &.right {
                            margin-top: -32px;
                        }
                    }
                }
            }

        }
    }
</style>