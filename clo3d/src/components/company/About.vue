<template>
    <div class="about">
        <div class="sub-header">
            <vueHeader></vueHeader>
            <div class="mobile-scroll"></div>
            <div class="about-tit-box">
                <h2 class="title-sub-style04-white">{{ $t('aboutus.ABOUT_TITLE_ABOUT') }}</h2>
                <p class="about-stit title-sub-style01-white en">{{ $t('aboutus.ABOUT_STITLE_FASHION') }}</p>
                <p class="about-tit-fashion italic-txt-style01-white">{{ $t('aboutus.ABOUT_TXT_SPOT1') }}</p>
                <p class="about-txt-spot contents-txt-style03-white" v-html="$t('aboutus.ABOUT_TXT_SPOT2')"></p>
            </div>
        </div>

        <div class="sub-area">
            <div class="about-partners-box">
               <h3 class="title-sub-style02-black">{{ $t('aboutus.ABOUT_TITLE_PARTNERS') }}</h3>
               <P class="about-partners-spot contents-txt-style03-black">{{ $t('aboutus.ABOUT_PARTNERS_TXT') }}</P>

               <div class="container">

                   <div class="row">
                       <div class="col-6 col-md-3 ">
                           <a href="https://alvanon.com/" target="_blank" title="ALVANON"><div class="about-partners-list partners-list1"></div></a>
                       </div>
                       <div class="col-6 col-md-3 ">
                           <a href="http://www.grimmbro.com/" target="_blank" title="GRIMM BRO"><div class="about-partners-list partners-list2"></div></a>
                       </div>

                       <div class="col-6 col-md-3 ">
                           <a href="https://www.keyshot.com/" target="_blank" title="KEYSHOT"><div class="about-partners-list partners-list3"></div></a>
                       </div>

                       <div class="col-6 col-md-3 ">
                           <a href="http://www.masterkey.com.tr/" target="_blank" title="MASTERKEY"><div class="about-partners-list partners-list4"></div></a>
                       </div>

                       <div class="col-6 col-md-3 ">
                           <a href="http://www.prisma-tech.it/" target="_blank" title="PRISMA TECH"><div class="about-partners-list partners-list5"></div></a>
                       </div>

                       <div class="col-6 col-md-3 ">
                           <a href="http://www.sizestream.com/" target="_blank" title="SIZE STREAM"><div class="about-partners-list partners-list6"></div></a>
                       </div>

                       <div class="col-6 col-md-3 ">
                           <a href="https://www.foundry.com/" target="_blank" title="THE FOUNDRY"><div class="about-partners-list partners-list7"></div></a>
                       </div>

                       <div class="col-6 col-md-3 ">
                           <a href="https://www.vizoo3d.com/" target="_blank" title="VIZOO"><div class="about-partners-list partners-list8"></div></a>
                       </div>

                       <div class="col-6 col-md-3 ">
                           <a href="https://www.chaosgroup.com" target="_blank" title="VRAY"><div class="about-partners-list partners-list9"></div></a>
                       </div>

                       <div class="col-6 col-md-3 ">
                           <a href="http://www.wacom.com/" target="_blank" title="WACOM"><div class="about-partners-list partners-list10"></div></a>
                       </div>

                       <div class="col-6 col-md-3 ">
                           <a href="http://www.youthhitech.com/" target="_blank" title="APPAREL BASE"><div class="about-partners-list partners-list11"></div></a>
                       </div>

                       <div class="col-6 col-md-3 ">
                           <a href="http://www.yuka.com.tw/" target="_blank" title="YU HUEI SYSTEM DEVELOPMENT CO. LTD."><div class="about-partners-list partners-list12"></div></a>
                       </div>

                       <div class="col-6 col-md-3 ">
                           <a href="http://yuka-alpha.com/" target="_blank" title="YUKA &amp; ALPHA"><div class="about-partners-list partners-list13"></div></a>
                       </div>
                   </div>
               </div>
           </div>
        </div>

        <div class="about-contact-area">

            <div class="about-map"></div>

            <div class="about-contact-box">
               <h3 class="title-sub-style02-black">{{ $t('aboutus.ABOUT_TITLE_CONTACT') }}</h3>

               <i18n path="aboutus.ABOUT_CONTACT_TXT" tag="p" class="about-contact-spot contents-txt-style03-black">
                   <a href="/contact" class="about-link">{{ $t('aboutus.ABOUT_TXT_HERE') }}</a>
               </i18n>

               <div class="about-office-box">
                   <div class="container">
                       <div class="row">
                           <div class="about-global-office">
                               <div class="col-12 col-md-4">
                                   <div class="about-office-inner">
                                       <h4 class="adr-tit en">{{ $t('aboutus.ABOUT_HEADQUARTERS') }}</h4>
                                       <p class="adr-txt" v-html="$t('aboutus.ABOUT_ADR_KOREA')"></p>
                                   </div>
                               </div>

                               <div class="col-12 col-md-4">
                                   <div class="about-office-inner">
                                       <h4 class="adr-tit en">{{ $t('aboutus.ABOUT_TITLE_USA') }}</h4>
                                       <p class="adr-txt" v-html="$t('aboutus.ABOUT_ADR_USA')"></p>
                                   </div>
                               </div>

                               <div class="col-12 col-md-4">
                                   <div class="about-office-inner">
                                       <h4 class="adr-tit en">{{ $t('aboutus.ABOUT_TITLE_EUROPE') }}</h4>
                                       <p class="adr-txt" v-html="$t('aboutus.ABOUT_ADR_EUROPE')"></p>
                                   </div>
                               </div>

                               <div class="col-12 col-md-4">
                                   <div class="about-office-inner">
                                       <h4 class="adr-tit en">{{ $t('aboutus.ABOUT_TITLE_CHINA') }}</h4>
                                       <p class="adr-txt" v-html="$t('aboutus.ABOUT_ADR_CHINA')"></p>
                                   </div>
                               </div>

                               <div class="col-12 col-md-4">
                                   <div class="about-office-inner">
                                       <h4 class="adr-tit en">{{ $t('aboutus.ABOUT_TITLE_HONGKONG') }}</h4>
                                       <p class="adr-txt" v-html="$t('aboutus.ABOUT_ADR_HONGKONG')"></p>
                                   </div>
                               </div>

                               <div class="col-12 col-md-4">
                                   <div class="about-office-inner">
                                       <h4 class="adr-tit en">CLO INDIA</h4>
                                       <p class="adr-txt">Coming Soon</p>
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
        </div>

        <vueFooterSimple></vueFooterSimple>

    </div>
