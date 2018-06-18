<template>
    <div class="what-is-benefit">
        <div class="text-content offset-sm-1 col-12 col-sm-4">
            <div class="font-title c-white">
                WHAT IS BENEFIT?
            </div>
            <div class="font-txt1 c-white">
                Try-on clothes before you buy.
                The fastest and most accurate 3D virtual fitting ever.
            </div>
            <ul class="size">
                <li><span class="font-sub-title c-white active">S</span></li>
                <li><span class="font-sub-title c-white">M</span></li>
                <li><span class="font-sub-title c-white">L</span></li>
                <li><span class="font-sub-title c-white">XL</span></li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'WhatIsBenefit',
        data() {
            return {
                name: 'WhatIsBenefit'
            }
        }

    }
</script>

<style lang="scss">
    @import "~scss/vars";
    @import "~scss/responsive";
    .index {
        .what-is-benefit {
            height: 1000px;
            background: #19191b url("~static/images/index/img-about-shirts-01.png") no-repeat 75% center;
            text-align: left;
            @include media-breakpoint-down(lg) {
                background-position: center;
            }
            @include media-breakpoint-down(xs) {
                background-position: center 75%;
                background-size: 115%;
                height: 710px;
                text-align: center;
            }
            .text-content {
                padding-top: 436px;
                .font-title {
                    margin-bottom: 28px;
                    @include media-breakpoint-down(xs) {
                        margin-bottom: 14px;
                    }
                }
                .font-txt1 {
                    margin-bottom: 53px;
                    @include media-breakpoint-down(xs) {
                        margin-bottom: 33px;
                    }
                }
                @include media-breakpoint-down(xs) {
                    padding-top: 50px;
                }
            }
            .size {
                li {
                    margin: 0 15px;
                    display: inline-block;
                    font-size: 0;
                    .active {
                        color: $coral;
                    }
                }
            }
        }
    }
</style>