<template>
    <div class="container videoResponsive video-item embed-responsive embed-responsive-16by9 container-max-xxl userStoryPopup" style="overflow:visible">
        <video ref="videoTag" class="userStoryVideo" autoplay loop controls>
            <source :src="url" type="video/mp4">
        </video>
        <a href="#" @click.prevent="closePopup" class="btn-close-movie"><img src="~static/images/common/close_white.svg" alt="close"></a>
    </div>
</template>

<script>
    import { mapActions, mapState } from 'vuex'

    export default {
        name: 'UserStoryPopup',
        data() {
            return {
                name: 'UserStoryPopup'
            }
        },
        computed: {
            ...mapState('popup', [
                'popupData'
            ]),
            url() {
                return require(`../../../../static/videos/${this.popupData}`)
            }
        },
        methods: {
            ...mapActions('popup', [
                'closePopup'
            ])
        }
    }
</script>

<style lang="scss">

</style>