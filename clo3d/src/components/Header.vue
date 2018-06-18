<template>
    <header>
        <div class="head">
            <div class="brand-logo">
                <a href="/" title="CLO"><img src="~static/images/common/logo.svg" alt="clo logo" /></a>
            </div>
            <ul class="nav" :class="{active: menuOpen}">
                <li @click="toggleMenu('explore')"><a class="depth-inner menu-style02-white" :href="isMobile ? false : '/explore/whyclo'" :class="{'on': selectedMenu === 'explore'}" v-html="$t('gnb.GNB_EXPLORE')"></a>
                    <ul class="nav-depth" :class="{'active': selectedMenu === 'explore'}">
                        <li><a href="/explore/whyclo" class="menu-style04-white" v-html="$t('gnb.GNB_WHY_CLO')"></a></li>
                        <li><a href="/explore/features" class="menu-style04-white">{{ $t('gnb.GNB_FEATURES') }}</a></li>
                    </ul>
                </li>
                <li @click="toggleMenu('user')"><a class="depth-inner menu-style02-white" :href="isMobile ? false : '/users/story'" :class="{'on': selectedMenu === 'user'}">{{ $t('gnb.GNB_USERS') }}</a>
                    <ul class="nav-depth" :class="{'active': selectedMenu === 'user'}">
                        <li><a href="/users/story" class="menu-style04-white">{{ $t('gnb.GNB_STORIES') }}</a></li>
                        <li><a href="/users/social" class="menu-style04-white">{{ $t('gnb.GNB_SOCIAL') }}</a></li>
                        <li><a href="#" @click.prevent="redirectToHelpcenter('forum')" target="_blank" class="menu-style04-white">{{ $t('gnb.GNB_FORUM') }}</a></li>
                        <li><a href="/users/recruit">{{ $t('gnb.GNB_RECRUIT') }}</a></li>
                    </ul>
                </li>
                <li @click="toggleMenu('learn')"><a :href="isMobile ? false : '/quickstart'" class="depth-inner menu-style02-white" :class="{'on':selectedMenu === 'learn'}">{{ $t('gnb.GNB_LEARN') }}</a>
                    <ul class="nav-depth" :class="{'active': selectedMenu === 'learn'}" >
                        <li><a href="/quickstart">{{ $t('gnb.GNB_QUICK_START') }}</a></li>
                        <li><a href="#" @click.prevent="redirectToHelpcenter('lesson')" target="_blank">{{ $t('gnb.GNB_LESSONS') }}</a></li>
                        <li><a href="#" @click.prevent="redirectToHelpcenter('manual')" target="_blank">{{ $t('gnb.GNB_MANUAL') }}</a></li>
                    </ul>
                </li>
                <li><a href="/pricing" class="depth-inner menu-style02-white noDepth">{{ $t('gnb.GNB_PRICING') }}</a></li>
                <li v-if="!isCheckMobile"><a @click.prevent="redirectToMarketPlace" href="#" class="depth-inner menu-style02-white">{{ $t('gnb.GNB_MARKETPLACE') }}</a></li>
                <li @click="toggleMenu('solution')"><a class="depth-inner menu-style02-white" :href="isMobile ? false : '/business/business_solution'" :class="{'on':selectedMenu === 'solution'}">{{ $t('gnb.GNB_BUSINESS_SOLUTION') }}</a>
                    <ul class="nav-depth" :class="{'active': selectedMenu === 'solution'}" >
                        <li><a href="/business/business_solution" class="menu-style04-white">{{ $t('gnb.GNB_SERVICE') }}</a></li>
                        <li><a href="/business/business_clients" class="menu-style04-white">{{ $t('gnb.GNB_CLIENTS') }}</a></li>
                    </ul>
                </li>
                <li><a href="#" @click.prevent="redirectToHelpcenter('helpcenter')" target="_blank" class="depth-inner menu-style02-white noDepth">{{ $t('gnb.GNB_HELP_DESK') }}</a></li>
            </ul>
            <div class="top-btn-box">
                <trialDownload />
                <a class="btn-sign-in contents-txt-style04-white" v-bind:href="`/login?return_to=${currentUrl}`" v-if="!isCheckMobile && !isLogin()">{{ $t('account.SIGN_IN') }}</a>
                <a href="#" v-if="isLogin()" class="" style="float:right; display: inline-block;" @click.prevent="event => mypageMenuOpen = true"><profileImage /></a>
            </div>

            <div>
                <a class="responsive-nav" @click.prevent="event => menuOpen = !menuOpen">
                    <img v-if="!menuOpen" src="~static/images/common/menu_01none_white.svg" alt="open menu" />
                    <img v-if="menuOpen" src="~static/images/common/close_white.svg" class="btn-lnb-close" alt="close menu" width="20px" height="20px"/>
                </a>
            </div>

            <mypageMenu ref="myPagemenu" v-if="isLogin() && mypageMenuOpen" @closeMypageMenu="mypageMenuOpen = false" />
            <banner v-if="isBanner" @bannerClosed="hideBanner" />
        </div>
    </header>
