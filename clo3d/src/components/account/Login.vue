<template>
    <div class="login">
        <main-video></main-video>

        <vueHeader></vueHeader>

        <div class="account-area">
            <form class="account-box" @submit.prevent="validateBeforeSubmit">
                <h1 class="title-sub-style02-black">{{ $t('account.SIGN_IN').toUpperCase() }}</h1>
                <h2 class="account-stit contents-txt-style05-black">{{ $t('account.NEW_TO_CLO').toUpperCase() }} <router-link to="/join" class="login-path-link">{{ $t('account.SIGN_UP').toUpperCase() }}</router-link></h2>

                <div class="control-form-box">
                    <div class="login-form-input-box">
                        <input v-model="UserId" :class="{'input': true, 'is-danger': errors.has('loginId') }" class="form_input input-lowercase" name="loginId" type="text" placeholder="ID / Email" />
                        <span v-show="errors.has('loginId')" class="help is-danger">{{ errors.first('loginId') }}</span>
                    </div>

                    <div class="login-form-input-box">
                        <input v-model="Password" :class="{'input': true, 'is-danger': errors.has('loginPw') }" class="form_input" name="loginPw" type="password" :placeholder="$t('mypage.DASHBOARD_ACCOUNT_PASSWORD')" />
                        <span v-show="errors.has('loginPw')" class="help is-danger">{{ errors.first('loginPw') }}</span>
                    </div>

                    <div class="login-form-checkbox">
                        <label class="control control-checkbox">{{ $t('account.SIGN_IN_REMEMBER_ME') }}
                            <input type="checkbox" name="remember" :checked="RememberMe" @change="event => RememberMe = event.target.checked"/>
                            <div class="control-indicator"></div>
                        </label>
                    </div>

                    <div class="login-btn-sign-area">
                        <button type="submit" v-loading="'login'" :class="[$mq.resize && $mq.above($mv.xl) ? 'btn-normal': 'btn-small']" class="btn-color-blue btn-txt-style01-blue btn-radius"> {{ $t('account.SIGN_IN').toUpperCase() }} </button>
                    </div>
                    <div class="login-forgot-link contents-txt-style04-black">
                        <i18n path="account.FORGOT_PASS1" tag="span">
                            <router-link to="/account/identify" class="login-path-link">{{ $t('account.FORGOT_PASS2') }}</router-link>
                        </i18n>
                    </div>
                </div>
            </form>
        </div>

        <vueFooterSimple></vueFooterSimple>
    </div>
</template>

<script>
    import accountApi from '../../api/account'
    import * as cookieUtils from '../../utils/cookies'
    import { mapActions } from 'vuex'

    export default {
        name: 'Login',
        data() {
            return {
                name: 'Login',
                UserId: '',
                Password: '',
                RememberMe: 'false'
            }
        },
        watch: {
            UserId() {
                this.inputChange()
            },
            Password() {
                this.inputChange()
            }
        },
        methods: {
            inputChange() {
                const bag = this.$validator.errors
                if (bag.has('loginId')) {
                    bag.remove('loginId')
                    bag.remove('loginPw')
                }
            },
            ...mapActions('account', [
                'setHeaders',
                'setAuth',
                'setUserCookie',
                'signout'
            ]),
            validateError() {
                // 코드 실행되면 에러 메세지 출력된다. (에러 생김)
                const bag = this.$validator.errors
                bag.add('loginId', ' ', 'auth')
                bag.add('loginPw', this.$t('common.VALID_INCORRECT'), 'auth')
                bag.first('loginId:auth')
                bag.first('loginPw:auth')
            },
            validateBeforeSubmit() {
                this.$validator.validateAll({
                    loginId: this.UserId,
                    loginPw: this.Password
                }).then((result) => {
                    console.log(result)
                    if (!result) {
                        console.log('Correct them errors!')
                        return false
                    }
    
                    accountApi.login({
                        UserId: this.UserId,
                        Password: this.Password,
                        RememberMe: this.RememberMe,
                        isZendesk: this.$route.query.isZendesk,
                        'return_to': this.$route.query.return_to,
                        locale: window.siteInfo.langCodeForZen[cookieUtils.getLocale()].id
                    }).then(response => { // x-uid, token, x-upa, verifytype, email
                        console.log(response)
                        const header = response.headers

                        this.removeLoading('login')
    
                        if (response.data.Result === 1) {
                            this.setUserCookie({
                                id: header['x-uid'],
                                token: header['token'],
                                pwd: header['x-upa'],
                                verifyType: header['verifytype'],
                                hasEmail: header['email'] ? 'true' : ''
                            })

                            // TODO: setAuth 공통 함수로 만들다 fail....
                            // this.setAuth(response.headers)

                            this.setHeaders()
                            this.setRemeberMeCookie()
                            this.redirectUser(header)
                        } else {
                            this.validateError()
                        }
                    }).catch(response => {
                        console.log(response)
                        this.validateError()
                        this.removeLoading('login')
                    })
                }).catch(() => {
                    console.log('Correct them errors!')
                })
            },
            setRemeberMeCookie() {
                if (this.RememberMe) {
                    cookieUtils.setRememberMe('true')
                    cookieUtils.setRemembered(this.UserId)
                } else {
                    cookieUtils.setRememberMe('false')
                    cookieUtils.setRemembered('')
                }
            },
            redirectUser(header) {
                const query = this.$route.query
                const zendeskjwt = header.zendeskjwt

                if (!header.email) {
                    window.location.href = '/account/getemail'
                    return false
                }

                window.location.href = query.return_to
            }
        },
        created() {
            const rememberedUserId = cookieUtils.getRemembered() ? cookieUtils.getRemembered() : ''

            this.UserId = rememberedUserId
            this.Password = ''
            this.RememberMe = cookieUtils.getRememberMe() === 'true'

            // rule을 field에 추가한다.
            this.$validator.attach('loginId', 'required')
            this.$validator.attach('loginPw', 'required')
        }
    }
</script>

<style lang="scss">
    @import "~sass/responsive";
    @import "~sass/variables";

    .login {

        footer .ft-area {
            border: 0 none;
        }

        .account-area .account-box {
            width: 460px;
            padding: 50px 0 70px;

            h2.account-stit {
                a {
                    color: $color-blue;
                }
            }

            .control-form-box {
                width: 260px;
                margin:0 auto;
            }

            .login-btn-sign-area {
                width: 150px;
                margin:0 auto;
                padding:0;
            }
        }
    }

    @include media-breakpoint-down(md) {
        .login {
            .account-area .account-box {
                width: 300px;
                padding: 40px 0 50px;

                .control-form-box {
                    width: 180px;
                }

                .login-btn-sign-area {
                    width: 100px;
                    padding:0;
                }
            }
        }
    }
    @include media-breakpoint-down(sm) {
        .login {
            .account-area .account-box {
                width: 300px;
                padding: 30px 0 40px;

               h2.account-stit {
                   padding: 5px 0 11px;
                }

                .login-forgot-link {
                    margin-top: 12px;
                    font-size: 9px;
                }
            }
        }
    }

    .ko .account-area .account-box .control-form-box .login-forgot-link {
        font-weight: 300;
    }
</style>