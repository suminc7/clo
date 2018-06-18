<template>
    <div class="store-view-image col-md-6 col-lg-5">
        <div class="store-view-image-box embed-responsive embed-responsive-1by1" :style="{backgroundImage: `url(${item && item.ThumbnailPath})`}"></div>
    </div>
</template>

<script>
    export default {
        name: 'StoreViewImage',
        data() {
            return {
                name: 'StoreViewImage'
            }
        },
        props: [
            'item'
        ]

    }
</script>

<style lang="scss">
    @import "~scss/vars";
    @import "~scss/responsive";
    .store-container {
        .garment-view-container {
            @include media-breakpoint-down(sm) {
                padding-left: 0;
                padding-right: 0;
            }
            .store-view-image-box {
                background: #f3f4f5 no-repeat center;
                background-size: contain;
                &.embed-responsive-1by1::before {
                    /*padding-top: 117%;*/
                }
            }
        }
    }
</style>