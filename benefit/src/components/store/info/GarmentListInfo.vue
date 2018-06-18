<template>
    <div class="garment-info list" @click="clickItem(item)">
        <try-it :size="currentSize" :colorway="currentColorway" :id="item.ItemId" />
        <div class="garment-info-box">
            <garment-name-price :styleName="item.StyleNumber" :price="item.info.price"/>
            <garment-size :key="item.ItemId" @size="updateSize" :isclick="true" :item="item.info.grading"/>
            <garment-colorway @colorway="updateColorway" :colorways="item.Colorways"/>
        </div>
    </div>
</template>

<script>
    import GarmentColorway from './GarmentColorway.vue'
    import GarmentSize from './GarmentSize.vue'
    import GarmentNamePrice from './GarmentNamePrice.vue'
    import TryIt from './TryIt.vue'

    export default {
        components: {
            TryIt,
            GarmentNamePrice,
            GarmentSize,
            GarmentColorway
        },
        name: 'GarmentListInfo',
        data() {
            return {
                name: 'GarmentListInfo',
                currentColorway: -1,
                currentSize: -1
            }
        },
        props: [
            'item'
        ],
        methods: {
            updateColorway(idx) {
                this.currentColorway = idx
            },
            updateSize(idx) {
                this.currentSize = idx
            },
            clickItem(item) {
                this.$router.push({ name: 'StoreView', params: { id: item.ItemId, item } })
            }

        }

    }
</script>

<style lang="scss">
    @import "~scss/vars";
    @import "~scss/responsive";
    .store-container {

        .garment-info.list {
            text-align: center;

            .garment-info-box {
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                padding: 60px 0;
                background-color: rgba(255,255,255,0.5);
                @include media-breakpoint-down(xl) {
                    padding: 30px 0;
                }
                @include media-breakpoint-down(sm) {
                    padding: 15px 0;
                }
                &:before {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    width: 100%;
                    height: 3px;
                    background-color: black;
                    left: 0;
                }
            }



        }
    }
</style>