<template>
    <div class="user-story">
        <div class="sub-header">
            <vueHeader></vueHeader>
            <div class="mobile-scroll"></div>
            <div class="sub-visual-txt-area">
                <h2 class="sub-visual-txt-title">{{ $t('userstories.USER-STORIES-TITLE') }}</h2>
                <p class="sub-visual-txt-spot">{{ $t('userstories.USER-STORIES-SPOT') }}</p>
            </div>
        </div>

        <div class="sub-area">
            <section class="container clearfix">
                <div class="col-12 col-md-4">
                    <a href="#" @click.prevent="openPopup({popupType: popupTypes.USER_STORY, post: $mq.above($mv.sm) ? 'userStory/adidas.mp4' : 'userStory/adidas_m.mp4'})" class="user-thumb-link">
                        <div class="user-story-thumb-box user-story1">
                            <h3 class="title-sub-style02-white koEn">{{ $t('userstories.USER-STORIES-TITLE1') }}</h3>
                            <p class="user-story-txt-name contents-txt-style04-white en">{{ $t('userstories.USER-STORIES-TXT-SPOT1') }}</p>
                            <p class="user-story-txt-spot contents-txt-style02-white">{{ $t('userstories.USER-STORIES-TXT-SPOT2') }}</p>
                            <span class="btn-user-story-play blind" title="play"><span>play</span></span>
                        </div>
                    </a>
                </div>
                <div class="col-12 col-md-4">
                    <a href="#" @click.prevent="openPopup({popupType: popupTypes.USER_STORY, post: $mq.above($mv.sm) ? 'userStory/dianese.mp4' : 'userStory/dianese_m.mp4'})" class="user-thumb-link">
                        <div class="user-story-thumb-box user-story2">
                            <h3 class="title-sub-style02-white en pd-dainese">{{ $t('userstories.USER-STORIES-TITLE2') }}</h3>
                            <p class="user-story-txt-name contents-txt-style04-white en">{{ $t('userstories.USER-STORIES-TXT2-SPOT1') }}</p>
                            <p class="user-story-txt-spot contents-txt-style02-white">{{ $t('userstories.USER-STORIES-TXT2-SPOT2') }}</p>
                            <span class="btn-user-story-play blind" title="play"><span>play</span></span>
                        </div>
                    </a>
                </div>
                <div class="col-12 col-md-4">
                    <a href="#" @click.prevent="openPopup({popupType: popupTypes.USER_STORY, post: $mq.above($mv.sm) ? 'userStory/edward_crutchley.mp4' : 'userStory/edward_crutchley_m.mp4'})" class="user-thumb-link">
                        <div class="user-story-thumb-box user-story3">
                            <h3 class="title-sub-style02-white en">{{ $t('userstories.USER-STORIES-TITLE3') }}</h3>
                            <p class="user-story-txt-name contents-txt-style04-white en">{{ $t('userstories.USER-STORIES-TXT3-SPOT1') }}</p>
                            <p class="user-story-txt-spot contents-txt-style02-white">{{ $t('userstories.USER-STORIES-TXT3-SPOT2') }}</p>
                            <span class="btn-user-story-play blind" title="play"><span>play</span></span>
                        </div>
                    </a>
                </div>
                <div class="col-12 col-md-4">
                    <a href="#" @click.prevent="openPopup({popupType: popupTypes.USER_STORY, post: $mq.above($mv.sm) ? 'userStory/kashion.mp4' : 'userStory/kashion_m.mp4' })" class="user-thumb-link">
                        <div class="user-story-thumb-box user-story5">
                            <h3 class="title-sub-style02-white koEn pd-theory">{{ $t('userstories.USER-STORIES-TITLE5') }}</h3>
                            <p class="user-story-txt-name contents-txt-style04-white en">{{ $t('userstories.USER-STORIES-TXT5-SPOT1') }}</p>
                            <p class="user-story-txt-spot contents-txt-style02-white">{{ $t('userstories.USER-STORIES-TXT5-SPOT2') }}</p>
                            <span class="btn-user-story-play blind" title="play"><span>play</span></span>
                        </div>
                    </a>
                </div>
                <div class="col-12 col-md-4">
                    <a href="#" @click.prevent="openPopup({popupType: popupTypes.USER_STORY, post: $mq.above($mv.sm) ?  'userStory/shanghai.mp4' : 'userStory/shanghai_m.mp4'})" class="user-thumb-link">
                        <div class="user-story-thumb-box user-story6">
                            <h3 class="title-sub-style02-white koEn pd-theory">{{ $t('userstories.USER-STORIES-TITLE6') }}</h3>
                            <p class="user-story-txt-name contents-txt-style04-white en">{{ $t('userstories.USER-STORIES-TXT6-SPOT1') }}</p>
                            <p class="user-story-txt-spot contents-txt-style02-white">{{ $t('userstories.USER-STORIES-TXT6-SPOT2') }}</p>
                            <span class="btn-user-story-play blind" title="play"><span>play</span></span>
                        </div>
                    </a>
                </div>
                <div class="col-12 col-md-4">
                    <a href="#" @click.prevent="openPopup({popupType: popupTypes.USER_STORY, post: $mq.above($mv.sm) ?  'userStory/theory.mp4' : 'userStory/theory_m.mp4'})" class="user-thumb-link">
                        <div class="user-story-thumb-box user-story4">
                            <h3 class="title-sub-style02-white en pd-theory">{{ $t('userstories.USER-STORIES-TITLE4') }}</h3>
                            <p class="user-story-txt-name contents-txt-style04-white en">{{ $t('userstories.USER-STORIES-TXT4-SPOT1') }}</p>
                            <p class="user-story-txt-spot contents-txt-style02-white">{{ $t('userstories.USER-STORIES-TXT4-SPOT2') }}</p>
                            <span class="btn-user-story-play blind" title="play"><span>play</span></span>
                        </div>
                    </a>
                </div>
                <div class="col-12 col-md-4">
                    <a href="#" @click.prevent="openPopup({popupType: popupTypes.USER_STORY, post: $mq.above($mv.sm) ?  'userStory/Teddy.mp4' : 'userStory/Teddy_m.mp4'})" class="user-thumb-link">
                        <div class="user-story-thumb-box user-story7">
                            <h3 class="title-sub-style02-white en pd-teddy">{{ $t('userstories.USER-STORIES-TITLE7') }}</h3>
                            <p class="user-story-txt-name contents-txt-style04-white en">{{ $t('userstories.USER-STORIES-TXT7-SPOT1') }}</p>
                            <p class="user-story-txt-spot contents-txt-style02-white">{{ $t('userstories.USER-STORIES-TXT7-SPOT2') }}</p>
                            <span class="btn-user-story-play blind" title="play"><span>play</span></span>
                        </div>
                    </a>
                </div>
            </section>
        </div>

        <vueFooterSimple></vueFooterSimple>
    </div>
