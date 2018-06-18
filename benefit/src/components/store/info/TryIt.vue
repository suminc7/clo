<template>
    <a href="#" @click.prevent.stop="tryIt" class="tryit"><span class="icon-try white"></span><span class="text">TRY IT ON</span></a>
</template>

<script>
    export default {
        name: 'TryIt',
        data() {
            return {
                name: 'TryIt'
            }
        },
        props: [
            'id',
            'colorway',
            'size'
        ],
        methods: {
            tryIt() {
                console.log('tryIt', this.colorway, this.size)
                this.$store.dispatch('garment/tryon', { itemId: this.id, colorway: this.colorway, grading: this.size })
            }
        }

    }
</script>

<style lang="scss">
    @import "~scss/vars";
    @import "~scss/responsive";
    .store-container {

        .garment-list-container {
            .tryit {
                background: url("~static/images/store/btn-tryiton-2.svg") no-repeat center;
                background-size: contain;
                width: 70px;
                height: 50px;
                -webkit-transform: translateX(-50%);
                -ms-transform: translateX(-50%);
                transform: translateX(-50%);
                position: absolute;
                bottom: 3px;
                left: 50%;
                z-index: 10;
                .icon-try {
                    display: none;
                }
                .text {
                    display: none;
                }
                @include media-breakpoint-down(lg) {
                    background-size: contain;
                    width: 42px;
                    height: 30px;
                }
            }
        }

        .garment-view-container {
            .tryit {
                &.up {
                    display: none;
                }
                @include media-breakpoint-down(sm) {
                    &.up {
                        display: inline-block;
                        margin-top: 0;
                        margin-bottom: 40px;
                    }
                    &.down {
                        display: none;
                    }
                }
                .icon-try {
                    width: 20px;
                    height: 24px;
                    vertical-align: middle;
                    margin-right: 10px;
                    @include media-breakpoint-down(lg) {
                        width: 15px;
                        height: 18px;
                    }
                }
                .text {
                    vertical-align: middle;
                }
                margin-top: 70px;
                font-size: 12px;
                font-weight: 500;
                color: white;
                width: 180px;
                padding: 6px 0 6px 0;
                display: inline-block;
                border-radius: 100px;
                background-color: $scarlet;
                text-align: center;
                letter-spacing: 1px;
                @include media-breakpoint-down(lg) {
                    width: 150px;
                    padding: 8px 0 8px 0;
                    font-size: 10px;
                    margin-top: 50px;
                }
            }
        }

    }

</style>