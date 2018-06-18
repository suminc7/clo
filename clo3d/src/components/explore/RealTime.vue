<template>
    <div class="section col-12 real-time section-pad">
        <div class="title title-sub-style01-black col-md-8 offset-md-2">{{ $t('explore.TEMP_EX2') }}</div>
        <div class="desc contents-txt-style02-black col-md-6 offset-md-3">{{ $t('explore.TEMP_EX3') }}</div>
        <div v-video="" class="container video-item embed-responsive embed-responsive-16by9 container-max-xxl clearfix">
            <video poster="~static/images/video-posters/real-time.jpg" playsinline muted loop>
                <source src="~static/videos/whyclo/real-time.mp4"/>
            </video>
            <a href="#" @click.prevent="" class="btn-play-video blue"></a>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'RealTime',
        data() {
            return {
                name: 'RealTime'
            }
        },
        mounted() {
            const scrollMonitor = require('scrollmonitor')
            const myElement = document.querySelector('.real-time video')
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

<style lang="scss"></style>