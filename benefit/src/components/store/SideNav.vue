<template>
    <div class="side-nav col-lg-2">
        <div class="prev"></div>
        <ul class="side-nav-list">
            <li v-if="!brandItems.length" class="brand-list font-depth1-menu">BENEFIT</li>
            <li v-if="item.SpaceName.toLowerCase().indexOf('benefit') > -1" v-for="item in brandItems" class="brand-list font-depth1-menu">
                {{ item.SpaceName.toUpperCase() }}
                <ul v-if="item.HasChild">
                    <li class="child-list" v-for="childItem in item.Children[0].Children" :class="{ active: String(childItem.SpaceId) === String($route.params.roomId) }">
                        <a href="#" @click.prevent="changeList(childItem)" class="font-depth2-menu">{{ childItem.SpaceName.toUpperCase() }}</a>
                    </li>
                </ul>
            </li>
            <li v-if="brandItems.length && userInfo.isLogin" class="brand-list btn-get-closet font-depth1-menu">
                MY CLOSET
                <a href="#" @click.prevent="onPopup" class="closet-btn"><img src="~static/images/common/favicon.svg"/></a>
                <ul>
                    <li class="child-list" :class="{ active: String(myClosetItem.SpaceId) === String($route.params.roomId) }">
                        <a href="#" @click.prevent="changeList(myClosetItem, myClosetItem.SpaceId)" class="font-depth2-menu">{{ myClosetItem.SpaceName }}</a>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
    import { mapActions, mapState } from 'vuex'
    export default {
        name: 'SideNav',
        data() {
            return {
                name: 'SideNav',
                publicRoomData: null
            }
        },
        props: [
            'item'
        ],

        computed: {
            ...mapState('store', [
                'brandItems',
                'myClosetItem'
            ]),
            ...mapState('account', [
                'userInfo'
            ]),
            currentRoomName() {
                return this.$route.params.roomName
            }
        },
        methods: {
            ...mapActions('store', [
                'getItems',
                'setMyClosetItem'
            ]),
            changeList(item, myClosetId) {
                console.log('myClosetId=============', myClosetId)

                const { SpaceId } = item
                const route = { name: 'StoreList', params: { roomId: SpaceId, myClosetId } }
                this.$router.push(route)
            },
            onPopup() {
                this.$store.dispatch('popup/onPopup', { type: 'selectWorkroom' })
            }

        }
    }
</script>

<style lang="scss">
    @import "~scss/vars";
    @import "~scss/responsive";
    .side-nav {
        text-align: right;
        .btn-get-closet {
            margin-top: 30px;
            display: inline-block;
            text-transform: uppercase;
        }
        @include media-breakpoint-down(md) {
            display: none;
        }
        .side-nav-list {
            .closet-btn {
                display: inline-block;
                vertical-align: middle;
            }
            text-align: right;
            .brand-list {
                margin-top: 45px;
                &:first-child {
                    margin-top: 0;
                }
            }
            .font-depth1-menu {
                color: $dark-grey;
            }
            .child-list {
                margin-top: 22px;
                &.active {
                    a {
                        color: #55d7e6;
                    }
                }
            }
        }

    }
</style>