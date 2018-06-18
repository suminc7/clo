<template>
    <ul class="active-images">
        <li v-for="(item,n) in reverseItem" :key="n" class="active-images-list" :class="{}">
            <div
               class="active-images-item"
               :class="{'hide': item.isHide, 'active': activeNum === n}">
                <a href="#" @click.prevent="active(n)" class="active-images-item-box" :style="'background-image: url('+item.thumbnail+')'"></a>
                <div class="action-btn-box">
                    <a href="#" @click.prevent="hideGarment(item.layer)" class="action-btn show"></a>
                    <a href="#" @click.prevent="removeGarment(item.layer)" class="action-btn delete"></a>
                    <a href="#" @click.prevent="info(item.itemId)" class="action-btn info"></a>
                </div>
            </div>
        </li>
    </ul>
</template>
<!--@click.prevent="hide(item.layer)"-->
<script>
import { mapActions, mapGetters } from 'vuex'
import _reverse from 'lodash/reverse'
export default {
    name: 'ActiveImages',
    data() {
        return {
            name: 'ActiveImages',
            activeNum: -1
        }
    },
    computed: {
        reverseItem() {
            return _reverse([...this.garments])
        },
        ... mapGetters('garment', [
            'garments'
        ])
    },
    methods: {
        info(itemId) {
            this.active(-1)
            this.showInfo(itemId)
        },
        ... mapActions('garment', [
            'hideGarment',
            'removeGarment'
        ]),
        active(n) {
            console.log('active', n)
            this.activeNum = n
        },
        checkContains(e) {
            if (this.activeNum > -1 && !document.querySelector('.active-images').contains(e.target)) {
                this.active(-1)
            }
        }
    },
    mounted() {
        // this.fetchThumbnails({})
        document.getElementById('benefit').addEventListener('click', this.checkContains)
    },
    destroyed() {
        document.getElementById('benefit').removeEventListener('click', this.checkContains)
    }
}
</script>

<style lang="scss">
    @import "~scss/benefit/mixins";
    #benefit {
        .fitting-tab {
            .active-images {
                position: absolute;
                left: -4px;
                top: 25px;
                .active-images-list {
                    position: relative;
                    .actions {
                        display: none;
                        position: absolute;
                        top: 0;
                        right: -27px;
                        a:first-child {
                            margin-bottom: 5px;
                        }
                    }
                    .menu-btn {
                        width: 22px;
                        height: 22px;
                        border: 1px solid #ddd;
                        background-size: 8px;
                        border-radius: 3px;
                        display: block;
                        @media(min-width: 1024px){
                            &:hover {
                                background-color: #aaa;
                                border-color: #aaa;
                            }
                        }

                        &.up {
                            &:before {
                                -ms-transform: rotate(180deg); /* IE 9 */
                                -webkit-transform: rotate(180deg); /* Safari */
                                transform: rotate(180deg);
                            }
                        }
                    }

                    .close-btn {
                        background: #ddd url(../~static/images/benefit/fitting/cancel.svg) no-repeat 50%;
                        background-size: 8px;
                    }
                    .hide-btn {
                        background: #ddd url(../~static/images/benefit/fitting/confirm.svg) no-repeat 50%;
                        background-size: 10px;
                    }
                    .change-btn {
                        border-radius: 24px;
                        position: absolute;
                        right: 17px;
                        top: -10px;
                        width: 18px;
                        height: 18px;
                        background: rgba(96, 125, 139, 0.5) url(../~static/images/benefit/fitting/compare.svg) no-repeat 50%;
                        background-size: 12px;
                        @include transition(All 0.3s ease);
                        -ms-transform: rotate(90deg);
                        -webkit-transform: rotate(90deg);
                        transform: rotate(90deg);
                        &:hover {
                            background-color: rgba(96, 125, 139, 0.8);
                            /*-ms-transform: rotate(180deg);*/
                            /*-webkit-transform: rotate(180deg);*/
                            /*transform: rotate(180deg);*/
                        }
                    }
                }
                .active-images-item {
                    /*box-shadow: 0 1px 3px 0 rgba(0,0,0,.1);*/
                    border: 1px solid #eee;
                    display: block;
                    width: 54px;
                    height: 50px;
                    background-color: #fff;
                    margin-bottom: 5px;
                    border-radius: 5px;
                    overflow: hidden;
                    @include transition(All 0.3s ease);
                    &.active {
                        width: 140px;
                    }

                    .active-images-item-box {
                        width: 54px;
                        height: 50px;
                        background: #fff no-repeat 5px center;
                        background-size: auto 90%;
                        float: left;
                    }


                    .action-btn-box {
                        width: 130px;
                        padding: 12px 0 12px 0;
                        .action-btn {
                            float: left;
                            display: block;
                            width: 25px;
                            height: 25px;
                            &.show {
                                background: url(../~static/images/benefit/fitting/activeimages/show_icon.png) no-repeat 50%;
                            }
                            &.delete {
                                background: url(../~static/images/benefit/fitting/activeimages/delete_icon.png) no-repeat 50%;
                            }
                            &.info {
                                background: url(../~static/images/benefit/fitting/activeimages/info_icon.png) no-repeat 50%;
                            }
                        }
                    }


                    &.enable {
                        /*border: 1px solid #999;*/
                        background-color: #f1f1f1;
                        /*margin-left: 5px;*/
                        & + .actions {
                            display: inline-block;
                        }
                    }
                    &.hide {

                        .active-images-item-box {
                            opacity: 0.2;
                        }

                    }
                    &.bottom {
                        background-position: center 90%;
                        /*background-position: center 75%;*/
                    }
                }
            }
        }
    }
</style>