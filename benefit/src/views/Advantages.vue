<template>
    <div class="advantages">
        <div class="sub-visual">
            <span class="sub-title font-visual-title c-white">{{ $t('advantages.SUB_VISUAL_TITLE')}}</span>
        </div>
        <div class="section-item">
            <div class="container">
                <div class="content-item">
                    <div class="text-item company-text left col-6 col-sm-3 offset-sm-0">
                        <div class="sm-title">{{ $t('advantages.COMPANY')}}</div>
                        <div class="title font-sub-title c-white">{{ $t('advantages.COMPANY_TITLE1')}}</div>
                        <div class="desc font-txt2 c-white">{{ $t('advantages.COMPANY_DESC1')}}</div>
                    </div>
                    <div class="text-item customer-text right col-6 col-sm-3 offset-sm-9">
                        <div class="sm-title">{{ $t('advantages.CUSTOMER')}}</div>
                        <div class="title font-sub-title c-white">{{ $t('advantages.CUSTOMER_TITLE1')}}</div>
                        <div class="desc font-txt2 c-white">{{ $t('advantages.CUSTOMER_DESC1')}}</div>
                    </div>
                    <div class="item item1">
                        <div class="img col-12 col-sm-4 embed-responsive embed-responsive-1by1 offset-sm-4"></div>
                    </div>
                </div>
                <div class="content-item">
                    <div class="text-item company-text left col-6 col-sm-3 offset-sm-0">
                        <div class="sm-title">{{ $t('advantages.COMPANY')}}</div>
                        <div class="title font-sub-title c-white"><span class="icon-updown down"></span>{{ $t('advantages.COMPANY_TITLE2')}}</div>
                        <div class="desc font-txt2 c-white">{{ $t('advantages.COMPANY_DESC2')}}</div>
                    </div>
                    <div class="text-item customer-text right col-6 col-sm-3 offset-sm-9">
                        <div class="sm-title">{{ $t('advantages.CUSTOMER')}}</div>
                        <div class="title font-sub-title c-white">{{ $t('advantages.CUSTOMER_TITLE2')}}</div>
                        <div class="desc font-txt2 c-white">{{ $t('advantages.CUSTOMER_DESC2')}}</div>
                    </div>
                    <div class="item item2">
                        <div class="img col-12 col-sm-4 embed-responsive embed-responsive-1by1 offset-sm-4"></div>
                    </div>
                </div>
                <div class="content-item">
                    <div class="item item3">
                        <div class="img col-12 col-sm-4 embed-responsive embed-responsive-1by1 offset-sm-4"></div>
                    </div>
                </div>
                <div class="content-item">
                    <div class="container">
                        <div class="item item4">
                            <div class="img col-12 col-sm-4 embed-responsive embed-responsive-1by1 offset-sm-4"></div>
                        </div>
                    </div>
                </div>
                <div class="content-item">
                    <div class="text-item company-text left col-6 col-sm-3 offset-sm-0">
                        <div class="sm-title">{{ $t('advantages.COMPANY')}}</div>
                        <div class="title font-sub-title c-white"><span class="icon-updown down"></span>{{ $t('advantages.COMPANY_TITLE3')}}</div>
                        <div class="desc font-txt2 c-white">{{ $t('advantages.COMPANY_DESC3')}}</div>
                    </div>
                    <div class="text-item customer-text right col-6 col-sm-3 offset-sm-9">
                        <div class="sm-title">{{ $t('advantages.CUSTOMER')}}</div>
                        <div class="title font-sub-title c-white">{{ $t('advantages.CUSTOMER_TITLE3')}}</div>
                        <div class="desc font-txt2 c-white">{{ $t('advantages.CUSTOMER_DESC3')}}</div>
                    </div>
                    <div class="item item5">
                        <div class="img col-12 col-sm-4 embed-responsive embed-responsive-1by1 offset-sm-4"></div>
                    </div>
                </div>
                <div class="content-item">
                    <div class="text-item company-text left col-6 col-sm-3 offset-sm-0">
                        <div class="sm-title">{{ $t('advantages.COMPANY')}}</div>
                        <div class="title font-sub-title c-white">{{ $t('advantages.COMPANY_TITLE4')}}</div>
                        <div class="desc font-txt2 c-white">{{ $t('advantages.COMPANY_DESC4')}}</div>
                    </div>
                    <div class="text-item customer-text right col-6 col-sm-3 offset-sm-9">
                        <div class="sm-title">{{ $t('advantages.CUSTOMER')}}</div>
                        <div class="title font-sub-title c-white">{{ $t('advantages.CUSTOMER_TITLE4')}}<span class="icon-updown up"></span></div>
                        <div class="desc font-txt2 c-white">{{ $t('advantages.CUSTOMER_DESC4')}}</div>
                    </div>
                    <div class="item item6">
                        <div class="img col-12 col-sm-4 embed-responsive embed-responsive-1by1 offset-sm-4"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Advantages',
        data() {
            return {
                name: 'Advantages'
            }
        }

    }
