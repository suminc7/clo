<template>
    <div class="garment-view-container pr-md-0 pl-md-0 col-lg-9 float-left">
        <store-view-image class="col-lg-7 float-left" :item="item"/>
        <store-view-info class="col-lg-5 float-left" :item="item"/>
    </div>
</template>

<script>
    import SideNav from './SideNav.vue'
    import StoreViewImage from './StoreViewImage'
    import StoreViewInfo from './StoreViewInfo'
    import api from '../../api/closet'
    import { parseItem } from '../../utils/item'

    export default {
        components: {
            StoreViewInfo,
            StoreViewImage,
            SideNav
        },

        name: 'StoreView',
        data() {
            return {
                name: 'StoreView',
                item: null
            }
        },
        created() {
            api.item({ itemId: this.$route.params.id })
                .then(response => {
                    const item = parseItem(response.data)
                    console.log('item', item)
                    this.item = item
                })
        }

    }
</script>

<style lang="scss">
    @import "~scss/vars";
    @import "~scss/responsive";
    .store-container {
        .garment-view-container {

        }
    }
</style>