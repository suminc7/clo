export default [
    {
        path: '/login',
        name: 'Login',
        meta: { banner: false, auth: -1, mobile: 0 },
        component: r => require.ensure([], () => r(require('../components/account/Login.vue')), 'account')
    },
    {
        path: '/logout',
        name: 'Logout',
        meta: { banner: false },
        component: r => require.ensure([], () => r(require('../components/account/Logout.vue')), 'account')
    },
    {
        path: '/join',
        name: 'Join',
        meta: { banner: false, auth: -1 },
        component: r => require.ensure([], () => r(require('../components/account/Join.vue')), 'account')
    },
    {
        path: '/account/identify',
        name: 'Identify',
        meta: { banner: false, auth: -1 },
        component: r => require.ensure([], () => r(require('../components/account/Identify.vue')), 'account')
    },
    {
        path: '/account/reset',
        name: 'Reset',
        meta: { banner: false },
        component: r => require.ensure([], () => r(require('../components/account/Reset.vue')), 'account')
    },
    {
        // 로그인 안되있어도 verify 가능
        path: '/account/emailverify',
        name: 'Verified',
        meta: { banner: false },
        component: r => require.ensure([], () => r(require('../components/account/EmailVerify.vue')), 'account')
    },
    {
        path: '/account/emailpasswordverify',
        name: 'EmailPasswordVerified',
        meta: { banner: false },
        component: r => require.ensure([], () => r(require('../components/account/EmailPasswordVerify.vue')), 'account')
    },
    {
        path: '/account/confirmemail', // 회원가입 후, 이메일 입력 받은 후 redirect 된다. (로그인 했을때, 안했을 때 모두 접근 가능해야함)
        name: 'ConfirmEmail',
        meta: { banner: false },
        component: r => require.ensure([], () => r(require('../components/account/ConfirmEmail.vue')), 'account')
    },
    {
        path: '/account/confirmresetpassword',
        name: 'ConfirmResetPassword',
        meta: { banner: false, auth: -1 },
        component: r => require.ensure([], () => r(require('../components/account/ConfirmResetPassword.vue')), 'account')
    },
    {
        path: '/account/getemail',
        name: 'GetEmail',
        meta: { banner: false, auth: 1 },
        component: r => require.ensure([], () => r(require('../components/account/GetEmail.vue')), 'account')
    },
    {
        path: '/account/deleteaccount',
        name: 'deleteAccount',
        meta: { banner: false, auth: 1 },
        component: r => require.ensure([], () => r(require('../components/account/DeleteAccount.vue')), 'account')
    },
    {
        path: '/account/deleteaccountconfirm',
        name: 'deleteAccountConfirm',
        meta: { banner: false, auth: 2 },
        component: r => require.ensure([], () => r(require('../components/account/DeleteAccountConfirm.vue')), 'account')
    },
    {
        path: '/account/deleteaccountcomplete',
        name: 'deleteAccountComplete',
        meta: { banner: false },
        component: r => require.ensure([], () => r(require('../components/account/DeleteAccountComplete.vue')), 'account')
    }
]
