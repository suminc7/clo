<template>
    <header class="default">
        <div class="head-left">
            <a href="#" class="bi white"></a>
            <transition name="test">
                <div class="nav-box" v-show="isActive">
                    <transition name="fade">
                        <div @click="navToggle" v-show="isActive" class="nav-box-bg"></div>
                    </transition>
                    <transition name="side">
                        <div v-show="isActive" class="nav-box-container">
                            <a href="/" class="bi white"></a>
                            <div class="line"></div>
                            <ul class="side-gnb">
                                <li @click="closeMenu()"><router-link class="font-depth1-menu" :to="{ path: '/about' }">ABOUT</router-link></li>
                                <li @click="closeMenu()"><router-link class="font-depth1-menu" :to="{ path: '/advantages' }">ADVANTAGES</router-link></li>
                                <li @click="closeMenu()"><router-link class="font-depth1-menu" :to="{ path: '/our-expertise' }">OUR EXPERTISE</router-link></li>
                                <li @click="closeMenu()"><router-link class="font-depth1-menu" :to="{ path: '/contact-us' }">CONTACT US</router-link></li>
                                <li @click="closeMenu()"><router-link class="font-depth1-menu" :to="{ path: '/fittingroom' }">FITTING ROOM</router-link></li>
                            </ul>
                            <div class="line"></div>
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
        <ul class="gnb clearfix">
            <li><router-link class="font-menu" :to="{ path: '/about' }">ABOUT</router-link></li>
            <li><router-link class="font-menu" :to="{ path: '/advantages' }">ADVANTAGES</router-link></li>
            <li><router-link class="font-menu" :to="{ path: '/our-expertise' }">OUR EXPERTISE</router-link></li>
            <li><router-link class="font-menu" :to="{ path: '/contact-us' }">CONTACT US</router-link></li>
        </ul>
        <div class="head-right">
            <router-link class="btn-rect md store-btn" :to="{ path: '/fittingroom' }">FITTING ROOM</router-link>
            <user-info/>
        </div>
    </header>
</template>

<script>
    import UserInfo from './UserInfo'

    export default {
        components: { UserInfo },
        name: 'AppHeader',
        data() {
            return {
                name: 'AppHeader',
                isActive: false
            }
        },
        methods: {
            navToggle() {
                this.isActive = !this.isActive
            },
            closeMenu() {
                this.isActive = false
            }
        },
        created() {
        }

    }
</script>

<style lang="scss">
    @import "~scss/vars";
    @import "~scss/responsive";
    header {

        text-align: center;
        position: absolute;
        width: 100%;
        z-index: 9999;

        &.default {
            .side-gnb {
                text-align: left;
                margin: 0 40px;
                .font-depth1-menu {
                    display: inline-block;
                    margin: 15px 0;
                    color: white;
                }
            }

            .line {
                height: 1px;
                background-color: #5d5d5f;
                margin: 30px 20px;
            }
        }

        #nav-button {
            height: 60px;
            width: 60px;
            display: none;
            position: absolute;
            left: 0;
            top: 0;
            @include media-breakpoint-down(md) {
                display: block;
            }
        }
        #nav-icon4 {
            display: none;
            @include media-breakpoint-down(md) {
                display: block;
            }
        }

        .head-left {
            position: absolute;
            left: 0;
            top: 0;
            font-size: 0;
            @include media-breakpoint-down(md) {
                position: relative;
                left: auto;
                top: auto;
            }
            .bi {
                margin: 34px 30px;
                @include media-breakpoint-down(md) {
                    margin: 24px 0;
                }
            }
        }

        .gnb {
            float: none;
            display: inline-block;
            margin: 0 auto;
            @include media-breakpoint-down(md) {
                display: none;
            }
            li {
                float: left;
                margin: 34px 30px;
            }
        }

        .head-right {
            position: absolute;
            top: 0;
            right: 0;
            padding: 20px 30px 20px 0;
            @include media-breakpoint-down(md) {
                display: none;
            }
            .store-btn {
                margin-right: 20px;
            }
            .signin {
                margin: 14px 0;
                display: inline-block;
            }
        }
    }

</style>