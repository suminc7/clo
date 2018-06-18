<template>
    <section class="main-section05 section-pad">
        <h2 class="title-sub-style01-white">{{ $t('index.MAIN_SECTION05_TITLE') }}</h2>
        <div class="">
            <div class="graph-ani-box clearfix">
                <div class="col-6">
                    <div class="graph-ani-list right col-md-6">
                        <h3 class="title-sub-style02-white" v-html="$t('index.MAIN_SECTION05_TXT_BEFORE')"></h3>
                        <div class="graph-ani-item">
                            <img src="~static/images/main/before.gif" class="img-responsive" />
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="count-box">
                            <p class="main-section05_txt_tit title-sub-style04-white">{{ $t('index.MAIN_SECTION05_STITLE01') }}</p>
                            <div><span class="counter en">{{ Math.floor(days01) }}</span><span class="days koEn">{{ $t('index.MAIN_SECTION05_DAYS') }}</span></div>
                        </div>
                        <div class="count-box count-box-bottom">
                            <p class="main-section05_txt_tit title-sub-style04-white">{{ $t('index.MAIN_SECTION05_STITLE03') }}</p>
                            <div><span class="counter en">{{ Math.floor(days03) }}%</span></div>
                        </div>
                    </div>
                </div>

                <div class="col-6">
                    <div class="graph-ani-list col-md-6">
                        <h3 class="title-sub-style02-white" v-html="$t('index.MAIN_SECTION05_TXT_AFTER')"></h3>
                        <div class="graph-ani-item">
                            <img src="~static/images/main/after.gif" class="img-responsive" />
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="count-box">
                            <p class="main-section05_txt_tit title-sub-style04-white">{{ $t('index.MAIN_SECTION05_STITLE02') }}</p>
                            <div><span class="counter en">{{ Math.floor(days02) }}</span><span class="days koEn">{{ $t('index.MAIN_SECTION05_HRS') }}</span></div>
                        </div>
                        <div class="count-box count-box-bottom">
                            <p class="main-section05_txt_tit title-sub-style04-white">{{ $t('index.MAIN_SECTION05_STITLE04') }}</p>
                            <div><span class="counter en">{{ Math.floor(days04) }}%</span></div>
                        </div>
                    </div>
                </div>
            </div>
            <p class="main-section05_txt_spot italic-txt-style02-white clearfix">
                {{ $t('index.MAIN_SECTION05_TXT_SPOT') }}<br/>{{ $t('index.MAIN_SECTION05_TXT_SPOT2') }}
            </p>
        </div>
    </section>
</template>

<script>
    import { TweenLite, Power0 } from 'gsap'
    export default {
        name: 'Section5',
        data() {
            return {
                name: 'Section5',
                days01: 0,
                days02: 0,
                days03: 0,
                days04: 0
            }
        },
        methods: {
            updateText() {

            }
        },
        mounted() {
            const scrollMonitor = require('scrollmonitor')
            const myElement = document.querySelector('.main-section05_txt_spot')
            const elementWatcher = scrollMonitor.create(myElement)
            elementWatcher.enterViewport(() => {
                TweenLite.to(this, 37 * 0.04, { days01: 37, ease: Power0.easeNone, delay: 0 })
                TweenLite.to(this, 37 * 0.04, { days02: 27, ease: Power0.easeNone, delay: 0.5 })
                TweenLite.to(this, 15 * 0.04, { days03: 15, ease: Power0.easeNone, delay: 1.5 })
                TweenLite.to(this, 55 * 0.03, { days04: 55, ease: Power0.easeNone, delay: 2.0 })
            })
            elementWatcher.exitViewport(() => {

            })
        }

    }
</script>

<style lang="scss">
    @import "~sass/responsive";
    @import "~sass/variables";

    .index {
        .main-section05 {
            background:#1e1e22;
            color:#fff;
            text-align: center;

            > h2 {
                padding: 0 0 50px 0;
                clear: both
            }

            .graph-ani-box {
                .graph-ani-list {
                    > h3 {
                        margin-bottom: 50px;
                        font-size: 24px;
                        p {
                            text-transform: uppercase;
                            font-size: 11px;
                            letter-spacing: 0.5px;
                        }
                    }
                }

                .graph-ani-item {
                    /*height: 500px;*/
                    @include media-breakpoint-down(xl) {
                        /*height: 367px;*/
                    }
                    @include media-breakpoint-down(md) {
                        /*height: 234px;*/
                    }
                }

            }

            .count-box {
                padding-top: 90px;
                .days {
                    font-size: 30px;
                    font-weight: 100;
                }
                &.count-box-bottom {
                    padding-top: 145px;
                }
                .main-section05_txt_tit {
                    clear: both;
                    display: table;
                    width: 100%;
                    text-align:center;
                }

                .counter {
                    font-size: 120px;
                    font-weight: 200;
                    letter-spacing: -5px;

                }
            }

            .dash_line {
                height: 2px;
                width: 50px;
                margin: 50px auto;
                background-color: #C3C3CD;
            }

            p.main-section04_txt_spot {
                height: 60px;
                color: #232328;
                text-align: center;
            }

            .main-section05_txt_spot {
                padding-top: 70px;
                text-align: center;
                font-weight: 300;
            }
        }

        @include media-breakpoint-down(xl) {
            .main-section05 {
                > h2 {
                    padding: 0 70px 30px;
                }
                .graph-ani-box {
                    .graph-ani-list {
                        > h3 {
                            margin-bottom: 30px;
                            p {
                                text-transform: uppercase;
                                font-size: 10px;
                                letter-spacing: 0.5px;
                            }
                        }
                    }
                }


                .count-box {
                    padding-top: 62px;
                    &.count-box-bottom {
                        padding-top: 162px;
                    }
                    .main-section05_txt_tit {
                        clear: both;
                        display: table;
                        width: 100%;
                        text-align:center;
                    }

                    .counter {
                        font-size: 70px;
                        letter-spacing: -2px;
                    }
                }

                .dash_line {
                    height: 2px;
                    width: 50px;
                    margin: 50px auto;
                    background-color: #C3C3CD;
                }

                .main-section05_txt_spot {
                    padding: 30px 35px 0;
                }
            }
        }

        @include media-breakpoint-down(md) {
            .main-section05 {
                > h2 {
                    padding: 0 70px 30px;
                }
                .count-box {
                    &.count-box-bottom {
                        padding-top: 40px;
                    }

                }
                .dash_line {
                    height: 2px;
                    width: 50px;
                    margin: 50px auto;
                    background-color: #C3C3CD;
                }

                .main-section05_txt_spot {
                    padding: 50px 20px 0;
                }
            }
        }

        @include media-breakpoint-down(sm) {
            .main-section05 {
                > h2 {
                    padding: 0 70px 30px;
                }
                .count-box {
                    padding-top: 60px;

                    .counter {
                        font-size: 50px;
                        letter-spacing: -2px;
                    }
                }

                .dash_line {
                    height: 2px;
                    width: 50px;
                    margin: 50px auto;
                    background-color: #C3C3CD;
                }

                .main-section05_txt_spot {
                    padding: 50px 20px 0;
                }
            }
        }

        @include media-breakpoint-down(sm) {
            .main-section05 {
                .count-box {
                }
            }

        }
    }

    .zh .index .main-section05 {
        .main-section05_txt_spot {
            font-weight: 200;
        }
    }
</style>