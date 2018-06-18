<template>
    <section class="main-section03 section-pad">
        <div class="container">
            <div class="col-sm-10 offset-sm-1">
                <h2 class="main-section03-tit title-sub-style01-black clearfix">
                    {{ $t('index.MAIN_SECTION03_TITLE01') }} <br />
                    {{ $t('index.MAIN_SECTION03_TITLE02') }} <br />
                    {{ $t('index.MAIN_SECTION03_TITLE03') }}
                </h2>
            </div>
            <div class="clearfix">

                <div class="section col-12 col-md-4 offset-md-1">
                    <div class="trust-img trust01"></div>
                    <div class="section03_stitles">
                        <span class="icon-trust icon-pattern"></span>
                        <span class="section03_stit title-sub-style04-black">{{ $t('index.MAIN_SECTION03_STITLE_PATTERN') }}</span>
                    </div>
                </div>
                <div class="section col-12 col-md-3">
                    <div class="trust-img trust02"></div>
                    <div class="section03_stitles">
                        <span class="icon-trust icon-clo"></span>
                        <span class="section03_stit title-sub-style04-black">{{ $t('index.MAIN_SECTION03_STITLE_SAMPLE1') }}</span>
                    </div>
                </div>
                <div class="section col-12 col-md-3">
                    <div class="trust-img trust03"></div>
                    <div class="section03_stitles">
                        <span class="icon-trust icon-manufactured"></span>
                        <span class="section03_stit title-sub-style04-black">{{ $t('index.MAIN_SECTION03_STITLE_SAMPLE2') }}</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="copyright">{{ $t('index.COPYRIGHT_COMPANYG') }}</div>
    </section>
</template>

<script>
    export default {
        name: 'Section3',
        data() {
            return {
                name: 'Section3'
            }
        }

    }
</script>

<style lang="scss">
    @import "~sass/responsive";
    @import "~sass/variables";
    .index {
        .main-section03 {
            background-color: white;
            position: relative;

            .section {
                @include media-breakpoint-down(md) {
                    margin-top: 60px;
                }
            }

            .section03_stitles {
                text-align: center;
            }
            .trust01 {
                background:url('~static/images/main/img-trust-01.jpg') no-repeat center bottom;
                background-size: contain;
                height: 680px;
            }
            .trust02 {
                background:url('~static/images/main/img-trust-02.jpg') no-repeat center top;
                background-size: contain;
                height: 680px;
            }
            .trust03 {
                background:url('~static/images/main/img-trust-03.jpg') no-repeat center top;
                background-size: contain;
                height: 680px;
            }
            .trust-img {
                margin-bottom: 54px;
                @include media-breakpoint-down(xxl) {
                    margin-bottom: 54px;
                    height: 500px;
                }
                @include media-breakpoint-down(xl) {
                    margin-bottom: 32px;
                    height: 392px;
                }
                @include media-breakpoint-down(lg) {
                    margin-bottom: 32px;
                    height: 325px;
                }
                @include media-breakpoint-down(md) {
                    margin-bottom: 32px;
                    height: 238px;
                }
                @include media-breakpoint-down(sm) {
                    margin-bottom: 22px;
                    &.trust01 {
                        height: 160px;
                    }
                    &.trust02, &.trust03 {
                        height: 325px;
                    }
                }
            }

            .icon-trust {
                display: inline-block;
                width: 25px;
                height: 20px;
                background: url('~static/images/main/icon-landing-trust.svg') no-repeat;
                background-size: 300%;
                vertical-align: bottom;
                margin-right: 10px;

                @include media-breakpoint-down(md) {
                    width: 15px;
                    height: 12px;
                    margin-right: 5px;
                }

                &.icon-pattern {
                    background-position: 0 0;
                }
                &.icon-clo {
                    background-position: 50% 0;
                }
                &.icon-manufactured {
                    background-position: 100% 0;
                }
            }


            .main-section03-tit {
                margin-bottom: -134px;

                @include media-breakpoint-down(lg) {
                    margin: 0;
                    font-size: 22px;
                    letter-spacing: 3px;
                    line-height: 32px;
                }

                @include media-breakpoint-down(sm) {
                    text-align: center;
                }
            }

            .section03_stit {
                letter-spacing: 1px;
                text-align: left;

                @include media-breakpoint-down(md) {
                    font-size: 10px;
                    letter-spacing: 2px;
                }
            }
        }
    }
</style>