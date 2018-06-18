<template>
    <div class="index">
        <main-video />
        <vueHeader />

        <div class="obtPopup" ref="obtPopup" v-if="!isPopupExpired">
            <div class="obtPopup-inner">
                <div class="obtPopup-tableCell">
                    <p class="obtPopup-version">CLO 4.1</p>
                    <h2 class="obtPopup-title">
                        <div class="subTit">NEW FEATURES</div>
                        <div class="tit">WEBINAR</div>
                    </h2>
                    <p class="obtPopup-subTitle font-italic"><span>Select your language.</span></p>

                    <ul>
                        <li><a href="https://www.bigmarker.com/clo3d/What-s-New-in-CLO-4-1/promote_manage" target="_blank" class="btn-color-white btn-normal btn-radius btn-txt-style01-white btn">ENGLISH</a></li>
                        <li><a href="https://www.youtube.com/watch?v=FXhicEjV5FA" target="_blank" class="btn-color-white btn-normal ko btn-radius btn-txt-style01-white btn">한국어</a></li>
                        <li><a href="http://www.douyu.com/4943776" target="_blank" class="btn-color-white btn-normal btn-radius btn-txt-style01-white btn zh">中文</a></li>
                    </ul>


                    <a href="#" @click.prevent="closeObtPopup" class="btn-close-tooltip"><img src="~static/images/event/obt_4_1/close_white.svg" alt="close"></a>
                </div>
            </div>
        </div>


        <div>
            <section1 />
            <section2 />
            <section4 />
            <section3 />
            <section5 />
            <section6 />
            <section7 />
        </div>

        <vueFooter />
    </div>
</template>


<script>
    import Section1 from './index/Section1.vue'
    import Section2 from './index/Section2.vue'
    import Section3 from './index/Section3.vue'
    import Section4 from './index/Section4.vue'
    import Section5 from './index/Section5.vue'
    import Section6 from './index/Section6.vue'
    import Section7 from './index/Section7.vue'

    import { isCheckMobile } from '../utils/mobile-detect'

    export default {
        components: {
            Section7,
            Section6,
            Section5,
            Section4,
            Section3,
            Section2,
            Section1 },
        name: 'Index',
        data() {
            return {
                name: 'Index',
                isCheckMobile
            }
        },
        computed: {
            isPopupExpired() {
                return new Date().getTime() > new Date('2018-05-30').getTime()
            }
        },
        methods: {
            closeObtPopup() {
                this.$refs.obtPopup.style.display = 'none'
            }
        },
        mounted() {
            const vid = document.getElementById('myVideo')
            vid.autoplay = true
            vid.load()
        }
    }
</script>

<style lang="scss">
    @import "~sass/responsive";
    @import "~sass/variables";

    .index {
        .copyright {
            font-size: 9px;
            line-height: 1.67;
            letter-spacing: 0.2px;
            position: absolute;
            right: 10px;
            bottom: 10px;
            font-family: $font-lato;
            @include media-breakpoint-up(sm) {
                right: 30px;
                bottom: 30px;
                font-size: 11px;
                line-height: 1.36;
                letter-spacing: 0.3px;
            }
            @include media-breakpoint-up(xl) {
                font-size: 13px;
                line-height: 1.38;
                letter-spacing: 0.3px;
            }
        }

        .obtPopup {
            position: absolute;
            left: 50%;
            top: 100px;
            max-width: 100%;
            margin-left: -470px;
            //margin-top: -300px;
            padding: 0 10px;
            background: url('~static/images/popup/webinar.jpg') no-repeat right center #000;
            -webkit-background-size: auto 100%;
            background-size: auto 100%;
            //text-align: center;
            z-index: 9999;
            color: #fff;
            //box-shadow: 0 5px 30px 0 rgba(0, 0, 0, 0.7);

            &-inner {
                display: table;
                width: 940px;
                height: 600px;
            }
            &-tableCell {
                display: table-cell;
                vertical-align: middle;
                padding: 0 70px;
            }

            &-version {
                margin-bottom: 18px;
                font-size: 25px;
                letter-spacing: 1px;
                font-weight: 400;
            }
            &-title {
                font-size: 35px;
                letter-spacing: 5px;
                line-height: 1.2em;

                .tit {
                    font-weight: 400;
                }
                .subTit {
                    font-weight: 200;
                }
            }
            &-subTitle {
                margin: 40px 0 40px 0;
                font-size: 15px;
                font-style: italic;
                font-family: $font-lato-light;
                font-weight: 200;

                span {
                    vertical-align: middle;
                }
                &:before {
                    content: '';
                    display: inline-block;
                    width: 15px;
                    height: 15px;
                    margin-right: 10px;
                    margin-top: -4px;
                    vertical-align: middle;
                    background: url('~static/images/common/check_white.svg') no-repeat left center;
                }
            }
            .btn {
                width: 200px;
                font-weight: 300;
                margin: 5px 0;

                &.ko,
                &.zh {
                    font-size: 12px;
                }
            }

            .btn-close-tooltip {
                position: absolute;
                top: 0;
                right: 0;
                width: 80px;
                height: 80px;
            }
        }
    }

    /*.ko,
    .zh {
        .index {
            .obtPopup-title {
                font-weight: 200;
                font-size: 35px;
                letter-spacing: 18px;
            }

            .obtPopup-subTitle {
                font-weight: 200;
            }
            .btn {
                font-size: 14px;
                font-weight: 200;
            }
        }
    }
    .zh {
        .index {
            .obtPopup-title {
                letter-spacing: normal;
            }
        }
    }*/

    @media (max-width: 620px){
        .index {
            .obtPopup {
                left: 10px;
                right: 10px;
                margin-left: 0;

                &-inner {
                    width: 100%;
                }

                .btn-close-tooltip {
                  /*  right: -10px;*/
                }
            }
        }
    }

    @include media-breakpoint-down(md) {
        .index {
            .obtPopup {
                left: 10px;
                right: 10px;
                margin-left: 0;

                &-inner {
                    height: 480px;
                    width: 100%;
                }
                &-version {
                    margin-bottom: 10px;
                    font-size: 17px;
                    letter-spacing: 0.7px;
                }
                &-title {
                    font-size: 25px;
                    letter-spacing: 4px;
                }
                &-subTitle {
                    font-size: 12px;
                }
                .btn {
                    width: 140px;
                }
            }
        }
    }


    @include media-breakpoint-down(xs) {
        .index {
            .obtPopup {
               // background: red;
                background-image: url('~static/images/popup/webinar_m.jpg');
                -webkit-background-size: cover;
                background-size: cover;
                text-align: center;

                &-tableCell {
                    padding: 0 20px;
                }
            }
        }
    }



</style>
