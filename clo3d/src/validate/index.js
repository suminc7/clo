import Vue from 'vue'
import VeeValidate, { Validator, Rules } from 'vee-validate'
import api from '../api/account'

export default function validate(lang, i18n) {
    Vue.use(VeeValidate, {
        locale: lang,
        events: 'input',
        enableAutoClasses: true
    })

    const dictionary = {
        [lang]: {
            messages: {
                min: (field, args) => i18n.t('common.VALID_MIN_CHAR', [args]),
                confirmed: i18n.t('common.VALID_NOT_A_MATCH'),
                required: i18n.t('common.VALID_REQUIRED')
                // email: i18n.t('common.VALID_EMAIL')
            }
        }
    }

    Validator.localize(dictionary)

    const dict = {
        [lang]: {
            custom: {
                loginId: {
                    required: i18n.t('common.VALID_LOGIN_ID')
                },
                loginPw: {
                    required: i18n.t('common.VALID_LOGIN_PW')
                }

            }
        }
    }

    Validator.localize(dict)

    Validator.extend('join_id', {
        getMessage: (field, params, data) => data && data.message,
        validate: (value, args) => new Promise(resolve => {
            console.log('validateion')
            if (!Rules.alpha(value.substr(0, 1))) {
                resolve({
                    valid: false,
                    data: { message: i18n.t('common.VALID_JOIN_ID_LOWERCASE') }
                })
            } else if (value.length < 4 || value.length > 20 || !Rules.alpha_num(value)) {
                resolve({
                    valid: false,
                    data: { message: i18n.t('common.VALID_JOIN_ID') }
                })
            } else {
                resolve({
                    valid: true
                })
            }
        })
    })

    // async_email과 같은 api를 호출하지만, 에러 메세지가 다르다.
    Validator.extend('async_id', {
        getMessage: (field, params, data) => data && data.message,
        validate: (value, args) => new Promise(resolve => {
            api.check(value).then(response => {
                resolve({
                    valid: response.data,
                    data: { message: i18n.t('common.VALID_ID_USED') }
                })
            })
        })
    })

    Validator.extend('async_email', {
        getMessage: (field, params, data) => data && data.message,
        validate: (value, args) => new Promise(resolve => {
            api.check(value).then(response => {
                resolve({
                    valid: response.data,
                    data: { message: i18n.t('common.VALID_EMAIL_USED') }
                })
            })
        })
    })

    // Validator.extend('required', {
    //     getMessage: (field, params, data) => data && data.message,
    //     validate: (value, args) => new Promise(resolve => {
    //         console.log(value)
    //         if (value.length < 1) {
    //             console.log('value 1', value)
    //             resolve({
    //                 valid: false,
    //                 data: { message: '123' }
    //             })
    //         } else {
    //             console.log('value 2', value)
    //             resolve({
    //                 valid: true
    //             })
    //         }
    //     })
    // })

    Validator.extend('join_email', {
        getMessage: (field, params, data) => data && data.message,
        validate: (value, args) => new Promise(resolve => {
            if (!Rules.email(value)) {
                resolve({
                    valid: false,
                    data: { message: i18n.t('common.VALID_EMAIL') }
                })
            } else {
                resolve({
                    valid: true
                })
            }
        })
    })

    // mypage에서 비밀번호 변경할 때
    Validator.extend('check_password', {
        getMessage: (field, params, data) => data && data.message,
        validate: (value, args) => new Promise(resolve => {

        })
    })
}
