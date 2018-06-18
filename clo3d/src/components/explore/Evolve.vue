<template>
    <div class="section col-12 evolve section-pad">
        <div class="content-box col-md-6 offset-md-3">
            <div class="title title-sub-style01-black">{{ $t('explore.TEMP_EX14') }}</div>
            <div class="desc contents-txt-style02-black">{{ $t('explore.TEMP_EX15') }}</div>
        </div>
        <div v-video="" class="container video-item embed-responsive embed-responsive-16by9 container-max-xxl">
            <video poster="~static/images/video-posters/new-way.jpg" playsinline muted loop>
                <source src="~static/videos/whyclo/new-way.mp4"/>
            </video>
            <a href="#" @click.prevent="" class="btn-play-video"></a>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Evolve',
        data() {
            return {
                name: 'Evolve'
            }
        },
        mounted() {
            const scrollMonitor = require('scrollmonitor')
            const myElement = document.querySelector('.evolve video')
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
        .evolve {
            background-color: #ede9e7;
        }
    }
</style>