<template>
    <div @click.self="closePopup" v-if="currentPopup" class="benefit-popup">
        <measure-popup v-if="currentPopup === types.MEASURE"/>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'
    import MeasurePopup from './MeasurePopup'
    import * as types from '../../../store/popup-types'
    export default {
        components: { MeasurePopup },
        name: 'PopupView',
        data() {
            return {
                name: 'PopupView',
                types
            }
        },
        computed: {
            ...mapGetters([
                'currentPopup'
            ])
        },
        methods: {
            ...mapActions([
                'closePopup'
            ])
        }

    }

</script>

<style lang="scss">
    #benefit {
        .benefit-popup {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            z-index: 9999999;
            background-color: rgba(0,0,0,0.36);
        }
    }
</style>