<template>
    <header class="store clearfix">
        <div class="head-left">
            <a href="/" class="bi white"></a>
            <transition name="test">
                <div class="nav-box" v-show="isActive">
                    <transition name="fade">
                        <div @click="navToggle" v-show="isActive" class="nav-box-bg"></div>
                    </transition>
                    <transition name="side">
                        <div v-show="isActive" class="nav-box-container">
                            <a href="/" class="bi white"></a>
                            <template v-if="userInfo.userName">
                                <a href="#" @click.prevent="onUserInfoMenu" class="userinfo-btn lg">{{ userInfo.userName.substring(0,1) }}</a>
                            </template>
                            <template v-else>
                                <a href="#" @click.prevent="login" class="userinfo-btn lg sm">{{ 'SIGN IN' }}</a>
                            </template>
                            <side-nav/>
                        </div>
                    </transition>
                </div>
            </transition>
            <div id="nav-icon4" :class="{open: isActive}">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <a href="#" :class="{open: isActive}" id="nav-button" @click.prevent="navToggle"></a>
        </div>
        <div class="store-title">FITTING ROOM</div>
        <div class="head-right">
            <user-info :isStore="true" />
        </div>
    </header>
</template>

<script>
    import { mapGetters } from 'vuex'
    import UserInfo from './UserInfo'
    import SideNav from '../store/SideNav'

    export default {
        components: {
            SideNav,
            UserInfo },
        name: 'StoreHeader',
        data() {
            return {
                name: 'StoreHeader',
                isActive: false
            }
        },
        computed: {
            ...mapGetters('account', [
                'userInfo'
            ])
        },
        methods: {
            navToggle() {
                this.isActive = !this.isActive
            },
            login() {
                this.$store.dispatch('popup/onPopup', { type: 'login' })
            }
        }

    }
</script>

<style lang="scss">
    @import "~scss/vars";
    @import "~scss/responsive";
    header {
        #nav-icon4 {
            z-index: 99999;
            &.open {
                position: fixed;
            }
        }
        #nav-button {
            z-index: 99999;
            &.open {
                position: fixed;
            }
        }
        .nav-box {
            position: fixed;
            z-index: 9999;
            width: 100%;
            height: 100%;
            left: 0;
            top: 0;
            @include media-breakpoint-down(md) {
                display: block;
            }
            .nav-box-bg {
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                z-index: 1;
                background-color: rgba(0, 0, 0, 0.65);
            }
            .nav-box-container {
                display: none;
                position: absolute;
                left: 0;
                top: 0;
                z-index: 2;
                width: 280px;
                height: 100%;
                background-color: $dark-grey;
                box-shadow: 10px 0 10px 0 rgba(0, 0, 0, 0.2);
                .side-nav {
                    display: inline-block;
                }
                .side-nav-list {
                    text-align: left;
                    padding: 0 30px;
                    .brand-list {
                        color: white;
                    }
                }
                @include media-breakpoint-down(md) {
                    display: block;
                    .bi {
                        margin: 70px 0 0 0;
                    }
                    .userinfo-btn {
                        margin: 30px auto 50px auto;
                    }
                }
            }
        }

        &.store {
            background-color: $dark-grey;
            .head-left {
                > .bi {
                    margin: 28px 30px;
                    @include media-breakpoint-down(md) {
                        display: none;
                    }
                }
            }
            .head-right {
                padding: 14px 30px 14px 0;
            }

            .store-title {
                font-size: 22px;
                letter-spacing: 5px;
                color: #ffffff;
                padding: 23px 0;
                @include media-breakpoint-down(lg) {
                    font-size: 18px;
                    letter-spacing: 4px;
                }
            }
        }
    }

</style>