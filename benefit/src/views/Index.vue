<template>
    <div class="index">
        <div class="video-contents">
            <div class="look-around noselect">
                <div class="icon-click"></div>
                <div class="desc">Click and<br>Look around</div>
            </div>

            <div class="video-container main">
                <video id="myVideo" preload="auto" playsinline muted loop>
                    <source src="~static/videos/Layout0320.mp4"/>
                </video>
            </div>
            <div class="there-is font-visual-title c-white noselect">
                THERE<br>
                IS<br>
                A<br>
                REAL<br>
                FITTING<br>
            </div>
        </div>
        <what-is-benefit/>
        <how-it-works/>
        <visit-fitting-store/>
    </div>
</template>

<script>
    import WhatIsBenefit from '../components/index/WhatIsBenefit'
    import VisitFittingStore from '../components/index/VisitFittingStore'
    import HowItWorks from '../components/index/HowItWorks'

    let video = null
    let videoContainer = null
    let currentX = 0
    let currentTime = 0

    function mouseMove(e) {
        if (video.duration >= currentTime + (e.clientX - currentX) * 0.002) {
            video.currentTime = currentTime + (e.clientX - currentX) * 0.002
        }
    }
    function mouseDown(e) {
        currentTime = video.currentTime
        currentX = e.clientX
        document.addEventListener('mouseup', mouseUp)
        videoContainer.addEventListener('mousemove', mouseMove)
    }
    function mouseUp(e) {
        document.removeEventListener('mouseup', mouseUp)
        videoContainer.removeEventListener('mousemove', mouseMove)
    }

    export default {
        components: {
            HowItWorks,
            VisitFittingStore,
            WhatIsBenefit },
        name: 'Index',
        data() {
            return {
                name: 'Index'
            }
        },
        mounted() {
            video = document.querySelector('#myVideo')
            video.addEventListener('canplay', () => {
                // video.currentTime = 0
            })

            videoContainer = document.querySelector('.video-contents')
            videoContainer.addEventListener('mousedown', mouseDown)
        }

    }
</script>

<style lang="scss">
    @import "~scss/vars";
    @import "~scss/responsive";
    .index {
        .there-is {
            position: absolute;
            left: 50%;
            top: 50%;
            text-align: center;
            transform: translateX(-50%) translateY(-50%);
            -webkit-transform: translateX(-50%)translateY(-50%);
            -ms-transform: translateX(-50%) translateY(-50%);
        }
        .video-contents {
            height: 1024px;
            position: relative;
            &:before {
                content: '';
                position: absolute;
                width: 100%;
                height: 100%;
                background-color: rgba(0,0,0,0.5);
            }
            @include media-breakpoint-down(xs) {
                height: 667px;
            }
        }
        .video-container.main {
            height: 100%;
        }
        .look-around {
            padding: 35px 0;
            text-align: center;
            width: 150px;
            height: 150px;
            border: 1px solid $coral;
            border-radius: 75px;
            position: absolute;
            bottom: 50px;
            left: 50%;
            margin-left: -75px;
            .desc {
                margin-top: 10px;
                color: $coral;
                font-family: Lato, sans-serif;
                font-size: 12px;
                font-weight: 400;
                line-height: 16px;
            }
            @include media-breakpoint-down(xs) {
                padding: 18px 0;
                width: 100px;
                height: 100px;
                margin-left: -50px;
                .desc {
                    margin-top: 5px;
                    font-size: 10px;
                    font-weight: 400;
                    line-height: 14px;
                }
            }
        }
    }
</style>