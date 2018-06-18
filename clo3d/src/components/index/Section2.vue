<template>
    <section class="main-section02 section-pad">
        <div class="container">
            <h2 class="title-sub-style01-white">{{ $t('index.MAIN_SECTION02_TITLE') }}</h2>
            <div class="clearfix">
                <div class="col-12 col-md-4 offset-md-4">
                    <div class="sample-thumb">
                        <h3 class="title-sub-style04-white">{{ $t('index.MAIN_SECTION02_STITLE_2D') }}</h3>
                        <div class="giveyour-img embed-responsive embed-responsive-4by3"></div>
                    </div>
                </div>
                <div class="clearfix">
                    <div class="col-12 col-md-6 line">
                        <div class="sample-single bg_sample-single">
                            <h3 class="title-sub-style04-white">{{ $t('index.MAIN_SECTION02_STITLE_3D') }}</h3>
                            <div class="giveyour-imgs col-md-8 offset-md-2">
                                <div class="giveyour-img01 embed-responsive embed-responsive-1by1"></div>
                            </div>
                            <div class="col-md-2"></div>
                        </div>
                    </div>
                    <div class="col-12 col-md-6">
                        <div class="sample-single">
                            <h3 class="title-sub-style04-white">{{ $t('index.MAIN_SECTION02_STITLE_REVISED') }}</h3>
                            <div class="giveyour-imgs  col-md-8 offset-md-2">
                                <div class="giveyour-img02 embed-responsive embed-responsive-1by1"></div>
                            </div>
                            <div class="col-md-2"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="copyright">{{ $t('index.COPYRIGHT_ADIDAS') }}</div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'Section2',
        data() {
            return {
                name: 'Section2'
            }
        }

    }
</script>

<style lang="scss">
    @import "~sass/responsive";
    @import "~sass/variables";
    .index {
        .main-section02 {
            width: 100%;
            height: 100%;
            background-color: black;
            text-align: center;
            position: relative;
            .copyright {
                color: white;
            }

            @include media-breakpoint-up(sm) {
                background: #000 url('~static/images/main/bg-giveyourdesign.png') no-repeat center bottom;
                background-size: contain;
            }

            .line {
                position: relative;

                &:after {
                    content: '';
                    background-color: #3c3c3c;
                    width: 1px;
                    height: 83%;
                    position: absolute;
                    right: 0;
                    top: 0;
                    margin-top: 12%;
                    @include media-breakpoint-down(sm) {
                        display: none;
                    }
                }
            }

            .giveyour-img {
                background:url('~static/images/main/img-giveyour-pattern-m.png') no-repeat center;
                background-size: contain;
                /*width: 300px;*/
                /*height: 240px;*/
                margin: 0 auto;
                @include media-breakpoint-up(xl) {
                    background:url('~static/images/main/img-giveyour-pattern.png') no-repeat center;
                    background-size: contain;
                    /*width: 625px;*/
                    /*height: 400px;*/
                }
            }
            .giveyour-img01 {
                background:url('~static/images/main/img-giveyour-sample-01-m.png') no-repeat center;
                background-size: contain;
                /*width: 220px;*/
                /*height: 257px;*/
                margin: 0 auto;
                position: relative;
                @include media-breakpoint-up(xl) {
                    background:url('~static/images/main/img-giveyour-sample-01.png') no-repeat center;
                    background-size: contain;
                    /*width: 620px;*/
                    /*height: 620px;*/
                }


            }
            .giveyour-img02 {
                background:url('~static/images/main/img-giveyour-sample-02-m.png') no-repeat center;
                background-size: contain;
                /*width: 220px;*/
                /*height: 259px;*/
                margin: 0 auto;
                @include media-breakpoint-up(xl) {
                    background:url('~static/images/main/img-giveyour-sample-02.png') no-repeat center;
                    background-size: contain;
                    /*width: 620px;*/
                    /*height: 620px;*/
                }
            }

            .sample-thumb {
                > h3 {
                    padding: 40px 0 30px;
                }

                .main-section02_txt_assassin {
                    margin-top: 50px;
                    text-align: center;
                }
            }

            .sample-single {
                &.bg_sample-single {
                    .giveyour-imgs {

                    }
                }

                > h3 {
                    padding: 50px 0 20px;
                }

                .bg-right-border {
                    border-right: 1px solid #ddd;
                }
            }
        }


        @include media-breakpoint-down(lg) {
            .main-section02 {
                .sample-thumb {
                    > h3 {
                        padding: 30px 0;
                    }

                    .main-section02_txt_assassin {
                        margin-top: 40px;
                        color: #4E5155;
                    }
                }

                .sample-single {
                    > h3 {
                        padding: 40px 0 10px;
                    }
                }
            }
        }

        @include media-breakpoint-down(md) {
            .main-section02 {
                h2 {
                    padding: 0 20%;
                }

                .sample-thumb {

                    > h3 {
                        padding: 30px 0 10px 0;
                    }

                    .main-section02_txt_assassin {
                        margin-top: 40px;
                    }
                }

                .sample-single {
                    > h3 {
                        padding: 40px 0 10px;
                    }

                    .bg-right-border {
                        border: 0 none;
                    }
                }
            }
        }
    }
</style>