<template>
    <ul v-if="item" class="garment-size">
        <li v-for="grading in item" :class="{ active: grading.indexNo === currentNum }" class="garment-size-item">
            <a class="font-size" href="#" @click.prevent.stop="changeSize(grading.indexNo)">{{ grading.name }}</a>
        </li>
    </ul>
</template>

<script>
    export default {
        name: 'GarmentSize',
        data() {
            return {
                name: 'GarmentSize',
                currentNum: -1
            }
        },
        props: [
            'item',
            'isclick'
        ],
        watch: {
            item() {
                this.currentNum = this.item[0].indexNo
                this.$emit('size', this.currentNum)
            }
        },
        methods: {
            changeSize(index) {
                if (!this.isclick) {
                    return
                }
                console.log('changeSize', index)
                this.currentNum = index
                this.$emit('size', this.currentNum)
            }
        },
        mounted() {
            if (this.item) {
                this.currentNum = this.item[0].indexNo
                this.$emit('size', this.currentNum)
            }
        }

    }
</script>

<style lang="scss">
    @import "~scss/vars";
    @import "~scss/responsive";
    .garment-size {
        .garment-size-item {
            text-align: center;
            display: inline-block;
            margin-bottom: 5px;
            &.active {
                a {
                    color: white;
                    background-color: $scarlet;
                }
            }
            a {
                margin: 0 5px;
                color: $slate-grey;
                background-color: white;
                padding: 9px 0;
                display: block;
                width: 30px;
                height: 30px;
                border: 1px solid rgba(0,0,0,0.1);
                @include media-breakpoint-down(xs) {
                    .list & {
                        width: 20px;
                        height: 20px;
                        padding: 5px 0;
                        margin: 0 1.5px;
                    }

                }
            }
        }
    }
</style>