</template>

<script>
    import banner from './Banner'
    import mypageMenu from './common/MypageMenu.vue'
    import profileImage from './common/ProfileImage.vue'
    import trialDownload from './common/TrialDownload'
    import getMenuUrls from '../mixins/RedirectwithAuth'
    import { isCheckMobile } from '../utils/mobile-detect'

    import { mapActions } from 'vuex'

    export default {
        name: 'siteHeader',
        data() {
            return {
                name: 'siteHeader',
                isEmailVerified: true,
                mypageMenuOpen: false,
                menuOpen: false,
                selectedMenu: null,
                currentUrl: window.location.pathname === '/join' ? '/' : window.location.pathname.replace('/', ''),
                isIndex: window.location.pathname === '/',
                isBanner: null,
                isMobile: !(window.innerWidth > 1199),
                isCheckMobile
            }
        },
        components: {
            banner,
            mypageMenu,
            profileImage,
            trialDownload
        },
        mixins: [
            getMenuUrls
        ],
        computed: {
            getIsBanner() {
                if (window.sessionStorage.getItem('banner') === 'false') {
                    return false
                }

                return !(this.$route.meta.banner === false) && this.$user.emailStatus === 'pending'
            }
        },
        methods: {
            ...mapActions('popup', [
                'openPopup'
            ]),
            hideBanner() {
                window.sessionStorage.setItem('banner', false)
                this.isBanner = false
            },
            toggleMenu(menuName) {
                if (this.selectedMenu === menuName) {
                    this.selectedMenu = null
                    return false
                }
                this.selectedMenu = menuName
            },
            isLogin() {
                return this.$user.isLogin
            }
        },
        created() {
            this.isBanner = this.getIsBanner

            document.addEventListener('click', (e) => {
                if (this.mypageMenuOpen) {
                    let isBox = false
                    if (this.$refs.myPagemenu.$el.contains(e.target)) {
                        isBox = true
                    }
                    if (!isBox) {
                        this.mypageMenuOpen = false
                    }
                }
            }, true)
        }
    }
</script>

