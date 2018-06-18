<template>
    <div>
        <div class="garment-name">{{ styleName }}</div>
        <div class="garment-price">$ {{ price }}</div>
    </div>
</template>

<script>
    export default {
        name: 'GarmentNamePrice',
        data() {
            return {
                name: 'GarmentNamePrice'
            }
        },
        props: [
            'styleName',
            'price'
        ]

    }
</script>

<style lang="scss">
    @import "~scss/vars";
    @import "~scss/responsive";
    @import "~scss/font-style";
    .store-container {

        .garment-info {
            &.list {
                .garment-name {
                    @extend .font-itemname;
                }
                .garment-price {
                    @extend .font-price;
                }
            }
            &.view {
                .garment-name {
                    @extend .font-view-itemname;
                }
                .garment-price {
                    @extend .font-view-price;
                }
            }
        }

        .garment-info {
            .garment-name {
                margin-bottom: 20px;
                text-transform: uppercase;
                @include media-breakpoint-down(xl) {
                    margin-bottom: 15px;
                }
                @include media-breakpoint-down(sm) {
                    margin-bottom: 10px;
                }
            }
            .garment-price {
                margin-bottom: 20px;
                @include media-breakpoint-down(xl) {
                    margin-bottom: 15px;
                }
                @include media-breakpoint-down(sm) {
                    margin-bottom: 10px;
                }
            }
        }

        &.view {
            .garment-name {
                text-align: center;
                margin-bottom: 20px;
            }
            .garment-price {
                text-align: center;
                margin-bottom: 30px;
            }
        }
    }

</style>