</template>

<script>
    import * as popupTypes from '../../store/types/popup-types'
    import { mapActions } from 'vuex'

    export default {
        name: 'UserStory',
        data() {
            return {
                name: 'UserStory',
                popupTypes

            }
        },
        methods: {
            ...mapActions('popup', [
                'openPopup'
            ])
        }
    }
</script>

<style lang="scss">
    @import "~sass/responsive";
    @import "~sass/variables";

    .user-story {
        footer {
            border-top: 0 none !important;
        }
        .sub-header {
            height: 568px;
            background:url('~static/images/sub/visual-img-userstory.jpg') no-repeat center;
        }

        .sub-area {
            padding: 40px 0 86px;

            .user-story-thumb-box {
                position: relative;
                width: 100%;
                height: 460px;
                margin-bottom: 20px;
                padding: 103px 60px 50px;
                color:#fff;
                text-align: center;

                &.user-story1 {
                    background:url('~static/images/users/img-userstory-adidas.jpg') no-repeat center center;
                    background-size: cover;
                }

                &.user-story2 {
                    background:url('~static/images/users/userstory-dainese.jpg') no-repeat center center;
                    background-size: cover;
                }

                &.user-story3 {
                    background:url('~static/images/users/img-userstory-edcrutchley.jpg') no-repeat center center;
                    background-size: cover;
                }

                &.user-story4 {
                    background:url('~static/images/users/img-story-theory.jpg') no-repeat center center;
                    background-size: cover;
                }

                &.user-story5 {
                    background:url('~static/images/users/kashion.jpg') no-repeat center center;
                    background-size: cover;
                }

                &.user-story6 {
                    background:url('~static/images/users/shanghaiuni.jpg') no-repeat center center;
                    background-size: cover;
                }

                &.user-story7 {
                    background:url('~static/images/users/img_userstory_teddy.png') no-repeat center center;
                    background-size: cover;

                    .pd-teddy {
                        text-transform: none;
                    }
                }

                p.user-story-txt-name {
                    padding: 10px 0 19px;
                }

                p.user-story-txt-spot {
                    font-style: italic;
                }

                span.btn-user-story-play {
                    display: inline-block;
                    position: absolute;
                    left: 50%;
                    bottom: 50px;
                    width: 70px;
                    height: 25px;
                    margin: 0 0 0 -35px;
                    background: url('~static/images/common/onoff-txtplay.svg') no-repeat;
                    background-size: 100%;
                    vertical-align: middle;
                    background-position: 0 0;
                    z-index:1;
                }
            }

            a.user-thumb-link {
                &:hover {
                    span.btn-user-story-play {
                        background-position: 0 100%;
                    }
                }
            }

            .pd-dainese {
                padding-top: 25px
            }

            .pd-theory {
                padding-top: 40px
            }
        }

        .video-item {
            background: #f1f1f1;
        }
    }

    @include media-breakpoint-down(md) {
        .user-story {
            .sub-area {
                padding: 40px 0 86px;

                .user-story-thumb-box {
                    height: 300px;
                    padding: 60px 30px 30px;

                    p.user-story-txt-name {
                        padding: 10px 0 20px;
                    }

                    span.btn-user-story-play {
                        position: absolute;
                        left: 50%;
                        bottom: 30px;
                        width: 70px;
                        height: 25px;
                        margin: 0 0 0 -35px;
                    }
                }

                a {
                    display: block;
                    color: #fff;
                }
                .pd-dainese {
                    padding-top: 16px
                }

                .pd-theory {
                    padding-top: 30px
                }
            }

        }
    }

    @include media-breakpoint-down(sm) {
        .user-story {
            .sub-area {
                padding: 30px 0;

                .user-story-thumb-box {
                    height: 300px;
                    margin-bottom: 10px;
                    padding: 60px 30px 30px;

                    p.user-story-txt-name {
                        padding: 10px 0 20px;
                    }

                    span.btn-user-story-play {
                        position: absolute;
                        left: 50%;
                        bottom: 30px;
                        width: 70px;
                        height: 25px;
                        margin: 0 0 0 -35px;
                    }
                }

                a {
                    display: block;
                    color: #fff;
                }
            }
        }
    }

    body.ko,
    body.zh {
        .user-story {
            footer {
                border-top: 0 none !important;
            }
            .sub-header {
                height: 568px;
                background:url('~static/images/sub/visual-img-userstory.jpg') no-repeat center;
            }

            .sub-area {
                padding: 40px 0 86px;

                .user-story-thumb-box {
                    position: relative;
                    width: 100%;
                    height: 460px;
                    margin-bottom: 20px;
                    padding: 103px 60px 50px;
                    color:#fff;
                    text-align: center;

                    &.user-story1 {
                        background:url('~static/images/users/img-userstory-adidas.jpg') no-repeat center center;
                        background-size: cover;
                    }

                    &.user-story2 {
                        background:url('~static/images/users/userstory-dainese.jpg') no-repeat center center;
                        background-size: cover;
                    }

                    &.user-story3 {
                        background:url('~static/images/users/img-userstory-edcrutchley.jpg') no-repeat center center;
                        background-size: cover;
                    }

                    &.user-story4 {
                        background:url('~static/images/users/img-story-theory.jpg') no-repeat center center;
                        background-size: cover;
                    }

                    &.user-story5 {
                        background:url('~static/images/users/kashion.jpg') no-repeat center center;
                        background-size: cover;
                    }

                    &.user-story6 {
                        background:url('~static/images/users/shanghaiuni.jpg') no-repeat center center;
                        background-size: cover;
                    }

                    p.user-story-txt-name {
                        padding: 10px 0 19px;
                    }

                    p.user-story-txt-spot {
                        font-style: normal;
                    }

                    span.btn-user-story-play {
                        display: inline-block;
                        position: absolute;
                        left: 50%;
                        bottom: 50px;
                        width: 70px;
                        height: 25px;
                        margin: 0 0 0 -35px;
                        background: url('~static/images/common/onoff-txtplay.svg') no-repeat;
                        background-size: 100%;
                        vertical-align: middle;
                        background-position: 0 0;
                        z-index:1;
                    }
                }

                a.user-thumb-link {
                    &:hover {
                        span.btn-user-story-play {
                            background-position: 0 100%;
                        }
                    }
                }

                .pd-dainese {
                    padding-top: 25px
                }

                .pd-theory {
                    padding-top: 40px
                }
            }

            .video-item {
                background: #f1f1f1;
            }
        }

        @include media-breakpoint-down(md) {
            .user-story {
                .sub-area {
                    padding: 40px 0 86px;

                    .user-story-thumb-box {
                        height: 300px;
                        padding: 60px 30px 30px;

                        p.user-story-txt-name {
                            padding: 10px 0 20px;
                        }

                        span.btn-user-story-play {
                            position: absolute;
                            left: 50%;
                            bottom: 30px;
                            width: 70px;
                            height: 25px;
                            margin: 0 0 0 -35px;
                        }
                    }

                    a {
                        display: block;
                        color: #fff;
                    }
                    .pd-dainese {
                        padding-top: 16px
                    }

                    .pd-theory {
                        padding-top: 30px
                    }
                }

            }
        }

        @include media-breakpoint-down(sm) {
            .user-story {
                .sub-area {
                    padding: 30px 0;

                    .user-story-thumb-box {
                        height: 300px;
                        margin-bottom: 10px;
                        padding: 60px 30px 30px;

                        p.user-story-txt-name {
                            padding: 10px 0 20px;
                        }

                        span.btn-user-story-play {
                            position: absolute;
                            left: 50%;
                            bottom: 30px;
                            width: 70px;
                            height: 25px;
                            margin: 0 0 0 -35px;
                        }
                    }

                    a {
                        display: block;
                        color: #fff;
                    }
                }
            }
        }
    }
</style>