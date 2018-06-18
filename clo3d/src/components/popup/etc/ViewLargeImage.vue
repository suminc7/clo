<template>
    <div class="popup-contents vieLargeImage">
        <div class="vieLargeImage-inner">
            <img :src="src" alt="">
        </div>

        <a href="#" @click.prevent="closePopup" class="btn-mypage-pop-close"><img src="~static/images/common/close_gray.svg" alt="close" /></a>
    </div>
</template>


<script>
    import { mapGetters, mapActions } from 'vuex'

    export default {
        name: 'popupViewLargeImage',
        data() {
            return {

            }
        },
        computed: {
            ...mapGetters('popup', {
                'src': 'popupData'
            })
        },
        methods: {
            ...mapActions('popup', [
                'closePopup'
            ])
        }
    }
</script>


