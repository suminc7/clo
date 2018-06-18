<template>
    <div class="ft-area">
        <div class="ft-inner">
            <div class="ft-top-box">
                <div class="col-12 col-xl-1">
                    <a href="/" class="ft-logo"><img src="~static/images/common/ft_logo.svg" alt="clo logo" /></a>
                </div>
                <div class="col-12 col-xl-10">
                    <div class="mobile-pd-none">
                        <ul class="ft-menu-list en">
                            <li class="ft-menu1">
                                <div class="ft-menu-box">
                                    <h3 class="ft-list-tit ft-list-none" :class="{'border-none': selectedFooter === 0}" @click="toggleFooter(0)">{{ $t('footer.FOOTER_NAV_LIST01_TITLE') }}</h3>
                                    <ul class="ft-list" :class="{ active: selectedFooter === 0 }">
                                        <li><a href="/explore/whyclo">{{ $t('footer.FOOTER_NAV_LIST01_DEHTH06') }}</a></li>
                                        <li><a href="/users/story">{{ $t('footer.FOOTER_NAV_LIST01_DEHTH01') }}</a></li>
                                        <li><a href="/pricing">{{ $t('footer.FOOTER_NAV_LIST01_DEHTH02') }}</a></li>
                                        <li><a href="/explore/features">{{ $t('footer.FOOTER_NAV_LIST01_DEHTH03') }}</a></li>
                                        <li v-if="!isCheckMobile"><a @click.prevent="redirectToMarketPlace" href="#">{{ $t('footer.FOOTER_NAV_LIST01_DEHTH04') }}</a></li>
                                        <li v-if="!isCheckMobile"><a href="/download">{{ $t('footer.FOOTER_NAV_LIST01_DEHTH05') }}</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li class="ft-menu2">
                                <div class="ft-menu-box">
                                    <h3 class="ft-list-tit" :class="{'border-none': selectedFooter === 1}" @click="toggleFooter(1)">{{ $t('footer.FOOTER_NAV_LIST02_TITLE') }}</h3>
                                    <ul class="ft-list" :class="{ active: selectedFooter === 1 }">
                                        <li><a href="/quickstart">{{ $t('footer.FOOTER_NAV_LIST02_DEHTH01') }}</a></li>
                                        <li><a href="#" @click.prevent="redirectToHelpcenter('lesson')">{{ $t('footer.FOOTER_NAV_LIST02_DEHTH02') }}</a></li>
                                        <li><a href="#" @click.prevent="redirectToHelpcenter('documentation')" target="_blank">{{ $t('footer.FOOTER_NAV_LIST02_DEHTH03') }}</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li class="ft-menu3">
                                <div class="ft-menu-box">
                                    <h3 class="ft-list-tit" :class="{'border-none': selectedFooter === 2}" @click="toggleFooter(2)">{{ $t('footer.FOOTER_NAV_LIST03_TITLE') }}</h3>
                                    <ul class="ft-list" :class="{ active: selectedFooter === 2 }">
                                        <li><a href="/users/social">{{ $t('footer.FOOTER_NAV_LIST03_DEHTH01') }}</a></li>
                                        <li><a href="#" @click.prevent="redirectToHelpcenter('forum')" target="_blank">{{ $t('footer.FOOTER_NAV_LIST03_DEHTH02') }}</a></li>
                                        <li><a href="/users/recruit">{{ $t('gnb.GNB_RECRUIT') }}</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li class="ft-menu4">
                                <div class="ft-menu-box">
                                    <h3 class="ft-list-tit" :class="{'border-none': selectedFooter === 3}" @click="toggleFooter(3)">{{ $t('footer.FOOTER_NAV_LIST04_TITLE') }}</h3>
                                    <ul class="ft-list" :class="{ active: selectedFooter === 3 }">
                                        <li><a href="/business/business_solution">{{ $t('footer.FOOTER_NAV_LIST04_DEHTH01') }}</a></li>
                                        <li><a href="/business/business_clients">{{ $t('footer.FOOTER_NAV_LIST04_DEHTH02') }}</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li class="ft-menu5">
                                <div class="ft-menu-box">
                                    <h3 class="ft-list-tit" :class="{'border-none': selectedFooter === 4}" @click="toggleFooter(4)">{{ $t('footer.FOOTER_NAV_LIST05_TITLE') }}</h3>
                                    <ul class="ft-list" :class="{ active: selectedFooter === 4 }">
                                        <li><a href="#" @click.prevent="redirectToHelpcenter('helpcenter')" target="_blank">{{ $t('footer.FOOTER_NAV_LIST05_DEHTH01') }}</a></li>
                                        <li><a :href="`/contact`">{{ $t('footer.FOOTER_NAV_LIST05_DEHTH02') }}</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li class="ft-menu6 pd-last">
                                <div class="ft-menu-box">
                                    <h3 class="ft-list-tit" :class="{'border-none': selectedFooter === 5}" @click="toggleFooter(5)">{{ $t('footer.FOOTER_NAV_LIST06_TITLE') }}</h3>
                                    <ul class="ft-list" :class="{ active: selectedFooter === 5 }">
                                        <li><a href="/company/about">{{ $t('footer.FOOTER_NAV_LIST06_DEHTH01') }}</a></li>
                                        <li><a href="/company/news">{{ $t('footer.FOOTER_NAV_LIST06_DEHTH03') }}</a></li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <changeLanguage class="col-12 col-xl-1" />
                <familySite />
            </div>


            <div class="ft-info">
                <div class="row">
                    <div class="col-12 col-xl-4 sns-box">
                        <ul class="sns-link">
                            <li><a href="https://www.facebook.com/clo3d" class="icon_facebook" title="Facebook" target="_blank"><span class="blind">Facebook</span></a></li>
                            <li><a href="https://twitter.com/itsclo3d" class="icon_twitter" title="Twitter" target="_blank"><span class="blind">Twitter</span></a></li>
                            <li><a href="http://instagram.com/itsclo3d" class="icon_instagram" title="Instagram" target="_blank"><span class="blind">Instagram</span></a></li>
                            <li><a href="https://www.youtube.com/user/itsclo3d" title="Youtube" class="icon_youtube" target="_blank"><span class="blind">Youtube</span></a></li>
                        </ul>
                    </div>
                    <div class="col-12 col-xl-4">
                        <ul class="info-list en">
                            <li><a href="#" class="pop_Policy link-color-blue" title="service" @click.prevent="openPopup({popupType: popupTypes.TERMS, post: popupTypes.TERMS_SERVICE})">{{ $t('footer.FOOTER_TERMS') }}</a></li>
                            <li>I</li>
                            <li><a href="#" title="privacy" @click.prevent="openPopup({popupType: popupTypes.TERMS, post: popupTypes.TERMS_PRIVACY})">{{ $t('footer.FOOTER_AGREEMENT') }}</a></li>
                        </ul>
                    </div>
                    <div class="col-12 col-xl-4 center">
                        <span class="copy">{{ $t('footer.FOOTER_COPYLIGHT') }}</span>
                    </div>
                </div>
            </div>

            <!-- 약관 팝업 -->
            <popupTerms></popupTerms>
        </div>
    </div>

</template>

<script>
    import popupTerms from './popup/PopupTerms'
    import * as popupTypes from '../store/types/popup-types'
    import { mapActions } from 'vuex'
    import getMenuUrls from '../mixins/RedirectwithAuth'
    import { isCheckMobile } from '../utils/mobile-detect'

    import changeLanguage from './ChangeLang'
    import familySite from './FamilySite'

    export default {
        name: 'footerLinks',
        data() {
            return {
                name: 'footer',
                selectedFooter: null,
                windowWidth: window.outerWidth,

                pathName: window.location.pathname,
                currentUrl: window.location.pathname === '/join' ? '/' : window.location.pathname.replace('/', ''),

                popupTypes,
                isCheckMobile
            }
        },
        components: {
            popupTerms,
            changeLanguage,
            familySite
        },
        mixins: [
            getMenuUrls
        ],
        methods: {
            ...mapActions('popup', [
                'openPopup'
            ]),
            toggleFooter(index) {
                if (index === this.selectedFooter) {
                    this.selectedFooter = null
                    return false
                }
                this.selectedFooter = index
            }
        }
    }
</script>
