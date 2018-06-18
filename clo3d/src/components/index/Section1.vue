<template>
    <section class="main-section01">
        <h2 class="koEn">{{ $t('index.MAIN_SECTION01_TITLE') }}</h2>
        <p class="main-section01-txt-spot clearfix contents-txt-style01-white">
            {{ $t('index.MAIN_SECTION01_TXTSPOT') }}<br />
            {{ $t('index.MAIN_SECTION01_TXTSPOT2') }}
        </p>

        <div class="main-scoop_area">
            <h3 class="title-sub-style02-white"><span class="tit_line"></span><p class="clearfix" v-html="$t('index.MAIN_SECTION01_TITLE_SCOOP')"></p></h3>
            <div class="bg_thumb"></div>


            <div class="scoop_thumb_box">
                <div v-for="el in newsList" class="col-6 col-md-3 main-scoop-list">
                    <div class="main-scoop-box">
                        <a :href="`/company/newsdetail/${el.Seq}`">
                            <div class="main-scoop-box_thumbnail" :style="{'background-image': `url(${getImageUrl(el['ThumbnailURL'])})`}"></div>
                            <div class="main-scoop-box_spot">
                                <p class="main_scoop_spot multiline">{{ el[`Title`] }}</p>
                                <p class="main_scoop_date">{{ getDate(el[`DisplayDate`]) }}</p>
                            </div>
                        </a>
                    </div>
                </div>

                <div class="btn_scoop_box">
                    <router-link to="/company/news" class="btn-normal btn-color-black btn-txt-style01-black2 btn-radius">{{ $t('common.BTN_VIEW_MORE') }}</router-link>
                </div>
            </div>


        </div>
    </section>
</template>

<script>
    import afteruserinfo from '../../mixins/AfterUserinfo'
    import newsApi from '../../api/news'
    import * as cookieUtils from '../../utils/cookies'
    import { getDate } from '../../utils/getDateFormat'

    export default {
        name: 'Section1',
        data() {
            return {
                name: 'Section1',
                newsList: null,
                currentLocale: cookieUtils.getLocale()
            }
        },
        mixins: [
            afteruserinfo
        ],
        methods: {
            getDate,
            getImageUrl(url) {
                return url ? `https://s3.clo3d.com/${url}` : 'https://s3.clo3d.com/newclo3d/article/default.png'
            },
            fetched() {
                newsApi.getArticleList({
                    pageNum: 1,
                    pageSize: 4,
                    section: 'scoop',
                    lang: this.currentLocale
                }).then(({ data }) => {
                    console.log(data)
                    this.newsList = data.ListData
                })
            }
        }

    }
</script>

