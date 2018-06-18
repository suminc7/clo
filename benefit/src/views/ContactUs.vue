<template>
    <div class="contact-us">
        <div class="sub-visual">
            <span class="sub-title font-visual-title c-white">{{ $t('contactus.SUB_VISUAL_TITLE') }}</span>
        </div>
        <div class="section-item">
            <div class="container">
                <div class="title font-title" v-html="$t('contactus.FAQ_TITLE')"></div>
                <div class="desc font-txt2" v-html="$t('contactus.FAQ_DESC')"></div>
                <ul class="faq-list col-12 col-sm-8 col-fhd-6">
                    <li v-for="n in 5" class="faq-list-item" @click.prevent="itemClick">
                        <a href="#" class="font-txt2">What is CLO?</a>
                        <div class="faq-list-content-item"><p class="font-txt3">CLO is a 3D design tool used to visualize true-to-life 3D garments.</p></div>
                        <a href="#" class="icon-faq down"></a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="section-item ques">
            <div class="container">
                <div class="inner-container col-12 col-md-6">
                    <div class="main-title font-title c-white" v-html="$t('contactus.FAQ_QUES_TITLE')"></div>
                    <div class="desc font-txt2 c-white" v-html="$t('contactus.FAQ_QUES_DESC')"></div>
                    <div class="contact-input-group">
                        <div class="title font-sub-title3 c-white">{{ $t('contactus.FAQ_QUES_NAME') }}<span class="bullet c-coral">*</span></div>
                        <label>
                            <input type="text"/>
                        </label>
                    </div>
                    <div class="contact-input-group">
                        <div class="title font-sub-title3 c-white">{{ $t('contactus.FAQ_QUES_EMAIL') }}<span class="bullet c-coral">*</span></div>
                        <label>
                            <input type="text"/>
                        </label>
                    </div>
                    <div class="contact-input-group">
                        <div class="title font-sub-title3 c-white">{{ $t('contactus.FAQ_QUES_MESSAGE') }}<span class="bullet c-coral">*</span></div>
                        <label>
                            <textarea></textarea>
                        </label>
                        <button class="btn-round md submit-btn coral">SUBMIT</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import elementClass from 'element-class'
    export default {
        name: 'ContactUs',
        data() {
            return {
                name: 'ContactUs',
                currentItem: null
            }
        },
        methods: {
            itemClick(e) {
                if (this.currentItem) elementClass(this.currentItem.querySelector('.faq-list-content-item')).remove('active')
                if (this.currentItem) elementClass(this.currentItem.querySelector('.icon-faq')).remove('up')
                elementClass(e.currentTarget.querySelector('.faq-list-content-item')).toggle('active')
                elementClass(e.currentTarget.querySelector('.icon-faq')).toggle('up')
                this.currentItem = e.currentTarget
            }
        }

    }
</script>

<style lang="scss">
    @import "~scss/vars";
    @import "~scss/responsive";
    @import "~scss/font-style";
    .contact-us {

        .section-item.ques {
            background-color: $charcoal-grey;
            .main-title {
                text-transform: uppercase;
                letter-spacing: 8px;
                line-height: 42px;
            }
            .title {
                text-transform: uppercase;
            }
            .submit-btn {
                width: 150px;
                margin-top: 40px;
                @include media-breakpoint-down(md) {
                    margin-top: 30px;
                }
            }
            .inner-container {
                margin: 0 auto;
            }
            .contact-input-group {
                margin-top: 70px;
                @include media-breakpoint-down(md) {
                    margin-top: 50px;
                }
                .title {
                    text-align: left;
                }
                input {
                    -webkit-appearance: none;
                    height: 70px;
                    width: 100%;
                    border: 0;
                    border-bottom: 2px solid #d2d2d2;
                    background-color: transparent;
                    color: white;
                    @extend .font-txt1;
                    @include media-breakpoint-down(md) {
                        height: 40px;
                    }
                }
                textarea {
                    padding: 18px 20px 22px 20px;
                    margin-top: 10px;
                    width: 100%;
                    height: 300px;
                    border-radius: 3px;
                    border: solid 2px #d2d2d2;
                    -webkit-appearance: none;
                    background-color: transparent;
                    color: white;
                    @extend .font-txt2;
                    @include media-breakpoint-down(md) {
                        height: 200px;
                    }
                }
            }
        }

        .desc.font-txt2 {
            margin-top: 27px;
            @include media-breakpoint-down(md) {
                margin-top: 10px;
            }
            p {
                font-size: inherit;
                color: $coral;
                display: inline;
            }
        }

        .faq-list {
            margin: 60px auto 0 auto;
        }
        .faq-list-item {
            position: relative;
            .icon-faq {
                position: absolute;
                right: 0;
                top: 0;
            }

            &:first-child {
                border-top: 1px solid #cccccf;
            }
            border-bottom: 1px solid #cccccf;
            a {
                padding: 15px 0;
                display: block;

            }
            .faq-list-content-item {
                max-height: 0;
                overflow: hidden;
                background-color: #f5f5f5;
                &.active {
                    max-height: 200px;
                }
                p {
                    padding: 25px 0;
                }
            }

        }
    }
</style>