<style lang="scss">
    @import "~sass/responsive";
    @import "~sass/variables";

    body.zh .head {
        .nav {
            font-family: 'Noto Sans SC', sans-serif;

            li a {
                font-size: 12px;
                font-weight: 400;
            }
        }

        .btn-normal {
            font-weight: 500;
        }
    }

    header {
        width: 100%;
        padding-top: 40px;

        .head {
            position: relative;
            width: 100%;
            max-width: 1920px;
            min-width: 1200px;
            height: 40px;
            margin: 0 auto;
            padding: 0 30px;
            text-align: center;

            .brand-logo {
                display: inline-block;
                float: left;
                width: 8%;
                line-height: 40px;
                text-align: left;

                img {
                    vertical-align: middle;
                }
            }

            .nav {
                display: inline-block;
                width: 72%;
                margin: 0 auto;
                padding: 0;
                font-family: AvenirNextLTPro, sans-serif;

                li {
                    position: relative;
                    display:inline-block;
                    width: auto;
                    padding-right: 4%;
                    line-height: 42px;

                    &:last-child {
                        padding: 0;
                    }

                    > a {
                        position: relative;
                        z-index: 10;
                    }

                    a {
                        display: block;
                        color:#fff;
                        font-size: 11px;
                        font-weight: 500;
                        letter-spacing: 2px;
                    }

                    ul.nav-depth {
                        display: none;
                    }

                    &:hover {
                        a {
                            color:#7baee8;
                        }
                        ul.nav-depth {
                            display: block;
                            position: absolute;
                            top: 0;
                            left: 0;
                            width: 100%;
                            line-height: 100%;
                            padding-top: 46px;

                            li {
                                width: 100%;
                                height: 100% !important;
                                line-height: 100% !important;
                                padding-bottom: 15px;

                                a {
                                    display: block;
                                    color:#fff;
                                    height: 100% !important;
                                    line-height: 100% !important;
                                    text-align: left;

                                    &:hover {
                                        color: $color-blue;
                                    }
                                }
                            }
                        }
                    }
                }
            }

            .responsive-nav {
                display: none;
            }

            .top-btn-box {
                float: right;
                text-align: right;
            }
        }
    }

    @include media-breakpoint-down(lg) {

        header {
            .head {
                max-width: 100%;
                min-width: 100%;
                padding: 0 40px;

                .brand-logo {
                    display: block;
                    float: none;
                    width: auto;
                    text-align: center;
                }

                .btn-lnb-close {
                    margin-left: 20px;
                }

                .nav {
                    position: fixed;
                    top: 0;
                    left: -100%;
                    bottom: 0;
                    width: 400px;
                    padding: 70px 70px 0;
                    background-color: rgba(0,0,0,0.8);
                    z-index: 9999999999;
                    transition: all 0.5s;
                    overflow-y: auto;

                    &.active {
                        left: 0;
                    }

                    li {
                        width: 260px;
                        text-align: left;
                        padding: 0;
                        border-bottom: 1px solid #2D2D2D;
                        line-height: 13px;

                        a {
                            padding: 30px 0 27px;
                        }

                        a.depth-inner {
                            background: url('~static/images/common/drop_white_down.svg') no-repeat 95% 50%;
                        }
                        a.noDepth {
                            background: none;
                        }

                        a.depth-inner.on {
                            padding: 30px 0 10px;
                            background: url('~static/images/common/drop_white_up.svg') no-repeat 95% 27px;
                        }

                        // FIXME: pc일때 sass 함수 있을 듯
                        &:hover {
                            ul.nav-depth {
                                position: static;
                                padding-top: 0;
                                line-height: normal !important;

                                li {
                                    padding-bottom: 0;
                                    line-height: normal !important;

                                    a {
                                        line-height: normal !important;
                                    }
                                }
                            }
                        }

                        ul.nav-depth {
                            display: block;
                            position: relative;
                            top: 0;
                            left: 0;
                            width: 100%;
                            line-height: 100%;
                            height: 0;
                            overflow: hidden;
                            transition: all 0.5s;

                            &.active {
                                height: auto;
                            }

                            li {
                                width: 260px;
                                text-align: left;
                                padding: 0;
                                border-bottom: none;
                                line-height: 13px;

                                &:last-child {
                                    padding-bottom: 15px;
                                }

                                a {
                                    font-size: 11px;
                                    font-weight: 500;
                                    padding: 8px 0;
                                    letter-spacing: 2px;
                                    background: none !important;

                                    &:before {
                                        content: "- ";
                                    }
                                }
                            }
                        }
                    }
                }
                // Publishing Guide END

                .responsive-nav {
                    display: block;
                    position: fixed;
                    top: 50px;
                    left: 42px;
                    z-index: 99999999999999;

                    .btn-lnb-close {
                        margin:0 !important;
                    }
                }
            }
        }
    }

    @include media-breakpoint-down(sm) {
        header {
            padding-top: 20px !important;

            .head {
                .responsive-nav {
                    top: 33px;
                    left: 20px;
                }

                .nav {
                    position: fixed;
                    top: 0;
                    left: -100%;
                    bottom: 0;
                    width: 100%;
                    padding: 70px 40px 0;
                    background-color: rgba(0,0,0,0.8);
                    transition: all 0.5s;
                    overflow-y: auto;

                    &.active {
                        left: 0;
                    }

                    li {
                        width: 100%;
                        text-align: left;
                        padding: 0;
                        border-bottom: 1px solid #2D2D2D;
                        line-height: 13px;

                        a {
                            padding: 20px 0 17px;
                        }

                        a.depth-inner {
                        //    background: url('~static/images/common/drop_white_down.svg') no-repeat 95% 50%;
                        }

                        a.depth-inner.on {
                            padding: 20px 0 5px;
                            background: url('~static/images/common/drop_white_up.svg') no-repeat 95% 10px;
                        }

                        ul.nav-depth {
                            display: block;
                            position: relative;
                            top: 0;
                            left: 0;
                            width: 100%;
                            line-height: 100%;
                            padding-bottom: 5px;

                            li {
                                width: 100%;
                                text-align: left;
                                padding: 0;
                                border-bottom: none;
                                line-height: 13px;

                                a {
                                    font-size: 11px;
                                    font-weight: 500;
                                    padding: 8px 0;
                                    letter-spacing: 2px;
                                    background: none !important;

                                    &:before {
                                        content: "- ";
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
</style>