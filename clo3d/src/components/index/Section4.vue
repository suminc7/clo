<template>
    <section v-video="" class="main-section04">
        <div class="video-container">
            <video poster="~static/images/video-posters/index/04_real-time.jpg" playsinline muted loop>
                <source v-if="$mq.above($mv.sm)" src="~static/videos/index/04_real-time.mp4"/>
                <source v-if="$mq.below($mv.sm)" src="~static/videos/index/04_real-time_m.mp4"/>
            </video>
        </div>
        <div class="container clearfix">
            <h2 class="title-sub-style01-black main-title">{{ $t('index.MAIN_SECTION04_TITLE') }}</h2>
            <P class="dash_line"></P>
            <P class="main-section04_txt_spot italic-txt-style01-black sub-text">
                {{ $t('index.MAIN_SECTION04_TXT_SPOT') }}<br/>{{ $t('index.MAIN_SECTION04_TXT_SPOT2') }}
            </P>
            <div class="videoitemtowatch"></div>
            <a href="#" @click.prevent="" class="btn-play-video basic"></a>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'Section4',
        data() {
            return {
                name: 'Section4'
            }
        },
        mounted() {
            const scrollMonitor = require('scrollmonitor')
            const video = document.querySelector('.main-section04 video')
            const myElement = document.querySelector('.main-section04 .videoitemtowatch')
            const elementWatcher = scrollMonitor.create(myElement)
            elementWatcher.enterViewport(() => {
                video.play()
            })
            elementWatcher.exitViewport(() => {
                video.pause()
            })
        }

    }
</script>

<style lang="scss">
    @import "~sass/responsive";
    @import "~sass/variables";
    .index {
        .main-section04 {
            text-align: center;
            position: relative;

            .main-title {
                letter-spacing: 15px;
            }
            .sub-text {
                letter-spacing: normal;
            }
            .container {
                padding: 450px 0!important;
            }

            .dash_line {
                height: 2px;
                width: 50px;
                margin: 50px auto;
                background-color: #232328;
            }

            p.main-section04_txt_spot {
                height: 60px;
                text-align: center;
            }
        }
        @include media-breakpoint-down(xl) {
            .main-section04 {
                .container {
                    padding: 390px 0!important;
                }
            }
        }
        @include media-breakpoint-down(lg) {
            .main-section04 {

                .container {
                    padding: 250px 0!important;
                }

                .dash_line {
                    display: none;
                }

                p.main-section04_txt_spot {
                    display: none;
                }
            }
        }

        @include media-breakpoint-down(md) {
            .main-section04 {
                .container {
                    padding: 250px 0!important;
                }

                .dash_line {
                    display: none;
                }

                p.main-section04_txt_spot {
                    display: none;
                }
            }
        }
        @include media-breakpoint-down(sm) {
            .main-section04 {
                .container {
                    padding: 170px 0 !important;
                }
            }
        }
    }
</style>