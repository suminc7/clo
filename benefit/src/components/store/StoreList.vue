<template>
    <div class="garment-list-container col-lg-9">
        <ul class="garment-list clearfix">
            <li v-if="items.length === 0">{{ listLoadingStatus }}</li>
            <li
                @touchstart="mouseEnter(index)"
                @mouseenter="mouseEnter(index)"
                @mouseleave="mouseLeave(-1)"
                v-for="(item, index) in items"
                :class="{active: targetIdx === index, even: index % 2 === 0}"
                class="garment-list-item col-md-4 col-6"
            >
                <div class="garment-list-box">
                    <div class="garment-item embed-responsive embed-responsive-1by1" :style="{backgroundImage: `url(${item.ThumbnailPath})`}"></div>
                    <transition name="fade">
                        <garment-info :item="item" v-show="targetIdx === index"/>
                    </transition>
                </div>
            </li>
        </ul>
    </div>

</template>

<script>
    import { mapActions, mapState } from 'vuex'
    import GarmentInfo from './info/GarmentListInfo'
    export default {
        components: {
            GarmentInfo
        },
        name: 'StoreList',
        data() {
            return {
                name: 'StoreList',
                isGarmentInfo: false,
                targetIdx: null
            }
        },
        computed: {
            ...mapState('store', [
                'items',
                'brandItems',
                'listLoadingStatus'
            ])
        },
        methods: {
            ...mapActions('store', [
                'structure',
                'getItems'
            ]),
            changeRoom() {
                console.log('changeRoom')
            },
            mouseEnter(idx) {
                this.targetIdx = idx
            },
            mouseLeave(idx) {
                this.targetIdx = idx
            }
        },
        created() {
        }

    }
</script>

<style lang="scss">
    @import "~scss/vars";
    @import "~scss/responsive";
    .store-container {
        .garment-list-container {
            float: left;
            @include media-breakpoint-down(sm) {
                padding-left: 0;
                padding-right: 0;
            }
        }
        .garment-list {
            .garment-list-box {
                position: relative;
            }
            .garment-list-item {
                float: left;
                margin-bottom: 20px;
                &.even {
                    .garment-item {
                        background-color: #f3f4f5;
                    }
                }
                .garment-item {
                    background: no-repeat center;
                    background-size: contain;
                    &.embed-responsive-1by1::before {
                        /*padding-top: 120%;*/
                    }
                }
                @include media-breakpoint-down(sm) {
                    .garment-item {
                        background-color: #f3f4f5;
                    }
                }
            }
        }
    }


</style>