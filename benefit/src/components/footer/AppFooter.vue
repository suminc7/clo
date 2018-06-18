<template>
    <footer>
        <div class="footer-area">
            <div class="fnb-box">
                <div class="head-left">
                    <a href="#" class="bi white"></a>
                </div>
                <ul class="fnb clearfix">
                    <li><a href="#" class="font-menu">ABOUT</a></li>
                    <li><a href="#" class="font-menu">ADVANTAGES</a></li>
                    <li><a href="#" class="font-menu">OUR EXPERTISE</a></li>
                    <li><a href="#" class="font-menu">CONTACT US</a></li>
                </ul>
            </div>
            <div class="copyright font-copyright">
                Copyright 2018 ⓒ CLO Virtual Fashion Inc. All Rights Reserved.
            </div>
            <div class="left">
                <ul class="sns clearfix">
                    <li><a href="#" class="icon-sns facebook"></a></li>
                    <li><a href="#" class="icon-sns twitter"></a></li>
                    <li><a href="#" class="icon-sns insta"></a></li>
                    <li><a href="#" class="icon-sns youtube"></a></li>
                </ul>
            </div>
            <div class="right">
                <div class="family-site font-dropdown">FAMILY SITE<span class="icon-arrow"></span></div>
            </div>
        </div>
    </footer>
</template>

<script>
    export default {
        name: 'AppFooter',
        data() {
            return {
                name: 'AppFooter'
            }
        }

    }
</script>

<style lang="scss">
    @import "~scss/vars";
    @import "~scss/responsive";
    footer {
        text-align: center;

        .footer-area {
            /*position: relative; widget에 가려 우선 삭제  */
            @include media-breakpoint-down(lg) {
                background-color: $dark-grey;
                padding: 70px 0 75px 0;
            }

            .fnb-box {
                padding: 0 0 50px 0;
                display: none;
                @include media-breakpoint-down(lg) {
                    display: block;
                }
                .fnb {
                    li {
                        margin-top: 30px;
                        &:first-child {
                            margin-top: 40px;
                        }
                    }
                }
            }

            .icon-sns {
                @include media-breakpoint-down(lg) {
                    background-position-y: 100%;
                }
            }
        }
        .left {
            position: absolute;
            left: 0;
            top: 0;
            @include media-breakpoint-down(lg) {
                position: relative;
                left: auto;
                top: auto;
            }
            .sns {
                margin-left: 10px;
                li {
                    display: inline-block;
                    padding: 21px 0;
                    margin: 0 5px;
                }
                @include media-breakpoint-down(lg) {
                    text-align: center;
                    margin-left: 0;
                    li {
                        float: none;
                    }
                }
            }
        }

        .copyright {
            display: inline-block;
            padding: 30px 0;
            @include media-breakpoint-down(lg) {
                color: white;
                padding: 0;
            }
        }
        .right {
            position: absolute;
            right: 0;
            top: 0;
            @include media-breakpoint-down(lg) {
                position: relative;
                left: auto;
                top: auto;
            }
            .family-site {
                margin-right: 10px;
                padding: 25px 0;
                @include media-breakpoint-down(lg) {
                    padding: 0;
                    color: white;
                }
            }
            .icon-arrow {
                vertical-align: middle;
                margin-left: 10px;
                @include media-breakpoint-down(lg) {
                    background-position: 100% 0;
                }
            }
        }
    }
</style>