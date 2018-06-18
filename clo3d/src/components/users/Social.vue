<template>
    <div class="social">
        <div class="sub-header">
            <vueHeader></vueHeader>
            <div class="mobile-scroll"></div>
            <div class="sub-visual-txt-area">
                <h2 class="sub-visual-txt-title en">{{ $t('social.SOCIAL_TITLE') }}</h2>
                <p class="sub-visual-txt-spot" v-html="$t('social.SOCIAL_SUB_TITLE')"></p>
            </div>
        </div>
        <div class="sub-area clearfix">
            <ul class="post-lists clearfix">
                <li v-if="posts.length === 0" v-for="n in 8" class="post-list col-12 col-md-4 col-xl-3">
                    <div class="post-item">
                        <div class="post-inner">
                            <div class="user-info">
                                <div class="user-profile"></div>
                                <div class="user-name"></div>
                            </div>
                        </div>
                    </div>
                </li>
                <li v-for="(post, index) in posts" class="post-list col-12 col-md-4 col-xl-3">
                    <a @click.prevent="onClick(post)" href="#" class="post-item" :style="{'background-image': `url(${getThumbnail(post)})`, 'background-size':'cover'}">
                        <div class="post-inner loaded" :class="{video: post.post_type === 'video'}">
                            <div class="sns">
                                <div class="icon-sns" :class="post.network"></div>
                            </div>
                            <div class="user-info">
                                <div class="user-profile" :style="{'background-image': `url(${post.user_profile_image_url})`, 'background-size':'cover'}"></div>
                                <div class="user-name">{{ post.user_real_name }}<span v-if="post.network === 'twitter'"><br>@{{ post.user_name }}</span></div>
                            </div>
                        </div>
                    </a>
                </li>
            </ul>
            <a @click.prevent="more" v-if="posts.length < meta.total" href="#" target="_blank" :class="$mq.resize && $mq.above($mv.xl) ? 'btn-normal btn-txt-style01-blue': 'btn-small btn-txt-style03-blue'" class="loadmore btn-share btn-color-blue btn-radius">{{ $t('social.SOCIAL_LOAD_MORE') }}</a>
        </div>
        <a href="#"  id="itemToWatch" @click.prevent="more"></a>

        <vueFooterSimple></vueFooterSimple>
    </div>
</template>

<script>
    import api from '../../api/account'
    import { mapActions } from 'vuex'
    import * as popupTypes from '../../store/types/popup-types'
    import qs from 'qs'
    import scrollMonitor from 'scrollmonitor'

    export default {
        name: 'Social',
        data() {
            return {
                name: 'Social',
                posts: [],
                meta: {
                    total: 0
                },
                queryString: { count: 16 },
                popupTypes,
                isMore: true
            }
        },
        created() {
            if (this.$mq.below(this.$mv.xl)) {
                this.queryString.count = 9
            }
            if (this.$mq.below(this.$mv.sm)) {
                this.queryString.count = 4
            }
            this.fetchData()
        },
        methods: {
            getThumbnail(post) {
                return post.post_type === 'photo' ? post.photos[0].l : post.videos[0].p
            },
            fetchData() {
                const data = this.queryString
                api.getTagboard(data).then(({ data }) => {
                    const tagboard = JSON.parse(data)

                    console.log('tagboard.posts', tagboard.posts)
                    if (this.posts.length >= tagboard.meta.total) {
                        this.isMore = false
                    }

                    console.log(tagboard)
                    this.posts = [...this.posts, ...tagboard.posts]
                    this.meta = tagboard.meta
                })
            },
            onClick(post) {
                this.openPopup({ popupType: popupTypes.SOCIAL_CONTENT, post })
            },
            ...mapActions('popup', [
                'openPopup'
            ]),
            more() {
                // 더보기에서 before객체가 있을 경우 queryString에 포함되어야 한다
                if (this.posts.length > 0 && this.meta.hasOwnProperty('before')) {
                    this.queryString = qs.parse(this.meta.before.split('?')[1])
                    this.fetchData()
                }
            }

        },
        mounted() {
            // scrollMonitor: 스크롤시 해당 element가 화면에 들어오면 이벤트 발생
            // 더보기 구현
            var myElement = document.getElementById('itemToWatch')
            var elementWatcher = scrollMonitor.create(myElement)
            elementWatcher.enterViewport(() => {
            //                this.more()
            })
        }
    }
