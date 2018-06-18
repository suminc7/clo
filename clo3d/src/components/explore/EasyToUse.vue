<template>
    <div class="section col-12 easy-to-use section-pad">
        <div class="title title-sub-style01-black col-md-8 offset-md-2">{{ $t('explore.TEMP_EX4') }}</div>
        <div class="desc contents-txt-style02-black col-md-6 offset-md-3">{{ $t('explore.TEMP_EX5') }}</div>
        <div v-video="" class="container video-item container-max-xxl clearfix">
            <video poster="~static/images/video-posters/easy-to-use.jpg" playsinline muted loop>
                <source src="~static/videos/whyclo/easy-to-use.mp4"/>
            </video>
            <a href="#" @click.prevent="" class="btn-play-video"></a>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'EasyToUse',
        data() {
            return {
                name: 'EasyToUse'
            }
        },
        mounted() {
            const scrollMonitor = require('scrollmonitor')
            const myElement = document.querySelector('.easy-to-use video')
            const elementWatcher = scrollMonitor.create(myElement)
            elementWatcher.fullyEnterViewport(() => {
                myElement.play()
            })
            elementWatcher.exitViewport(() => {
                myElement.pause()
            })
        }

    }
</script>

<style lang="scss">
    .explore {
        .easy-to-use {
            background-color: #232328;
            .title, .desc {
                color: white;
            }
            .video-item {
                font-size: 0;
                video {
                    width: 100%;
                }
            }
        }
    }
</style>