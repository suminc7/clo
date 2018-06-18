<template>
    <div class="social-content-wrapper">
        <div class="social-content-box">
            <div class="social-content col-12 col-sm-6 col-lg-8 offset-sm-3 offset-lg-2" :style="{'max-height': windowHeight}" style="overflow: auto">
                <div class="social-content-inner">
                    <div class="social-content-item col-lg-7" v-if="post.post_type === 'photo'" :style="{'background-image': `url(${post.photos && post.photos[0].l})`, 'background-size':'cover'}">
                        <div class="sns">
                            <div class="icon-sns" :class="post.network"></div>
                        </div>
                    </div>
                    <div v-video="" class="social-content-item col-lg-7" v-if="post.post_type === 'video'">
                        <video id="socialVideo" :poster="post.videos[0].p" width="100%" height="240" loop autoplay playsinline>
                            <source :src="post.videos[0].m" type="video/mp4">
                            Your browser does not support the video tag.
                        </video>
                        <a href="#" @click.prevent="" class="btn-play-video"></a>
                        <div class="sns">
                            <div class="icon-sns" :class="post.network"></div>
                        </div>
                    </div>

                    <div class="social-content-info col-lg-5 cb">
                        <a href="#" @click.prevent="close" class="social-close-btn"></a>
                        <div class="social-content-info-inner clearfix">
                            <div class="social-content-profile" :style="{'background-image': `url(${post.user_profile_image_url})`, 'background-size':'cover'}"></div>
                            <a href="#" @click.prevent="userIdClick(post)" class="social-content-user-name">{{ post.user_real_name === '' ? post.user_name : post.user_real_name }}<span v-if="post.network === 'twitter'"><br>@{{ post.user_name }}</span></a>
                            <div class="social-content-user-date">{{ moment(post.curated_time).fromNow() }}</div>
                        </div>
                        <div ref="contentText" class="social-content-text clearfix" :style="{height: contentTextHeight}">
                            <div ref="contentTextInner" class="social-content-text-inner" v-html="contentText(post)"></div>
                        </div>
                        <a @click.prevent="onMore" href="#" v-show="seeMore" class="social-content-text-more">SEE MORE</a>
                        <a :href="post.permalink" target="_blank" :class="$mq.resize && $mq.above($mv.xl) ? 'btn-normal btn-txt-style01-gray': 'btn-small btn-txt-style03-gray'" class="btn-share btn-color-black2 en btn-radius">{{ $t('social.SOCIAL_SHARE_ON') + post.network }}</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'
    import moment from 'moment'
    import * as cookies from '../../../utils/cookies'

    if (cookies.getLocale() === 'ko') {
        require('moment/locale/ko')
    } else if (cookies.getLocale() === 'zh') {
        require('moment/locale/zh-cn')
    }

    export default {
        name: 'SocialContent',
        data() {
            return {
                name: 'SocialContent',
                moment,
                seeMore: false,
                contentTextHeight: '55px',
                hidePlayButton: true
            }
        },
        computed: {
            ...mapGetters('popup', {
                'post': 'popupData'
            }),
            windowHeight() {
                return (window.innerHeight - 30) + 'px'
            }

        },
        methods: {
            close() {
                this.closePopup()
            },
            ...mapActions('popup', [
                'closePopup'
            ]),

            userIdClick(post) {
                if (post.network === 'instagram') {
                    window.open(`https://www.instagram.com/${post.user_name}`)
                } else if (post.network === 'facebook') {
                    window.open(`https://www.facebook.com/${post.user_id}`)
                } else if (post.network === 'twitter') {
                    window.open(`https://twitter.com/${post.user_name}`)
                }
            },
            contentText(post) {
                console.log(post)

                const re = /<a href=\"\//gi
                const re2 = /class="hashtag"/gi

                let html = post.html

                if (post.network === 'instagram') {
                    html = html.replace(re, '<a href=\"https://www.instagram.com/explore/tags/')
                } else if (post.network === 'facebook') {
                    html = html.replace(re, '<a href=\"https://www.facebook.com/search/top/?q=%23')
                } else if (post.network === 'twitter') {
                    html = html.replace(re, '<a href=\"https://twitter.com/search?q=%23')
                }

                return html.replace(re2, 'class="hashtag" target="_blank"')
            },
            onMore() {
                this.contentTextHeight = 'auto'
                this.seeMore = false
            },
            playVideo(e) {
                this.hidePlayButton = false
                window.document.getElementById('socialVideo').play()
            }
        },
        mounted() {
            if (this.$refs.contentTextInner.clientHeight > parseInt(this.contentTextHeight)) {
                this.seeMore = true
            }
        //
        //            // video가 재생중이면 play 버튼을 없앤다.
        //            const video = window.document.getElementById('socialVideo')
        //            if (video) {
        //                video.onplay = () => {
        //                    this.hidePlayButton = false
        //                }
        //            }
        }

    }
