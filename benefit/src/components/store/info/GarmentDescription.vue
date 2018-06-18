<template>
    <div class="garment-description font-view-desc">
        {{ description }}
    </div>
</template>

<script>
    export default {
        name: 'GarmentDescription',
        data() {
            return {
                name: 'GarmentDescription'
            }
        },
        props: [
            'description'
        ]

    }
</script>

<style lang="scss">
    @import "~scss/vars";
    @import "~scss/responsive";
    .store-container {
        .garment-info {
            &.view {
                .garment-description {
                    margin-bottom: 50px;
                    @include media-breakpoint-down(lg) {
                        margin-bottom: 30px;
                    }
                }
            }
        }
    }
</style>