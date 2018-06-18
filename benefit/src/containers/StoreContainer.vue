<template>
    <div>
        <store-header/>
        <div class="container store-container pl-0 pr-0 clearfix">
            <side-nav class="float-left"/>
            <router-view/>
            <benefit/>
            <popup/>
        </div>
        <app-footer/>
    </div>
</template>

<script>
    import AppFooter from '../components/footer/AppFooter'
    import StoreHeader from '../components/header/StoreHeader'
    import { mapActions, mapState } from 'vuex'
    import SideNav from '../components/store/SideNav'
    import Benefit from '../components/benefit/Benefit'
    import Popup from '../components/popup/Popup'

    export default {
        components: {
            Popup,
            Benefit,
            SideNav,
            StoreHeader,
            AppFooter
        },
        name: 'StoreContainer',
        data() {
            return {
                name: 'StoreContainer'
            }
        },
        watch: {
            $route() {
                console.log('**************************  this.$route.params', this.$route.params)
                if (this.$route.name === 'StoreList' || this.$route.name === 'StoreContainer') {
                    if (this.$route.params.roomId > 0) {
                        this.getItems({ roomId: this.$route.params.roomId, route: true })
                    } else {
                        this.routeFirst()
                    }
                }
            }
        },
        computed: {
            ...mapState('store', [
                'brandItems'
            ])
        },
        methods: {
            ...mapActions('store', [
                'mystructure',
                'structure',
                'getItems'
            ]),
            routeFirst() {
                if (this.brandItems[0].Children) {
                    const { SpaceId } = this.brandItems[0].Children[0].Children[0]
                    console.log('SpaceId', SpaceId)
                    const route = { name: 'StoreList', params: { roomId: SpaceId } }
                    this.$router.replace(route)
                }
            }
        },
        created() {
            const call = async() => {
                await this.structure()
                if (this.$route.name === 'StoreList' || this.$route.name === 'StoreContainer') {
                    if (parseInt(this.$route.params.roomId) > 0) {
                        await this.getItems({ roomId: this.$route.params.roomId })
                    } else {
                        this.routeFirst()
                    }
                    if (this.$store.state.account.userInfo.isLogin) this.mystructure()
                }
            }
            call().then(() => {})
        }
    }
</script>

<style lang="scss">
    @import "~scss/responsive";

    .store-container {
        min-height: 1000px;
        background-color: white;
        padding-top: 80px;

        @include media-breakpoint-up(md) {
            padding-top: 130px;
        }

        .container {
            margin-top: 40px;
            @include media-breakpoint-up(md) {
                margin-top: 80px;
            }
        }

    }
</style>