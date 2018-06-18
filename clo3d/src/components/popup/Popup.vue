<template>
    <transition name="fade">
        <div v-if="currentPopup && currentPopup !== popupTypes.TERMS" class="popup" tabindex="0">
            <div class="popup-inner" @click.self="closePopup">
                <!-- mypage/account -->
                <changeFullName v-if="currentPopup === popupTypes.CHANGE_FULL_NAME" />
                <changePassword v-if="currentPopup === popupTypes.CHANGE_PASSWORD" />
                <resendEmail v-if="currentPopup === popupTypes.RESEND_EMAIL" />
                <changePasswordSuccess v-if="currentPopup === popupTypes.CHANGE_PASSWORD_SUCCESS" />
                <changePasswordError v-if="currentPopup === popupTypes.CHANGE_PASSWORD_ERROR" />
                <alertProfileUploadFail v-if="currentPopup === popupTypes.ALERT_PROFILE_UPLOAD_FAIL" />
                <changeCountry v-if="currentPopup === popupTypes.CHANGE_COUNTRY" />
                <changeTimezone v-if="currentPopup === popupTypes.CHANGE_TIMEZONE" />

                <!-- mypage/order -->
                <changeBillingAddress v-if="currentPopup === popupTypes.CHANGE_BILLING_ADDRESS"/>
                <changeCard v-if="currentPopup === popupTypes.CHANGE_CARD"/>
                <changeCardError v-if="currentPopup === popupTypes.CHANGE_CARD_ERROR" />
                <cancelSubscription v-if="currentPopup === popupTypes.CANCEL_SUBSCRIPTION" />
                <cancelSubscriptionSuccess v-if="currentPopup === popupTypes.CANCEL_SUBSCRIPTION_SUCCESS" />

                <!-- pricing -->
                <alertSamePlan v-if="currentPopup === popupTypes.ALERT_SAME_PLAN" />
                <alertHasLicense v-if="currentPopup === popupTypes.ALERT_HAS_LICENSE" />
                <alertRemainSub v-if="currentPopup === popupTypes.ALERT_REMAIN_SUB" />
                <alertAtelierGuide v-if="currentPopup === popupTypes.ALERT_ATELIER_GUIDE" />
                <alertTrialHasLicense v-if="currentPopup === popupTypes.ALERT_TRIAL_HAS_LICENSE" />
                <alertTrialExpired v-if="currentPopup === popupTypes.ALERT_TRIAL_EXPIRED" />
                <alertTrialLogin v-if="currentPopup === popupTypes.ALERT_TRIAL_LOGIN" />
                <checkoutFail v-if="currentPopup === popupTypes.CHECKOUT_FAIL" />
                <invoice v-if="currentPopup === popupTypes.INVOICE" />
                <promotionLogin v-if="currentPopup === popupTypes.PROMOTION_LOGIN" />

                <!-- tooltip -->
                <tooltipStudent v-if="currentPopup === popupTypes.TOOLTIP_STUDENT" />
                <tooltipStudentJoin v-if="currentPopup === popupTypes.TOOLTIP_STUDENT_JOIN" />

                <!-- mobile -->
                <mobileBuy v-if="currentPopup === popupTypes.MOBILE_BUY" />

                <social-content v-if="currentPopup === popupTypes.SOCIAL_CONTENT" />
                <UserStory v-if="currentPopup === popupTypes.USER_STORY" />
                <alertAttachFileUploadFail v-if="currentPopup === popupTypes.ALERT_ATTACHFILE_UPLOAD_FAIL" />

                <obtEnterprise v-if="currentPopup === popupTypes.OBT_ENTERPRISE" />

                <viewLargeImage v-if="currentPopup === popupTypes.VIEW_LARGE_IMAGE" />
            </div>
        </div>
    </transition>
</template>

<script>
    import changeFullName from './mypage/account/ChangeFullName.vue'
    import changePassword from './mypage/account/ChangePassword.vue'
    import changePasswordError from './mypage/account/ChangePasswordError'
    import resendEmail from './mypage/account/ResendEmail.vue'
    import changePasswordSuccess from './mypage/account/ChangePasswordSuccess.vue'
    import changeCountry from './mypage/account/ChangeCountry'
    import changeTimezone from './mypage/account/ChangeTimezone'

    import changeBillingAddress from './mypage/order/ChangeBillingAddress.vue'
    import alertSamePlan from './pricing/AlertSamePlan.vue'
    import alertHasLicense from './pricing/AlertHasLicense.vue'
    import alertRemainSub from './pricing/AlertRemainSubscription.vue'
    import alertAtelierGuide from './pricing/AlertAtelierGuide.vue'
    import promotionLogin from './pricing/PromotionLogin.vue'
    import alertTrialHasLicense from './trial/AlertHasLicense'
    import alertTrialExpired from './trial/AlertTrialExpired'
    import alertTrialLogin from './trial/AlertLogin'
    import alertProfileUploadFail from './mypage/account/AlertMypageProfileUploadFail.vue'
    import checkoutFail from './pricing/CheckoutFail.vue'
    import invoice from './mypage/order/Invoice.vue'
    import changeCard from './mypage/order/ChangeCard.vue'
    import changeCardError from './mypage/order/ChangeCardError.vue'
    import cancelSubscription from './mypage/order/CancelSubscription.vue'
    import cancelSubscriptionSuccess from './mypage/order/CancelSubscriptionSuccess.vue'

    import tooltipStudent from './pricing/TooltipStudent.vue'
    import tooltipStudentJoin from './join/TooltipStudentJoin.vue'

    import mobileBuy from './pricing/MobileBuy.vue'
    import SocialContent from './users/SocialContent.vue'
    import UserStory from './users/Story'
    import alertAttachFileUploadFail from './AlertAttachFileUploadFail'

    import viewLargeImage from './etc/ViewLargeImage'

    // obt 엔터프라이즈 유저 안내 팝업
    import obtEnterprise from './ObtEnterprise'

    import { mapState, mapActions } from 'vuex'
    import * as popupTypes from '../../store/types/popup-types'

    export default {
        name: 'popup',
        data() {
            return {
                name: 'popup',
                popupTypes
            }
        },
        computed: {
            ...mapState('popup', [
                'currentPopup'
            ])
        },
        components: {
            SocialContent,
            UserStory,
            changeFullName,
            changePassword,
            changePasswordError,
            resendEmail,
            changePasswordSuccess,
            alertSamePlan,
            alertHasLicense,
            alertRemainSub,
            alertAtelierGuide,
            promotionLogin,
            alertTrialHasLicense,
            alertTrialExpired,
            alertTrialLogin,
            alertProfileUploadFail,
            alertAttachFileUploadFail,
            changeBillingAddress,
            checkoutFail,
            tooltipStudent,
            tooltipStudentJoin,
            mobileBuy,
            invoice,
            changeCard,
            changeCardError,
            cancelSubscription,
            cancelSubscriptionSuccess,
            changeCountry,
            obtEnterprise,
            viewLargeImage,
            changeTimezone
        },
        methods: {
            ...mapActions('popup', [
                'closePopup'
            ])
        }
    }
</script>
