<template>
    <div class="ft-discover-box">
        <h2 class="title-sub-style01-white en">{{ $t('footer.FOOTER_DISCOVER_TITLE') }}</h2>
        <div class="ft-discover-link">
            <router-link to="/pricing" class="btn-big btn-color-blue btn-txt-style02-blue btn-radius">{{ $t('common.BTN_TRY_FREE') }}</router-link>
            <router-link to="/users/story" class="btn-big btn-color-white btn-txt-style02-white btn-radius">{{ $t('common.BTN_USER_STORIES') }}</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'FooterDiscover',
        data() {
            return {
                name: 'FooterDiscover'
            }
        }
    }
</script>

<style lang="scss">
    @import "../../sass/responsive";
    @import "../../sass/variables";

    footer {
        .ft-discover-box {
            padding: 150px 0;
            color: $color-white;
            text-align: center;
            background: #000 url(~static/images/common/bg-discover.jpg) no-repeat center;
            background-size: cover;

            > h2 {
                margin-bottom: 40px;
            }

            .ft-discover-link {
                a {
                    display: block;
                    margin:0 auto;
                    &:first-child {
                        margin: 0 auto 20px;
                    }
                    &.btn-big {
                        width: 150px;
                        line-height:36px;
                        font-size: 11px;
                        letter-spacing: 2px;
                    }
                    @include media-breakpoint-up(xl) {
                        display: inline-block;
                        margin-bottom: 20px;
                        &:first-child {
                            margin-right: 20px;
                        }
                        &.btn-big {
                            width: 200px;
                            line-height:36px;
                        }
                    }

                    @include media-breakpoint-up(xxl) {
                        margin-bottom: 20px;
                        &.btn-big {
                            width: 250px;
                            line-height:60px;
                            font-size: 15px;
                            letter-spacing: 3px;
                        }

                    }
                }
            }
        }
    }

    @include media-breakpoint-down(lg) {
        footer {
            .ft-discover-box {
                padding: 237px 0;

                > h2 {
                    padding: 0 25%;
                }
            }
        }
    }

    @include media-breakpoint-down(md) {
        footer {
            .ft-discover-box {
                padding: 97px 0 106px;

                > h2 {
                    margin-bottom: 23px;
                    padding: 0;
                }
            }
        }
    }

    @include media-breakpoint-down(sm) {
        footer {
            .ft-discover-box {
                padding: 179px 0 189px 0;
                background: #000 url(~static/images/common/bg_discover_m.jpg) no-repeat center;
                background-size: cover;

                > h2 {
                    margin-bottom: 44px;
                    padding: 0 20%;
                }
            }
        }
    }
</style>