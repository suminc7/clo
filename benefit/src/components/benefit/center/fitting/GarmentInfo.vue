<template>
    <div class="garment-info">
        <a href="#" @click.prevent="hideInfo" class="close-btn"></a>
        <garment-name-price :styleName="item.StyleNumber" :price="item.Description.price"/>
        <div class="row garment-view-fabric">
            <div class="col-3 title">FABRIC</div>
            <div class="garment-fabric col-9">{{ item.Description.description }}</div>
        </div>
        <div class="row garment-view-size">
            <div class="col-3 title">SIZE</div>
            <garment-size :isclick="false" :item="item.Description.grading" class="col-9"/>
        </div>
        <div class="row garment-view-color">
            <div class="col-3 title">COLOR</div>
            <garment-colorway :isclick="false" :colorways="item.ColorWays" class="col-9"/>
        </div>
        <a class="goto-page" :href="domain + '/store/info/'+item.ItemId">Go to detail page</a>
    </div>
</template>

<script>
    import GarmentSize from '../../../store/info/GarmentSize.vue'
    import GarmentColorway from '../../../store/info/GarmentColorway.vue'
    import GarmentNamePrice from '../../../store/info/GarmentNamePrice.vue'
    export default {
        components: {
            GarmentNamePrice,
            GarmentColorway,
            GarmentSize },
        name: 'GarmentInfo',
        data() {
            return {
                name: 'GarmentInfo',
                domain: window._common_.server.web
            }
        },
        computed: {
            // ...mapGetters('avatar', [
            //     'activeItems'
            // ]),
            item() {
                return this.activeItems[this.activeItems.currentId]
            }
        },
        methods: {
            checkContains(e) {
                if (!document.querySelector('#benefit .garment-info').contains(e.target)) {
                    this.hideInfo()
                }
            }
            // ...mapActions('avatar', [
            //     'hideInfo'
            // ])
        },
        mounted() {
            document.getElementById('benefit').addEventListener('click', this.checkContains)
        },
        destroyed() {
            document.getElementById('benefit').removeEventListener('click', this.checkContains)
        }

    }
</script>

<style lang="scss">

    #benefit {
        .garment-info {
            background-color: hsla(0,0%,95%,.8);
            right: 0;
            position: absolute;
            width: 100%;
            bottom: 0;
            text-align: left;
            padding: 20px;
            &.slide-enter-active, &.slide-leave-active {
                transition: all 0.3s ease-in-out
            }
            &.slide-enter, &.slide-leave-to /* .fade-leave-active below version 2.1.8 */ {
                bottom: -70%
            }

            .close-btn {
                left: auto;
                right: 10px;
            }

            .goto-page {
                text-decoration: underline;
            }

            .row {
                margin-bottom: 5px;
            }

            .garment-name {
                font-size: 15px;
                font-family: 'AvenirLTStd-Medium', sans-serif;
                font-weight: 300;
            }

            .garment-price {
                font-size: 15px;
                font-family: 'AvenirLTStd-Light', sans-serif;
            }

            .garment-size .garment-size-item a {
                width: 20px;
                height: 20px;
                padding: 1px 0;
                font-size: 10px;
            }
            .garment-colorway .garment-colorway-item {
                margin: 3px;
            }
            .garment-colorway .garment-colorway-item a {
                width: 18px;
                height: 13px;
            }
        }
    }


</style>