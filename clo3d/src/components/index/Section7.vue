<template>
    <section class="main-section07">
        <div class="video-container">
            <video poster="~static/images/video-posters/index/05_bring_fashion.jpg" playsinline muted loop>
                <source v-if="$mq.above($mv.sm)" src="~static/videos/index/05_bring_fashion.mp4"/>
                <source v-if="$mq.below($mv.sm)" src="~static/videos/index/05_bring_fashion_m.mp4"/>
            </video>
        </div>
        <div class="container clearfix">
            <div class="col-12">
                <h2 class="en">{{ $t('index.MAIN_SECTION07_TITLE01') }}<br/>{{ $t('index.MAIN_SECTION07_TITLE02') }}<br/>{{ $t('index.MAIN_SECTION07_TITLE03') }}<div class="videoitemtowatch"></div></h2>
            </div>
        </div>
        <div class="copyright">{{ $t('index.COPYRIGHT_ATACAC') }}</div>
    </section>
</template>

<script>
    export default {
        name: 'Section7',
        data() {
            return {
                name: 'Section7'
            }
        },
        mounted() {
            const scrollMonitor = require('scrollmonitor')
            const video = document.querySelector('.main-section07 video')
            const myElement = document.querySelector('.main-section07 .videoitemtowatch')
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
        .main-section07 {
            color:#fff;
            position: relative;

            h2 {
                padding: 244px 0;
                color:#fff;
                font-size: 200px;
                font-weight: 200;
                letter-spacing: 25px;
                line-height: 200px;
            }
        }

        @include media-breakpoint-down(lg) {
            .main-section07 {
                h2 {
                    padding: 209px 0;
                    font-size: 100px;
                    line-height: 1.1;
                    letter-spacing: 12px;
                }
            }
        }

        @include media-breakpoint-down(sm) {
            .main-section07 {
                h2 {
                    font-size: 40px;
                    line-height: 1.25;
                    letter-spacing: 4.8px;
                    text-align:center;
                }
            }
        }
    }
</style>