<template>
    <div class="center">
        <h2 class="oops"><img src="~static/images/common/404.svg" alt="error" /></h2>

        <p class="oops_txt_tit">{{ $t('error.ERROR_404_TXT1') }}</p>
        <p class="oops_txt_link">{{ $t('error.ERROR_404_TXT2') }}</p>

        <div class="btn-other-link">
            <a href="/" class="btn-small btn-color-gray btn-txt-style03-black btn-radius">HOME</a><a href="/pricing" class="btn-small btn-color-gray btn-txt-style03-black btn-radius">PRICING</a><a href="/helpcenter" class="btn-small btn-color-gray btn-txt-style03-black btn-radius">HELP CENTER</a><a href="/contact" class="btn-small btn-color-gray btn-txt-style03-black btn-radius">CONTACT US</a>
        </div>

        <div class="ft_logo">
            <img src="~static/images/common/clo_ci.png" alt="clo" />
        </div>
    </div>
</template>

<script>
    export default {
        name: 'notFound',
        data() {
            return {
                name: 'notFound'
            }
        }
    }
</script>

<style lang="scss">
    @import "~sass/responsive";
    @import "~sass/variables";

    .oops {
        padding-top: 200px
    }

    .oops_txt_tit {
        padding: 50px 0 30px 0;
        color: #232328;
        font-size: 20px;
        line-height: 32px;
    }

    .oops_txt_link {
        padding-bottom: 20px;
        color: #232328;
        font-family: $font-lato;
        font-size: 13px;
        line-height: 25px;
        letter-spacing: 1px;
    }

    .btn-other-link a {
        display: inline-block;
        margin-left: 20px;
        width: 120px !important;
        color: #4e5155 !important;

        &:first-child {
            margin:0
        }

        &:hover {
            color:#ffffff !important;
        }

    }

    .ft_logo {
        padding-top: 200px;
        display: block;
        clear: both;
    }

    @include media-breakpoint-down(md) {

        .oops {
            width: 460px;
            padding-top: 200px;
            margin:0 auto;

            > img {
                width: 100%;
            }
        }

        .oops_txt_tit {
            padding: 40px 0 30px 0;
            color: #232328;
            font-size: 15px;
            line-height: 32px;
        }

        .oops_txt_link {
            font-size: 11px;
            line-height: 15px;
        }

        .btn-other-link a {
            display: inline-block;
            margin-left: 20px;
            width: 120px;

            &:first-child {
                margin:0
            }
        }

        .ft_logo {
            padding-top: 180px;
            display: block;
            clear: both;
        }

    }

    @include media-breakpoint-down(sm) {

        .oops {
            width: 260px;
            padding-top: 80px;
            margin:0 auto;

            > img {
                width: 100%;
            }
        }

        .oops_txt_tit {
            padding: 40px 30px;
            font-size: 13px;
            line-height: 18px;
        }

        .oops_txt_link {
            font-size: 11px;
            line-height: 15px;
        }

        .btn-other-link a {
            display: block;
            width: 100%;
            margin: 10px 0 0 0;
            width: 120px;
            margin: 10px auto 0;

            &:first-child {
                margin: 0 auto;
            }
        }

        .ft_logo {
            padding-top: 77px;
            display: block;
            clear: both;
        }

    }
</style>