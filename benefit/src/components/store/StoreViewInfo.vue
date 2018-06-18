<template>
    <div class="store-view-info col-md-6 col-lg-4">
        <div class="store-view-info-box">
            <garment-view-info :item="item"/>
        </div>
    </div>
</template>

<script>
    import GarmentViewInfo from './info/GarmentViewInfo.vue'

    export default {
        components: {
            GarmentViewInfo
        },
        name: 'StoreViewInfo',
        data() {
            return {
                name: 'StoreViewInfo'
            }
        },
        props: [
            'item'
        ]

    }
</script>

<style lang="scss">
    .store-container {
        .store-view-info-box {
            /*height: 100px;*/
            /*background-color: #ccc;*/
        }
    }
</style>