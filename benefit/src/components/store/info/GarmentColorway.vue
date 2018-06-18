<template>
    <ul class="garment-colorway">
        <li v-for="colorway in colorways" class="garment-colorway-item" :class="{'active': colorway.IndexNo === current}" :style="getColor(colorway)"><a href="#" @click.prevent.stop="changeColor(colorway.IndexNo)"></a></li>
    </ul>
</template>

<script>
    export default {
        name: 'GarmentColorway',
        data() {
            return {
                name: 'GarmentColorway',
                current: -1
            }
        },
        props: [
            'colorways'
        ],
        watch: {
            colorways() {
                this.current = this.colorways[0].IndexNo
                this.$emit('colorway', this.current)
            }
        },
        methods: {
            changeColor(index) {
                console.log('changeColor', index)
                this.current = index
                this.$emit('colorway', this.current)
            },
            getColor(colorway) {
                if (colorway.Name.toLowerCase() === 'white') {
                    return { backgroundColor: colorway.Name /* border: 'solid 1px #ebebed'*/ }
                } else {
                    return { backgroundColor: colorway.Name /* border: 'solid 1px black'*/ }
                }
            }
        },
        mounted() {
            if (this.colorways) {
                this.current = this.colorways[0].IndexNo
                this.$emit('colorway', this.current)
            }
        }

    }
</script>

<style lang="scss">
    @import "~scss/vars";
    @import "~scss/responsive";



    .garment-colorway {
        font-size: 0;

        .view & {
            width: 70%;
        }

        .garment-list-container & {
            margin-top: 20px;
            @include media-breakpoint-down(sm) {
                margin-top: 5px;
            }
        }

        .garment-colorway-item {
            display: inline-block;
            background: #111111 center no-repeat;
            margin: 0 1.5px 5px 1.5px;
            .garment-list-container & {
                border: 0!important;
            }
            &.active {
                a {
                    background-color: rgba(255,255,255,0.1);
                    &:after {
                        background: url("~static/images/store/img-colorchip-select.svg") no-repeat center;
                        content: '';
                        width: 100%;
                        height: 100%;
                        border: 2px solid #000;
                        position: absolute;
                        left: 0;
                        top: 0;
                    }
                }
            }
            a {
                width: 45px;
                height: 15px;
                display: block;
                position: relative;
                @include media-breakpoint-down(sm) {
                    .list & {
                        width: 25px;
                        height: 10px;
                    }
                }
            }
        }
    }

</style>