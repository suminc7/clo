<template>
    <div id="benefit">
        <a href="#" v-show="!activated" @click.prevent="activate(true)" class="tryit-benefit"></a>
        <!--<a href="#" @click.prevent.stop="tryIt" class="tryit"><div class="title">TRY<div class="sub"> IT ON</div></div></a>-->
        <benefit-container v-show="activated"/>
    </div>
</template>

<script>
    import BenefitContainer from './BenefitContainer'
    import { mapGetters, mapActions } from 'vuex'

    export default {
        components: { BenefitContainer },
        name: 'Benefit',
        data() {
            return {

            }
        },
        computed: {
            ... mapGetters([
                'activated'
            ])
        },
        methods: {
            ... mapActions([
                'activate',
                'connection'
            ])
        },
        created() {
            // this.connection()
        },
        mounted() {

        }
    }
</script>

<style lang="scss">
    @import "~scss/vars";
    @import "~scss/responsive";
    @import "~scss/icons";
    #benefit {
        position: fixed;
        right: 0;
        top: 0;
        z-index: 999;
        .tryit-benefit {
            @extend .icon-tryiton;
            position: absolute;
            right: 0;
            top: 160px;
        }
    }
</style>
