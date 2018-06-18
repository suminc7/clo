<template>
    <div class="popup-contents trialPopup">
        <p class="txt-tooltip-spot contents-txt-style03-black" v-html="$t('OBT_4_1.ENTERPRISE_USER')"></p>
        <a href="#" @click.prevent="closePopup" class="btn-mypage-pop-close"><img src="~static/images/common/close_gray.svg" alt="close" /></a>
    </div>
</template>

<script>
    import { mapActions } from 'vuex'

    export default {
        name: 'popupObtEnterprise',
        methods: {
            ...mapActions('popup', [
                'closePopup'
            ])
        }
    }
</script>

<style scoped>

</style>