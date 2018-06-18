<template>
    <div class="popup-contents login-popup">
        <a href="#" @click.prevent="$store.dispatch('popup/offPopup')" class="btn-close icon-input close-grey"></a>
        <div class="bi black"></div>
        <div class="desc font-view-desc">
            You can sign in with CLO<span class="font-view-desc">SET</span> account
        </div>
        <div class="input-group">
            <input style="text-transform: lowercase;" :class="" @keyup.enter="checkValidate && login()" v-model="userid" class="userid-input input-text input-lowercase" type="text" placeholder="ID" />
            <span class="help"></span>
        </div>
        <div class="input-group">
            <input :class="" @keyup.enter="checkValidate && login()" v-model="password" class="password-input input-text input-lowercase" type="password" placeholder="PW" />
            <span :class="error.className" class="help">{{ error.message }}</span>
        </div>
        <div class="remember-email">
            <span class="ui checkbox">
                <input type="checkbox" id="remember" class="hidden" v-model="rememberMe">
                <label for="remember">Remember my email</label>
            </span>
            <!--<label><input type="checkbox" /> Remember my email</label>-->

        </div>
        <button @click="login" :disabled="!checkValidate" class="login-btn btn-rectangle">SIGN IN</button>
    </div>
</template>

<script>
    const error = {
        default: {
            message: '',
            className: ''
        },
        wrongPassword: {
            message: 'Invalid userid or password. Please try again.',
            className: 'is-danger'
        }
    }

    import { setCookie, getCookie } from '../../utils/cookie'

    export default {
        name: 'Login',
        data() {
            return {
                name: 'Login',
                userid: getCookie('rememberMe') || '',
                password: '',
                loginPromise: null,
                error: error.default,
                rememberMe: false
            }
        },
        watch: {
            userid() {
                this.inputChange()
            },
            password() {
                this.inputChange()
            }
        },
        computed: {
            checkValidate() {
                return !!this.userid.trim() && !!this.password.trim() && !this.loginPromise
            }
        },
        methods: {
            inputChange() {
                this.error = error.default
            },
            login() {
                const userAccount = {
                    'closetAccount': this.userid.toLowerCase(),
                    'closetPassword': this.password
                }

                this.loginPromise = this.$store.dispatch('account/login', userAccount)
                    .then(response => {
                        if (response.data === 'signup') {
                            this.join(userAccount)
                            return
                        }
                        this.loginComplete(response)
                    })
                    .catch(this.loginError)
            },
            join(userAccount) {
                this.$store.dispatch('account/signup', userAccount)
                    .then(this.loginComplete)
                    .catch(this.loginError)
            },
            loginComplete(response) {
                this.$store.dispatch('account/setToken', response.data)
                this.$store.dispatch('popup/offPopup')

                if (this.rememberMe) {
                    setCookie('rememberMe', this.userid.toLowerCase(), 7)
                }
            },
            loginError(err) {
                if (err.response.status === 400) this.error = error.wrongPassword
                this.loginPromise = null
            }
        },
        created() {

        }

    }
</script>

<style lang="scss">
    @import "~scss/vars";
    .popup-contents {
        &.login-popup {
            .title {
                margin-bottom: 30px;
            }
            .desc {
                color: #323333;
                margin: 35px 0 35px 0;
                span {
                    color: #55d7e6;
                }
            }
            .remember-email {
                text-align: left;
                label {
                    padding-left: 25px;
                }
            }
            .login-btn {
                margin-top: 25px;
            }
            .signup {
                display: block;
                margin-top: 15px;
                span {
                    color: $scarlet;
                }
            }
        }
    }

</style>