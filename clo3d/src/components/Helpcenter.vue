<template>
    <div></div>
</template>

<script>
    import accountApi from '../api/account'
    import emailVerifyStatus from '../utils/getEmailStatus'
    import afterUserInfo from '../mixins/AfterUserinfo'
    import * as cookieUtils from '../utils/cookies'
    import zendeskUrl from '../utils/getZendeskUrlwithLocale'

    export default {
        name: 'helpcenter',
        data() {
            return {
                name: 'Helpcenter'
            }
        },
        mixins: [
            afterUserInfo
        ],
        methods: {
            fetched() {
                const returnTo = this.$route.query['return_to']
                const goTo = this.$route.query['go_to'] || zendeskUrl

                if (!this.$user.isLogin) {
                    window.location.href = goTo
                    return
                }

                if (emailVerifyStatus() === 'none') {
                    window.location.href = '/account/getemail'
                    return false
                }

                if (emailVerifyStatus() === 'pending') {
                    window.location.href = `/erroremailhelpcenter?return_to=${returnTo}`
                    return false
                }

                const locale = cookieUtils.getLocale()
                const localeNumber = window.siteInfo.langCodeForZen[locale].id

                // for loged in user
                accountApi.getZendeskJwt({ returnTo: goTo, locale: localeNumber }).then(response => {
                    console.log(response)
                    window.location.href = response.data
                }).catch(error => {
                    console.error(error)
                })
            }
        },
        created() {

        }
    }
</script>

<style></style>