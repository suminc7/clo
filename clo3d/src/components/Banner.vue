<template>
    <div class="email-banner-error">
        <img src="~static/images/common/error_msg.svg" alt="icon error" />{{ $t('account.BANNER') }}
        <i18n path="account.BANNER2" tag="span">
            <a href="/mypage/account" class="link-here">{{ $t('account.BANNER3') }}</a>
        </i18n>
        <a href="#" class="btn-close-banner" @click.prevent="close"><img src="~static/images/common/menu_close_white.svg" alt="close" /></a>
    </div>
</template>

<script>
    export default {
        name: 'Banner',
        data() {
            return {
                name: 'Banner'
            }
        },
        methods: {
            close() {
                this.$emit('bannerClosed')
            }
        }

    }
</script>

<style lang="scss">
    @import "~sass/responsive";
    @import "../../sass/variables";

    .email-banner-error {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 80px;
        line-height: 80px;
        color:#fff;
        font-size: 15px;
        text-align: center;
        background-color: rgba(242,84,84,0.8);
        z-index:99999;

        a {
            color: #fff;
        }

        img {
            display: inline-block;
            margin: -4px 7px 0 0;
            vertical-align: middle;
        }

        a.link-here {
            text-decoration: underline;
        }

        a.btn-close-banner {
            position: absolute;
            top: 32px;
            right: 15px;
            line-height: 100%;
        }
    }
</style>