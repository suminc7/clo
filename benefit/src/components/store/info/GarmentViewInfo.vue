<template>
    <div class="garment-info view">
        <garment-name-price :styleName="item && item.StyleNumber" :price="item && item.info.price"/>
        <garment-description :description="item && item.info.description"/>
        <try-it class="up" :size="currentSize" :colorway="currentColorway" :id="item && item.ItemId" />
        <div class="garment-view-fabric">
            <div class="col-3 pr-0 pl-0 title font-stitle">FABRIC</div>
            <div class="garment-fabric font-view-desc">{{ item && item.info.fabric }}</div>
        </div>
        <div class="garment-view-size">
            <div class="col-3 pr-0 pl-0 title font-stitle">SIZE</div>
            <garment-size :key="123" @size="updateSize" :isclick="true" :item="item && item.info.grading" />
        </div>
        <div class="garment-view-color">
            <div class="col-3 pr-0 pl-0 title font-stitle">COLOR</div>
            <garment-colorway @colorway="updateColorway" :colorways="item && item.Colorways" />
        </div>
        <try-it class="down" :size="currentSize" :colorway="currentColorway" :id="item && item.ItemId" />
    </div>
</template>

<script>
    import GarmentNamePrice from './GarmentNamePrice.vue'
    import TryIt from './TryIt.vue'
    import GarmentSize from './GarmentSize.vue'
    import GarmentColorway from './GarmentColorway.vue'
    import GarmentDescription from './GarmentDescription.vue'

    export default {
        components: {
            GarmentDescription,
            GarmentColorway,
            GarmentSize,
            TryIt,
            GarmentNamePrice
        },
        name: 'GarmentViewInfo',
        data() {
            return {
                name: 'GarmentViewInfo',
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
            }
        }

    }
</script>

<style lang="scss">
    @import "~scss/vars";
    @import "~scss/responsive";
    .store-container {

        .garment-info {
            &.view {
                text-align: left;
                padding: 40px 0 0 40px;
                @include media-breakpoint-down(sm) {
                    text-align: center;
                    padding: 40px 0 60px 0;
                }
            }

            .garment-view-fabric {
                margin-bottom: 25px;
                .title, .garment-fabric {
                    display: inline-block;
                }
                @include media-breakpoint-down(sm) {
                    .title {
                        display: block;
                        margin: 0 auto 5px auto;
                    }
                }
            }
            .garment-view-size {
                margin-bottom: 25px;
                .title, .garment-size {
                    display: inline-block;
                }
                @include media-breakpoint-down(sm) {
                    .title {
                        display: block;
                        margin: 0 auto 10px auto;
                    }
                }
            }
            .garment-view-color {
                .title, .garment-colorway {
                    display: inline-block;
                }
                .garment-colorway {
                    vertical-align: middle;
                }
                @include media-breakpoint-down(sm) {
                    .title {
                        display: block;
                        margin: 0 auto 10px auto;
                    }
                }
            }

        }
    }
</style>