</script>

<style lang="scss">
    @import "~sass/responsive";
    @import "~sass/variables";

    .social-content-wrapper {
        display: table;
        width: 100%;
        height: 100%;
    }

    .social-content-box {
        display: table-cell;
        vertical-align: middle;
        max-width: 1440px;
        margin: 0 auto;
    }

    .social-content {

        .btn-share {
            width: auto !important;
            text-transform: uppercase;
            padding: 0 10px;
            display: block;
            margin-top: 20px;
            @include media-breakpoint-up(lg) {
                position: absolute;
                bottom: 20px;
                left: 20px;
                right: 20px;
                padding: 0 15px;
            }
            @include media-breakpoint-up(xl) {

            }
        }

        #socialVideo {
            position: absolute;
            top: 50%;
            left: 50%;
            min-width: 100%;
            min-height: 100%;
            width: 100%;
            height: 100%;
            transform: translateX(-50%) translateY(-50%);
            -webkit-transform: translateX(-50%) translateY(-50%);
            -ms-transform: translateX(-50%) translateY(-50%);
        }

        .social-content-item {
            height: 300px;
            overflow: hidden;
            /*background-color: #f1f1f1;*/
            /*background-position: center;*/
            background: #f1f1f1 top;
            border-bottom: 1px solid #f9f9f9;
            position: relative;
            @include media-breakpoint-up(lg) {
                height: 420px;
                border-bottom: 0;
                border-right: 1px solid #f9f9f9;
            }
            @include media-breakpoint-up(xl) {
                height: 580px;
            }

            .social-video-play {
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                background: url(~static/images/common/img_users_play.svg) no-repeat center;
                background-size: 60px;
                @include media-breakpoint-up(md) {
                    background-size: 40px;
                }
                @include media-breakpoint-up(lg) {
                    background-size: 55px;
                }
                @include media-breakpoint-up(xl) {
                    background-size: auto;
                }
            }
        }
        .social-content-info {
            padding: 20px;
            background-color: white;
            overflow-y: auto;
            text-align: left;
            @include media-breakpoint-up(lg) {
                height: 420px;
            }
            @include media-breakpoint-up(xl) {
                height: 580px;
            }

            .social-close-btn {
                background: url(~static/images/common/ui_1.svg) no-repeat -160px 0;
                width: 20px;
                height: 20px;
                position: absolute;
                right: 15px;
                top: 15px;
                background-size: 220px;
                display: block;
            }
            .social-content-profile {
                width: 50px;
                height: 50px;
                float: left;
                border-radius: 25px;
                margin-right: 12px;
            }
            .social-content-user-name {
                font-size: 13px;
                color: #232328;
                display: block;
                padding-bottom: 4px;
                &:hover {
                    text-decoration: underline;
                }
            }
            .social-content-user-date {
                font-style: italic;
                font-weight: 300;
                line-height: 11px;
                color: #232328;
            }
            .social-content-text {
                margin-top: 10px;
                color: #232328;
                font-size: 13px;
                line-height: 18px;
                overflow: hidden;
                word-break: break-all;
                .hashtag {
                    color: $color-blue;
                }
                @include media-breakpoint-up(lg) {
                    overflow: auto;
                    height: auto!important;
                }
            }
            .social-content-text-more {
                height: 10px;
                width: 260px;
                color: $color-blue;
                font-size: 10px;
                font-weight: 500;
                line-height: 12px;
                @include media-breakpoint-up(lg) {
                    display: none;
                }
            }
        }

    }
</style>