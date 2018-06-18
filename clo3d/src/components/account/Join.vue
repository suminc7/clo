<template>
    <div class="join">
        <main-video />
        <vueHeader />

        <div class="account-area">
            <form autocomplete="off" name="joinField" class="account-box account-sign-box" @submit.prevent="validateBeforeSubmit">
                <h1 class="title-sub-style02-black">{{ $t("account.SIGN_UP").toUpperCase() }}</h1>
                <h2 class="account-stit contents-txt-style05-black">{{ $t('account.SIGN_IN_TXT_ACCOUNT').toUpperCase() }} <router-link to="/login" class="login-path-link">{{ $t('account.SIGN_IN').toUpperCase() }}</router-link></h2>

                <div class="control-form-box">
                    <div class="login-form-input-box">
                        <input v-model="UserId"
                               data-vv-delay="100"
                               v-validate="'required|join_id|async_id'"
                               :class="{ 'input': true, 'is-danger': errors.has('joinId') && !errors.firstByRule('joinId', 'required'),  'input-validation-successbar': fields.joinId ? fields.joinId.valid : false }"
                               class="form_input input-lowercase"
                               name="joinId"
                               type="text"
                               placeholder="ID"
                               spellcheck="false"
                               maxlength="25"
                        >
                        <validation-label :error="errors" :field="fields" :id="'joinId'" />
                    </div>
                    <div class="login-form-input-box">
                        <input v-model="Email"
                               data-vv-delay="100"
                               v-validate="'required|join_email|async_email'"
                               :class="{'input': true, 'is-danger': errors.has('joinEmail') && !errors.firstByRule('joinEmail', 'required'), 'input-validation-successbar': fields.joinEmail ? fields.joinEmail.valid : false }"
                               class="form_input input-lowercase"
                               name="joinEmail"
                               type="text"
                               :placeholder="$t('contactus.CONTACT_FIELD_EMAIL')"
                               spellcheck="false"
                               autocomplete="off"
                        >
                        <validation-label :error="errors" :field="fields" :id="'joinEmail'"  style="height:10px" />

                        <div class="tooltip-box clearfix">
                            <span class="txt-student contents-txt-style04-black">{{ $t('account.ACCOUNT_STUDENT') }}</span> <a href="#" @click.prevent="openPopup(popupTypes.TOOLTIP_STUDENT_JOIN)" class="ico-question"><img src="~static/images/common/q.svg" alt="question" /></a>
                        </div>
                    </div>
                    <div class="login-form-input-box">
                        <input v-model="Password"
                               v-validate="'required|min:6'"
                               :class="{'input': true, 'is-danger': errors.has('password') && !errors.firstByRule('password', 'required'), 'input-validation-successbar': fields.password ? fields.password.valid : false }"
                               class="form_input"
                               name="password"
                               type="password"
                               :placeholder="$t('mypage.DASHBOARD_ACCOUNT_PASSWORD')"
                               autocomplete="new-password"
                        >
                        <validation-label :error="errors" :field="fields" :id="'password'" />
                    </div>
                    <div class="login-form-input-box">
                        <input v-model="PasswordConfirm"
                               v-validate="'required|confirmed:password'"
                               :class="{'input': true, 'is-danger': errors.has('confirmedPassword') && !errors.firstByRule('confirmedPassword', 'required'), 'input-validation-successbar': fields.confirmedPassword ? fields.confirmedPassword.valid : false }"
                               class="form_input"
                               name="confirmedPassword"
                               type="password"
                               :placeholder="$t('mypage.CHANGE_PASSWORD_CONFIRM')"
                               autocomplete="off"
                        >
                        <validation-label :error="errors" :field="fields" :id="'confirmedPassword'" />
                    </div>
                    <div class="login-form-input-box"  :class="{'is-danger': errors.has('country'), 'input-validation-successbar': !errors.has('country')}">
                        <div class="select">
                            <select name="country" v-validate="'required'" v-if="countryList" v-select="getSelectValue" class="selectpicker">
                                <option v-for="el in countryList" :value="el.Key" :selected="el.Key === defaultCountryValue">{{ el.Value }}</option>
                            </select>
                        </div>

                        <div class="siginup-error-message-box">
                            <span v-show="errors.has('country')" class="help is-danger">{{ errors.firstByRule('country', 'required') }}</span>
                        </div>
                    </div>
                </div>

                <div class="signup-agree">
                    <div class="login-form-checkbox">
                        <label class="control control-checkbox">
                            <input v-validate="'required'" name="terms" type="checkbox" />
                            <div class="control-indicator"></div>

                            <i18n path="account.TERMS_AGREE" tag="span" class="contents-txt-style04-black">
                                    <span>
                                        <a href="#" @click.prevent="openPopup({popupType: popupTypes.TERMS, post: popupTypes.TERMS_SERVICE})" class="login-path-link">{{ $t('account.TERMS_SERVICE') }}</a>{{ $t('account.TERMS_AGREE2') }}
                                        <a href="#" @click.prevent="openPopup({popupType: popupTypes.TERMS, post: popupTypes.TERMS_PRIVACY})" class="login-path-link">{{ $t('account.TERMS_PRIVACY') }}</a>
                                    </span>
                            </i18n>
                        </label>
                    </div>
                </div>

                <div class="login-btn-sign-area">
                    <button v-loading="" :disabled="!formValid" type="submit" class="btn-normal btn-color-blue btn-txt-style01-blue btn-radius">{{ $t("common.BTN_CREATE_ACCOUNT") }}</button>
                </div>

            </form>
        </div>

        <vueFooterSimple />
    </div>
</template>

<script>
    import accountApi from '../../api/account'
    import ValidationLabel from '../common/ValidationLabel'
    import formMixin from '../../mixins/form-mixin'
    import getCountryList from '../../mixins/getCountryList'

    import * as popupTypes from '../../store/types/popup-types'
    import { mapActions } from 'vuex'

    export default {
        components: {
            ValidationLabel
        },
        name: 'Join',
        data() {
            return {
                name: 'Join',
                UserId: '',
                Email: '',
                Password: '',
                PasswordConfirm: '',
                countries: null,
                popupTypes
            }
        },
        mixins: [
            formMixin,
            getCountryList
        ],
        methods: {
            ...mapActions('popup', [
                'openPopup'
            ]),
            validateBeforeSubmit() {
                accountApi.register({
                    UserId: this.UserId,
                    Email: this.Email,
                    Password: this.Password,
                    PasswordConfirm: this.PasswordConfirm
                }).then(data => {
                    this.$router.push('/account/confirmemail')
                }).catch(error => {
                    console.log(error)
                    this.removeLoading('join')
                })
            },
            getSelectValue(value) {
                console.log(value)
                this.selectedCountry = value
                this.changeCountryValidatorFlag(value)
            },
            changeCountryValidatorFlag(countryValue) {
                if (!countryValue) {
                    this.errors.add('country', this.$t('common.VALID_REQUIRED'), 'required')
                    this.$validator.flag('country', {
                        valid: false,
                        dirty: true
                    })

                    console.log(this)

                    return false
                }

                this.errors.remove('country')
                this.$validator.flag('country', {
                    valid: true,
                    dirty: false
                })
            }
        },
        created() {
            this.setCountryList()
        }
    }
</script>


<style lang="scss">

</style>