<style lang="scss">
    @import "~sass/responsive";
    @import "~sass/variables";

    .index {
        .main-section01 {
            margin-top: 200px;
            text-align: center;
            color: #fff;

            > h2 {
                font-size: 70px;
                letter-spacing: 20px;
                font-weight: 400;
                line-height: 70px;
            }

            .main-section01-txt-spot {
                padding: 29px 0 50px 0;
            }

            .main-section01-txt-assassin {
                margin-top: 50px;
                font-family: $font-lato;
                font-size: 9px;
                font-style: italic;
                letter-spacing: 0.3px;

            }

            .main-scoop_area {
                position: relative;
                padding-top: 210px;

                > h3 {
                    margin-bottom: 30px;

                    > span.tit_line {
                        display: inline-block;
                        height: 2px;
                        width: 30px;
                        margin:0 auto 20px auto;
                        line-height: 2px;
                        background: #fff;
                    }
                }

                .bg_thumb {
                    position: absolute;
                    left:0;
                    bottom:0;
                    top: 0;
                    background: black;
                    width: 100%;
                    //height: 40%;
                    z-index:-2;
                    @include media-breakpoint-down(sm) {
                       // height: 74%;
                    }
                }

                .scoop_thumb_box {
                    height: 100%;
                    overflow: hidden;
                    max-width: 1920px;
                    margin:0 auto;

                    .pd-none {
                        padding: 0;
                    }

                    .main-scoop-list {
                        /*float: left;*/
                        /*width: 25%;*/
                        /*padding: 0 10px;*/

                        .main-scoop-img {
                            height: 110px;
                            background-size: cover !important;
                        }

                        .main-scoop-img1 {
                            background: url("~static/images/news/img-news-180109.jpg") no-repeat center top;
                        }

                        .main-scoop-img2 {
                            background: url("~static/images/news/img-news-171026.jpg") no-repeat center top;
                        }

                        .main-scoop-img3 {
                            background: url("~static/images/news/img-news-171021.jpg") no-repeat center top;
                        }

                        .main-scoop-img4 {
                            background: url("~static/images/news/img-news-170823.jpg") no-repeat center top;
                        }

                        @include media-breakpoint-up(lg) {
                            .main-scoop-img {
                                height: 170px;
                            }
                        }

                        @include media-breakpoint-up(xl) {
                            .main-scoop-img {
                                height: 338px;
                            }
                        }

                        .main-scoop-box {
                            width: 100%;
                            background:#fff;

                            img {
                                width: 100%;
                            }

                            .main-scoop-box_thumbnail {
                                padding-top: 73%;
                                background-repeat: no-repeat;
                                background-size: cover;
                                background-position: center;
                                background-color: #ddd;
                            }

                            .main-scoop-box_spot {
                                padding:20px 20px 30px;
                                color: #232328;

                                .main_scoop_spot {
                                    color: #232328;
                                    font-family: $font-lato;
                                    font-size: 15px;
                                    line-height: 16px;
                                    text-align: left;
                                    letter-spacing: 0.3px;
                                }
                                .main_scoop_date {
                                    padding-top: 10px;
                                    color: #232328;
                                    font-family: $font-lato;
                                    font-style: italic;
                                    font-size: 12px;
                                    line-height: 15px;
                                    text-align: right;
                                    letter-spacing: 0.3px;
                                }
                            }
                        }
                    }
                }

                .btn_scoop_box {
                    padding: 40px 0 30px 0;
                    clear: both;
                }
            }
        }

        @include media-breakpoint-down(lg) {
            .main-section01 {
                margin-top: 120px;

                > h2 {
                    font-size: 30px;
                    font-weight: 500;
                    line-height: 35px;
                    letter-spacing: 8px;
                }

                .main-section01-txt-spot {
                    margin: 20px 0 70px 0;
                    font-size: 11px;
                    font-weight: 300;
                    line-height: 16px;
                }

                .btn_play {
                    img {
                        width: 50px;
                    }
                }

                .main-section01-txt-assassin {
                    margin-top: 90px;
                    padding-bottom: 34px;
                }

                .main-scoop_area {
                    margin:0;
                    padding-top: 50px !important;

                    > h3 {
                        margin-bottom: 30px;

                        > span.tit_line {
                            display: inline-block;
                            height: 2px;
                            width: 30px;
                            margin:0 auto 20px auto;
                            background: #8c8c8e;
                            line-height: 2px;
                        }
                    }

                    .scoop_thumb_box {
                        overflow: hidden;
                        margin-bottom: 0;

                        .main-scoop-list {
                            .main-scoop-box {
                                margin-bottom: 20px;

                                .main-scoop-box_spot {
                                    min-height: 70px;
                                    padding: 8px 10px 18px;

                                    .main_scoop_spot {
                                        margin-bottom: 5px;
                                        font-size: 9px;
                                    }
                                    .main_scoop_date {
                                        padding-top:0;
                                        font-size: 9px;
                                    }
                                }
                            }
                        }
                    }

                    .btn_scoop_box {
                        padding: 30px 0 20px 0;
                    }
                }
            }
        }

        @include media-breakpoint-down(md) {
            .main-section01 {
                margin-top: 120px;

                > h2 {
                    font-size: 30px;
                    letter-spacing: 8px;
                    font-weight: 500;
                    line-height: 35px;
                }

                .main-section01-txt-spot {
                    margin: 20px 15% 70px;
                    font-size: 11px;
                    line-height: 16px;
                    font-weight: 300;
                }

                .btn_play {
                    img {
                        width: 50px;
                    }
                }

                .main-section01-txt-assassin {
                    margin-top: 90px;
                    padding-bottom: 34px;
                }

                .main-scoop_area {
                    > h3 {
                        margin-bottom: 30px;

                        > span.tit_line {
                            width: 20px;
                            margin:0 auto 10px auto;
                        }
                    }

                    .multiline {
                        height: 30px;
                        line-height: 15px;
                    }

                    .scoop_thumb_box {
                        overflow: hidden;
                        margin-bottom: 0;

                        .main-scoop-list {
                            /*width: 50%;*/

                            .main-scoop-box {
                                margin-bottom: 20px;

                                .main-scoop-box_spot {
                                    min-height: 70px;
                                    padding: 10px;

                                    .main_scoop_spot {
                                        font-size: 9px;
                                        line-height: 11px;
                                    }

                                    .main_scoop_date {
                                        right: 10px;
                                        bottom: 10px;
                                        font-size: 10px;
                                    }
                                }
                            }
                        }
                    }

                    .btn_scoop_box {
                        padding: 0 0 10px 0;
                    }
                }
            }
        }




    }

    body.ko {
        .index {
            .main-section01 {
                .main-section01-txt-spot {
                    margin: 26px 0 0 0;
                }

                .main-scoop_area {
                    position: relative;
                    padding-top: 210px;

                    > h3 {
                        font-weight: 500;
                        letter-spacing: 4px;
                    }
                }
            }
        }
    }

    .zh {
        .main-section01 {
            .btn-normal {
                font-weight: 500;
            }
        }
    }
</style>