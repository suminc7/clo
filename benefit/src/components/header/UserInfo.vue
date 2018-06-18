<template>
    <div class="userinfo">
        <template v-if="$store.state.account.userInfo.isLogin">
            <a href="#" v-if="isStore" @click.prevent="onUserInfoMenu" class="userinfo-btn">{{ userInfo.userName.substring(0,1) }}</a>
            <div v-show="isUserInfo" class="userinfo-box">
                <a href="#" @click.prevent="offUserInfoMenu" class="btn-close icon-input close-grey"></a>
                <a href="#" @click.prevent="onUserInfoMenu" class="userinfo-btn lg">{{ userInfo.userName.substring(0,1) }}</a>
                <div class="username font-username">{{ userInfo.userName }}</div>
                <div class="line"></div>
                <ul>
                    <!--<li><a href="#" class="font-userinfo">ACCOUNT</a></li>-->
                    <li><a href="#" @click.prevent="$store.dispatch('account/logout')" class="font-userinfo">SIGN OUT</a></li>
                </ul>
            </div>
        </template>
        <template v-else>
            <a href="#" v-if="isStore" @click.prevent="onLogin" class="font-menu signin">SIGN IN</a>
        </template>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default {
        name: 'UserInfo',
        data() {
            return {
                name: 'UserInfo',
                isUserInfo: false
            }
        },
        computed: {
            ...mapGetters('account', [
                'userInfo'
            ])
        },
        props: ['isStore'],
        watch: {
            userInfo() {
                if (!this.userInfo.isLogin) {
                    this.isUserInfo = false
                }
            }
        },
        methods: {
            onLogin() {
                // const route = { path: '/store' }
                // this.$router.push(route)
                this.$store.dispatch('popup/onPopup', { type: 'login' })
            },
            onUserInfoMenu() {
                this.isUserInfo = true
            },
            offUserInfoMenu() {
                this.isUserInfo = false
            }
        }

    }
</script>

<style lang="scss">
    .userinfo {
        vertical-align: middle;
        display: inline-block;
        .signin {
            margin: 28px 30px;
        }
        .line {
            height: 1px;
            margin: 23px 0;
            background-color: #e5e6eb;
        }
        .username {
            margin-top: 10px;
        }

        .userinfo-box {
            width: 220px;
            border-radius: 3px;
            background-color: #ffffff;
            box-shadow: 1px 2px 4px 0 rgba(107, 107, 107, 0.5);
            position: absolute;
            right: 30px;
            top: 80px;
            padding: 30px 20px;
        }
    }
    .userinfo-btn {
        text-transform: uppercase;
        width: 40px;
        height: 40px;
        background-color: #353537;
        border-radius: 20px;
        display: block;
        font-size: 20px;
        font-weight: 100;
        text-align: center;
        color: #ffffff;
        padding: 10px 0;
        &.lg {
            width: 70px;
            height: 70px;
            background-color: #353537;
            border-radius: 35px;
            font-size: 36px;
            margin: 0 auto;
            padding: 19px 0 15px 0;
        }
        &.sm {
            font-size: 10px;
            padding: 32px 0 28px 0;
            letter-spacing: 1.5px;
        }
    }
</style>