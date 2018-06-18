<template>
    <div class="section-item container">
        <div class="font-title">HOW IT WORKS?</div>
        <div class="box-container">
            <div class="box-line"></div>
            <div class="box-items clearfix">
                <div class="side-item side-item1 col-8 col-sm-3 offset-2 offset-sm-1">
                    <div class="img-title font-sub-title2">{{ $t('index.HOW_IMG_TITLE1') }}</div>
                    <div class="imgs img1 embed-responsive embed-responsive-21by9"></div>
                </div>
                <div class="box-item col-10 col-sm-4 offset-1 offset-sm-0">
                    <div class="box-title font-sub-title">{{ $t('index.HOW_TXT_SUB_TITLE1') }}</div>
                    <div class="box_desc font-txt3">{{ $t('index.HOW_TXT_SUB_DESC1') }}</div>
                </div>
            </div>
            <div class="box-line"></div>
            <div class="box-items clearfix">
                <div class="side-item side-item2 col-8 col-sm-3 offset-2 offset-sm-1">
                    <div class="img-title font-sub-title2">{{ $t('index.HOW_IMG_TITLE2') }}</div>
                    <div class="imgs img2 embed-responsive embed-responsive-21by9"></div>
                </div>
                <div class="box-item col-10 col-sm-4 offset-1 offset-sm-0">
                    <div class="box-title font-sub-title">{{ $t('index.HOW_TXT_SUB_TITLE2') }}</div>
                    <div class="box_desc font-txt3">{{ $t('index.HOW_TXT_SUB_DESC2') }}</div>
                </div>
            </div>
            <div class="box-line"></div>
            <div class="box-items clearfix">
                <div class="side-item side-item4 col-8 col-sm-3 offset-2 offset-sm-8">
                    <div class="img-title font-sub-title2">{{ $t('index.HOW_IMG_TITLE4') }}</div>
                    <div class="imgs img4 embed-responsive embed-responsive-21by9"></div>
                </div>
                <div class="box-item col-10 col-sm-4 offset-1 offset-sm-4">
                    <div class="box-title font-sub-title">{{ $t('index.HOW_TXT_SUB_TITLE4') }}</div>
                    <div class="box_desc font-txt3">{{ $t('index.HOW_TXT_SUB_DESC4') }}</div>
                </div>
            </div>

            <div class="box-line"></div>
        </div>
        <div class="font-title">{{ $t('index.HOW_TXT_TITLE2') }}</div>
        <div class="img5 col-10 col-sm-4 offset-1 offset-sm-0 embed-responsive embed-responsive-4by3"></div>
        <div class="img6 col-10 col-sm-6 offset-1 offset-sm-3 embed-responsive embed-responsive-21by9"></div>
    </div>
</template>

<script>
    export default {
        name: 'HowItWorks',
        data() {
            return {
                name: 'HowItWorks'
            }
        }

    }
</script>

<style lang="scss">
    @import "~scss/vars";
    @import "~scss/responsive";
    .index {
        .box-container {
            padding: 27px 0 47px 0;
            white-space: pre;
            position: relative;
        }
        .box-items {
            text-align: left;
            font-size: 0;
        }
        .side-item {
            vertical-align: top;
            display: inline-block;
            white-space: normal;
            text-align: center;
            &.side-item3, &.side-item4 {
                position: absolute;
            }
            @include media-breakpoint-down(xs) {
                float: none;

                &.side-item3, &.side-item4 {
                    position: relative;
                }
            }
            .img-title {
                margin-bottom: 12px;
                @include media-breakpoint-down(xs) {
                    display: none;
                }
            }
            .imgs {
                display: inline-block;
                background-size: 100%;

                &.img1 {
                    background: url('~static/images/index/img-howitworks-01.svg') no-repeat center;
                    background-size: contain;
                }
                &.img2 {
                    background: url('~static/images/index/img-howitworks-02.svg') no-repeat center;
                    background-size: contain;
                }
                &.img3 {
                    background: url('~static/images/index/img-howitworks-03.svg') no-repeat center;
                    background-size: contain;
                }
                &.img4 {
                    background: url('~static/images/index/img-howitworks-04.svg') no-repeat center;
                    background-size: contain;
                }
            }
        }
        .img5 {
            background: url('~static/images/index/img-howitworks-05_1.svg') no-repeat center;
            background-size: contain;
            margin: 37px auto 30px auto;
            &.embed-responsive-4by3::before {
                padding-top: 81%;
            }
        }
        .img6 {
            background: url('~static/images/index/img-howitworks-06.svg') no-repeat center;
            background-size: contain;
            margin: 0 auto;
            @include media-breakpoint-down(lg) {
                background: url('~static/images/index/img-howitworks-06-m.svg') no-repeat center;
                background-size: contain;
            }
        }
        .box-item {
            text-align: center;
            display: inline-block;
            padding: 72px 3%;
            position: relative;
            white-space: normal;
            .box-title {
                margin-bottom: 12px;
            }

            &:before {
                content: '';
                position: absolute;
                left: 0;
                top: 0;
                border: 3px solid $charcoal-grey-two;
                border-right: none;
                width: 10px;
                height: 100%;
            }
            &:after {
                content: '';
                position: absolute;
                right: 0;
                top: 0;
                border: 3px solid $charcoal-grey-two;
                border-left: none;
                width: 10px;
                height: 100%;
            }
        }
        .box-line {
            width: 1px;
            height: 120px;
            background-color: $slate-grey;
            margin: 0 auto;
            @include media-breakpoint-down(lg) {
                height: 80px;
            }
            @include media-breakpoint-down(sm) {
                height: 40px;
            }
        }
    }
</style>