</script>

<style lang="scss">
    @import "~sass/responsive";
    @import "~sass/variables";

    .icon-sns {
        background: url('~static/images/common/icon_users_sns.svg') no-repeat;
        background-size: 120px;
        width: 30px;
        height: 30px;
        &.white {
            background:url('~static/images/common/icon_users_sns.svg') no-repeat;
        }
        &.facebook {
            background-position: 0 0;
        }
        &.twitter {
            background-position: 33.3% 0;
        }
        &.instagram {
            background-position: 66.6% 0;
        }
        &.youtube {
            background-position: 100% 0;
        }
        @include media-breakpoint-up(xl) {
            background-size: 150px;
            width: 37.5px;
            height: 37.5px;
        }
    }


    .social {
        .loadmore {
            display: block;
            margin: 0 auto 30px auto;
        }

        .sub-header {
            height: 568px;
            background:url('~static/images/sub/bg_sub_social.jpg') no-repeat center;

            .social-tit-box {
                padding-top: 200px;
                text-align: center;
                clear: both;
                > h2 {
                    color: #fff;
                    font-size: 27px;
                    letter-spacing: 7px;
                    line-height: 32px;
                }

                .social-txt-spot {
                    color: #fff;
                    padding-top: 14px;
                    font-size: 13px;
                    line-height: 20px;
                    text-align: center;
                }
            }

            @include media-breakpoint-up(md) {
                .social-tit-box {
                    padding-top: 190px;

                    > h2 {
                        font-size: 40px;
                        line-height: 48px;
                    }

                    .social-txt-spot {
                        padding-top: 15px;
                        font-size: 17px;
                        line-height: 25px;
                    }
                }
            }
            @include media-breakpoint-up(xl) {
                .social-tit-box {
                    padding-top: 170px;


                    > h2 {
                        font-size: 50px;
                        font-weight: 500;
                        letter-spacing: 15px;
                        line-height: 60px;
                    }

                    .social-txt-spot {

                        padding-top: 11px;
                        font-size: 20px;
                        line-height: 30px;
                    }
                }
            }

        }
        .sub-area {
            padding: 0;
        }

        .post-lists {
            font-size: 0;
            padding: 30px 0 15px 0;
            @include media-breakpoint-up(xl) {
                padding: 40px 0 30px 0;
            }
            .post-list {
                font-size: 11px;
                display: inline-block;
                margin: 10px 0;
            }
        }

        .post-item {
            background-size: cover;
            background: #f1f1f1 no-repeat top;
            height: 300px;
            display: block;

            @include media-breakpoint-up(md) {
                height: 235px;
            }
            @include media-breakpoint-up(lg) {
                height: 321px;
            }
            @include media-breakpoint-up(xl) {
                height: 340px;
            }
        }

        .post-inner {
            height: 100%;
            width: 100%;

            position: relative;
            &.loaded {
                background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.3) 100%) no-repeat center;
            }

            &.video {
                background-image: url(~static/images/common/img_users_play.svg);
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
        .sns {
            position: absolute;
            top: 5px;
            right: 5px;
        }
        .user-info {
            display: table;
            position: absolute;
            left: 12px;
            bottom: 12px;
            @include media-breakpoint-up(md) {
                left: 10px;
                bottom: 10px;
            }
            @include media-breakpoint-up(lg) {
                width: 32px;
                height: 32px;
            }
            @include media-breakpoint-up(xl) {
                width: 50px;
                height: 50px;
            }

            .user-profile {
                width: 44px;
                height: 44px;
                float: left;
                border-radius: 25px;
                margin-right: 10px;

                @include media-breakpoint-up(md) {
                    width: 32px;
                    height: 32px;
                }
                @include media-breakpoint-up(lg) {
                    width: 32px;
                    height: 32px;
                }
                @include media-breakpoint-up(xl) {
                    width: 50px;
                    height: 50px;
                }


            }
            .user-name {
                color: white;
                width: 100px;
                white-space: nowrap;
                display: table-cell;
                vertical-align: middle;
            }
        }

    }
</style>