</template>

<script>
    export default {
        name: 'about',
        data() {
            return {
                name: 'about'
            }
        }
    }
</script>

<style lang="scss">
    @import "~sass/responsive";
    @import "~sass/variables";

    .about {
        .sub-header {
            height: 810px;
            background:url(~static/images/about/visual_img_about.jpg) no-repeat center;

            .about-tit-box {
                padding-top: 174px;
                color:#fff;
                text-align: center;
                clear: both;

                > h2 {
                    margin-bottom: 50px;
                }

                .about-stit {
                    margin-bottom: 20px;
                }

                .about-tit-fashion {
                    margin-bottom: 29px;
                }

                .about-txt-spot {
                    max-width: 940px;
                    margin:0 auto;
                    padding-top: 11px;
                    text-align: center;
                }
            }
        }

        .sub-area {
            position: relative;
            padding: 0 10px;

            .about-partners-box {
                padding: 70px 0;
                text-align: center;

                .about-partners-spot {
                padding: 20px 0 50px 0;
            }

                .about-partners-list {
                    display: inline-block;
                    width: 100%;
                    max-width: 340px;
                    min-height: 115px;
                    background: url('~static/images/about/img-logo-partners.png') no-repeat center center;
                    background-size: 200%;
                    vertical-align: middle;

                    &.partners-list1 {
                        background-position: 0 0;

                        &:hover {
                            background-position: 100% 0;
                        }
                    }

                    &.partners-list2 {
                        background-position: 0 8.3%;

                        &:hover {
                            background-position: 100% 8.3%;
                        }
                    }

                    &.partners-list3 {
                        background-position: 0 16.6%;

                        &:hover {
                            background-position: 100% 16.6%;
                        }
                    }

                    &.partners-list4 {
                        background-position: 0 25%;

                        &:hover {
                            background-position: 100% 25%;
                        }
                    }

                    &.partners-list5 {
                        background-position: 0 33.3%;

                        &:hover {
                            background-position: 100% 33.3%;
                        }
                    }

                    &.partners-list6 {
                        background-position: 0 41.6%;

                        &:hover {
                            background-position: 100% 41.6%;

                        }
                    }

                    &.partners-list7 {
                        background-position: 0 50%;

                        &:hover {
                            background-position: 100% 50%;
                        }
                    }

                    &.partners-list8 {
                        background-position: 0 58.3%;

                        &:hover {
                            background-position: 100% 58.3%;
                        }
                    }

                    &.partners-list9 {
                        background-position: 0 66.6%;

                        &:hover {
                            background-position: 100% 66.6%;
                        }
                    }

                    &.partners-list10 {
                        background-position: 0 75%;

                        &:hover {
                            background-position: 100% 75%;
                        }
                    }

                    &.partners-list11 {
                        background-position: 0 83.3%;

                        &:hover {
                            background-position: 100% 83.3%;
                        }
                    }

                    &.partners-list12 {
                        background-position: 0 91.6%;

                        &:hover {
                            background-position: 100% 91.6%;
                        }
                    }

                    &.partners-list13 {
                        background-position: 0 100%;

                        &:hover {
                            background-position: 100% 100%;
                        }
                    }
                }
             }
        }

        .about-contact-area {
            position: relative;

            .about-map {
                position: absolute;
                left: 0;
                bottom: 0;
                width: 100%;
                height: 600px;
                background:url('~static/images/about/bg-clomap.png') no-repeat center 0;
                background-size: cover;
            }

            .about-contact-box {
                max-width: 1440px;
                margin: 0 auto;
                padding: 0 10px;
                color: #fff;
                text-align: center;
                clear: both;

               .about-contact-spot {
                    padding: 20px 0 0 0;
                }

                a.about-link {
                    color:$color-blue;
                }

                .about-office-box {
                    width: 100%;
                    height: 600px;
                    margin-top: 50px;
                    padding-top: 210px;
                    color:#fff;
                    text-align: center;

                    .about-office-inner {
                        padding-bottom: 100px;
                        clear: both;

                        > h4.adr-tit {
                            font-size: 15px;
                            font-weight: 500;
                            letter-spacing: 1px;
                            line-height: 20px;
                        }

                        .adr-txt {
                            padding-top: 15px;
                            font-family: $font-lato;
                            font-size: 13px;
                            line-height: 18px;
                        }
                    }

                    .about-global-office {
                        overflow: hidden;
                        width: 100%;
                        clear: both;
                    }
                }
            }
        }
    }

    @include media-breakpoint-down(lg) {
        .about-partners-list {
            max-width: 220px !important;
            min-height: 78px !important;
        }
    }

    @include media-breakpoint-down(md) {
        .about {
            .sub-header {
                height: 768px;

                .about-tit-box {
                    padding-top: 161px;

                    > h2 {
                        margin-bottom: 40px;
                    }

                    .about-tit-fashion {
                        margin-bottom: 20px;
                    }

                    .about-txt-spot {
                        max-width: 460px;
                        padding:0;
                    }
                }
            }

            .sub-area {
                .about-partners-box {
                    padding: 50px 0 60px;

                    .about-partners-spot {
                        padding: 10px 0 40px 0;
                    }

                    .about-partners-list {
                        max-width: 140px !important;
                        min-height: 48px !important;
                    }
                }
            }

            .about-contact-area {

                .about-map {
                    position: absolute;
                    left: 0;
                    bottom: 0;
                    width: 100%;
                    height: 400px;
                    background:url('~static/images/about/bg-clomap.png') no-repeat center 0;
                    background-size: cover;
                }

                .about-contact-box {
                    .about-contact-spot {
                        padding: 10px 0 0 0;
                        font-size: 11px;
                        line-height: 15px;
                    }

                    a.about-link {
                        color:$color-blue;
                    }

                    .about-office-box {
                        width: 100%;
                        height: 400px;
                        margin-top: 40px;
                        padding-top: 100px;

                        .about-office-inner {
                            padding-bottom: 70px;
                            text-align: center;

                            > h4.adr-tit {
                                font-size: 10px;
                                letter-spacing: 1px;
                                line-height: 12px;
                            }

                            .adr-txt {
                                display: inline-block;
                                padding-top: 10px;
                                font-size: 11px;
                                line-height: 15px;
                            }
                        }

                        .about-global-office {
                        }
                    }
                }
            }
        }
    }

    @include media-breakpoint-down(sm) {
        .about {
            .sub-header {
                height: 568px;

                .about-tit-box {
                    padding-top: 64px;

                    > h2 {
                        margin-bottom: 30px;
                    }

                    .about-stit {
                        font-size: 17px;
                        letter-spacing: 2px;
                        line-height: 27px;
                    }

                    .about-txt-spot {
                        max-width: 300px;
                    }
                }
            }

            .sub-area {
                .about-partners-box {
                    padding: 40px 0 30px;

                    .about-partners-spot {
                        padding: 10px 15px 30px;
                    }

                    .about-partners-list {
                        max-width: 140px !important;
                        min-height: 48px !important;
                    }
                }

                .about-partners-box {
                    padding: 40px 0 30px;
                }
            }

            .about-contact-area {

                .about-map {
                    position: absolute;
                    left: 0;
                    bottom: 0;
                    width: 100%;
                    height: 134px;
                    background: url('~static/images/about/bg-clomap.png') no-repeat center 0;
                    background-size: cover;
                }

                .about-contact-box {

                    .about-contact-spot {
                        padding: 10px 0 20px 0;
                    }

                    .about-office-box {
                        width: 100%;
                        height: 100%;
                        margin: 0;
                        padding: 0 0 160px 0;

                        .about-office-inner {
                            padding: 0;
                            text-align: center;

                            > h4.adr-tit {
                                color: #232328;
                                font-size: 10px;
                                letter-spacing: 1px;
                                line-height: 20px;
                            }

                            .adr-txt {
                                display: inline-block;
                                padding: 0 0 20px 0;
                                color: #232328;
                                font-size: 9px;
                                line-height: 12px;
                                text-align: center;
                            }
                        }

                        .about-global-office {
                            padding-top: 0;
                        }
                    }
                }
            }
        }
    }

    @media (max-width: 321px) {
        .about {
            .col-6 {
                flex: 0 0 50%;
                max-width: 50%;
            }
        }
    }
</style>