</script>

<style lang="scss">
    @import "~scss/vars";
    @import "~scss/responsive";
    .advantages {

        .container {

        }




        .content-item {
            margin-top: 200px;
            position: relative;
            @include media-breakpoint-down(lg) {
                margin-top: 150px;
            }
            @include media-breakpoint-down(xs) {
                margin-top: 70px;
            }
            &:first-child {
                margin-top: 0;
            }
        }

        .text-item {
            position: absolute;
            color: white;
            top: 50%;
            transform: translateY(-50%);
            &.left {
                text-align: right;
            }
            &.right {
                text-align: left;
            }
            .title {
                margin-top: 40px;
                margin-bottom: 15px;
            }
            .font-sub-title {
                @include media-breakpoint-down(xs) {
                    letter-spacing: 1px;
                }
            }
            &.offset-sm-8 {
                margin-left: 70%;
            }
            @include media-breakpoint-down(xs) {
                margin-left: auto!important;
                text-align: center!important;
                position: relative;
                transform: none;
                margin-bottom: 30px;
                &.left {
                    padding-left: 0;
                    float: left;
                    .icon-updown {
                        margin-right: 10px;
                    }
                }
                &.right {
                    padding-right: 0;
                    float: left;
                    .icon-updown {
                        margin-left: 10px;
                    }
                }
            }
        }

        .sub-visual {
            background: url("~static/images/advantages/img-visual-advantages.jpg") no-repeat center;
            background-size: cover;
        }

        .section-item {
            position: relative;
            &:before {
                background-color: $faded-orange;
                content: '';
                position: absolute;
                width: 50%;
                height: 100%;
                left: 0;
                top: 0;
                z-index: -1;
            }
            &:after {
                background-color: $dark-grey-two;
                content: '';
                position: absolute;
                width: 50%;
                height: 100%;
                right: 0;
                top: 0;
                z-index: -1;
            }
        }

        .item1 {
            .img {
                background: url("~static/images/advantages/img-advantages-01.png") no-repeat center;
                background-size: contain;
                &.embed-responsive-1by1::before {
                    padding-top: 140%;
                }
            }
        }
        .item2 {
            .img {
                background: url("~static/images/advantages/img-advantages-02.png") no-repeat center;
                background-size: contain;
                &.embed-responsive-1by1::before {
                    padding-top: 140%;
                }
            }
        }
        .item3 {
            .img {
                background: url("~static/images/advantages/img-advantages-03.png") no-repeat center;
                background-size: contain;
                &.embed-responsive-1by1::before {
                    padding-top: 62%;
                }
            }
        }
        .item4 {
            .img {
                background: url("~static/images/advantages/04.png") no-repeat center;
                background-size: contain;
                &.embed-responsive-1by1::before {
                    padding-top: 77%;
                }
            }
        }
        .item5 {
            .img {
                background: url("~static/images/advantages/05.png") no-repeat center;
                background-size: contain;
                &.embed-responsive-1by1::before {
                    padding-top: 114%;
                }
            }
        }
        .item6 {
            .img {
                background: url("~static/images/advantages/06.png") no-repeat center;
                background-size: contain;
                &.embed-responsive-1by1::before {
                    padding-top: 90%;
                }
            }
        }
    }
</style>