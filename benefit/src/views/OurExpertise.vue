<template>
    <div class="our-expertise">
        <div class="sub-visual">
            <span class="sub-title font-visual-title c-white">{{ $t('ourexpertise.SUB_VISUAL_TITLE')}}</span>
        </div>
        <div class="section-item section-item1 pad-bottom-0">
            <div class="content-item container content-item1">
                <div class="title font-title">{{ $t('ourexpertise.SECTION_TITLE1')}}</div>
                <div class="desc font-txt2">{{ $t('ourexpertise.SECTION_DESC1')}}</div>
                <div class="img embed-responsive embed-responsive-1by1"></div>
            </div>
        </div>
        <div class="section-item section-item2 grey">
            <div class="content-item container content-item2">
                <div class="title font-title c-white">{{ $t('ourexpertise.SECTION_TITLE2')}}</div>
                <div class="desc font-txt2 c-white">{{ $t('ourexpertise.SECTION_DESC2')}}</div>
                <div class="img-container clearfix">
                    <div class="img-items left clearfix col-6 col-sm-12">
                        <div class="img-item img-item1 embed-responsive embed-responsive-1by1 col-12 col-sm-3"></div>
                        <div class="img-item img-item2 embed-responsive embed-responsive-1by1 col-12 col-sm-3"></div>
                        <div class="img-item img-item3 embed-responsive embed-responsive-1by1 col-12 col-sm-3"></div>
                        <div class="img-item img-item4 embed-responsive embed-responsive-1by1 col-12 col-sm-3"></div>
                    </div>
                    <div class="img-items right col-6 col-sm-12">
                        <div class="img-item img-item1 embed-responsive embed-responsive-1by1 col-12 col-sm-3"></div>
                        <div class="img-item img-item2 embed-responsive embed-responsive-1by1 col-12 col-sm-3"></div>
                        <div class="img-item img-item3 embed-responsive embed-responsive-1by1 col-12 col-sm-3"></div>
                        <div class="img-item img-item4 embed-responsive embed-responsive-1by1 col-12 col-sm-3"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="section-item section-item3 pad-bottom-0">
            <div class="content-item container content-item3">
                <div class="title font-title">{{ $t('ourexpertise.SECTION_TITLE3')}}</div>
                <div class="desc font-txt2">{{ $t('ourexpertise.SECTION_DESC3')}}</div>
                <div class="img embed-responsive embed-responsive-1by1"></div>
            </div>
        </div>
        <div class="section-item section-item4">
            <div class="content-item container content-item4">
                <div class="title font-title">{{ $t('ourexpertise.SECTION_TITLE3')}}</div>
                <div class="desc font-txt2">{{ $t('ourexpertise.SECTION_DESC3')}}</div>
                <div class="img embed-responsive embed-responsive-1by1"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'OurExpertise',
        data() {
            return {
                name: 'OurExpertise'
            }
        }

    }
</script>

<style lang="scss">
    @import "~scss/vars";
    @import "~scss/responsive";
    .our-expertise {



        .desc {
            margin-top: 25px;
            margin-bottom: 50px;
            @include media-breakpoint-down(xs) {
                margin-top: 15px;
                margin-bottom: 30px;
            }
        }
        .section-item1 .img {
            background: url("~static/images/ourexpertise/img-ourexpertise-01.png") no-repeat center bottom;
            background-size: contain;
            &.embed-responsive-1by1::before {
                padding-top: 53%;
            }
            @include media-breakpoint-down(xs) {
                background: url("~static/images/ourexpertise/img-ourexpertise-01-m.png") no-repeat center bottom;
                background-size: contain;
                &.embed-responsive-1by1::before {
                    padding-top: 195%;
                }
            }
        }

        .section-item2 {
            .img-container {
                .img-items {
                    .img-item {
                        float: left;
                        padding-right: 10px;
                        padding-left: 10px;
                        @include media-breakpoint-down(xs) {
                            margin-top: 20px;
                            &:first-child {
                                margin-top: 0;
                            }
                        }
                    }
                    &.left, &.right {
                        @include media-breakpoint-down(xs) {
                            float: left;
                        }
                    }
                    &.left {
                        margin-bottom: 20px;
                        @include media-breakpoint-down(xs) {
                            margin-bottom: 0;
                        }
                        .img-item {
                            @include media-breakpoint-down(xs) {
                                padding-left: 0;
                            }
                        }
                        .img-item1 {
                            background: url("~static/images/ourexpertise/img-ourexpertise-02-01-1.png") no-repeat;
                            background-size: contain;
                        }
                        .img-item2 {
                            background: url("~static/images/ourexpertise/img-ourexpertise-02-02-1.png") no-repeat;
                            background-size: contain;
                        }
                        .img-item3 {
                            background: url("~static/images/ourexpertise/img-ourexpertise-02-03-1.png") no-repeat;
                            background-size: contain;
                        }
                        .img-item4 {
                            background: url("~static/images/ourexpertise/img-ourexpertise-02-04-1.png") no-repeat;
                            background-size: contain;
                        }
                    }
                    &.right {
                        .img-item {
                            @include media-breakpoint-down(xs) {
                                padding-right: 0;
                            }
                        }
                        .img-item1 {
                            background: url("~static/images/ourexpertise/img-ourexpertise-02-01-2.png") no-repeat;
                            background-size: contain;
                        }
                        .img-item2 {
                            background: url("~static/images/ourexpertise/img-ourexpertise-02-02-2.png") no-repeat;
                            background-size: contain;
                        }
                        .img-item3 {
                            background: url("~static/images/ourexpertise/img-ourexpertise-02-03-2.png") no-repeat;
                            background-size: contain;
                        }
                        .img-item4 {
                            background: url("~static/images/ourexpertise/img-ourexpertise-02-04-2.png") no-repeat;
                            background-size: contain;
                        }
                    }
                }
            }
        }

        .section-item3 {
            background-color: #eeeae6;

            .img {
                background: url("~static/images/ourexpertise/img-ourexpertise-03.png") no-repeat center bottom;
                background-size: contain;
                &.embed-responsive-1by1::before {
                    padding-top: 56%;
                }
                @include media-breakpoint-down(xs) {
                    background: url("~static/images/ourexpertise/img-ourexpertise-03-m.png") no-repeat center bottom;
                    background-size: contain;
                    &.embed-responsive-1by1::before {
                        padding-top: 141%;
                    }
                }
            }
        }

        .section-item4 {
            .img {
                background: url("~static/images/ourexpertise/img-ourexpertise-04.png") no-repeat center bottom;
                background-size: contain;
                &.embed-responsive-1by1::before {
                    padding-top: 49%;
                }
                @include media-breakpoint-down(xs) {
                    background: url("~static/images/ourexpertise/img-ourexpertise-04-m.png") no-repeat center bottom;
                    background-size: contain;
                    &.embed-responsive-1by1::before {
                        padding-top: 161%;
                    }
                }
            }
        }
    }
</style>