<template>
    <div class="center-view">
        <fitting-tab/>
        <transition name="slide">
            <measure-tab v-if="isMeasureTab"/>
        </transition>
        <transition name="slide">
            <upload-tab v-if="isUploadTab"/>
        </transition>
        <transition name="slide">
            <garment-info v-if="false"/>
        </transition>
    </div>
</template>

<script>
    import FittingTab from './FittingTab'
    import MeasureTab from './MeasureTab'
    import { mapGetters } from 'vuex'
    import GarmentInfo from './fitting/GarmentInfo.vue'
    import UploadTab from './UploadTab'
    export default {
        components: {
            UploadTab,
            GarmentInfo,
            MeasureTab,
            FittingTab

        },
        name: 'CenterView',
        data() {
            return {
                name: 'CenterView'

            }
        },
        computed: {
            ... mapGetters([
                'currentTab',
                'fileId'
            ]),
            ... mapGetters('measure', [
                'isMeasureTab'
            ]),

            ... mapGetters('upload', [
                'isUploadTab'
            ])
        },
        mounted() {

        }

    }
</script>

<style lang="scss">
    #benefit {
        .center-view {
            text-align: center;
            /*height: 486px;*/
            width: 100%;
            height: 100%;

            .close-btn {
                background: url(~static/images/benefit/fitting/cancel-black.svg) no-repeat 50%;
                background-size: 10px;
                position: absolute;
                left: 10px;
                top: 10px;
                width: 20px;
                height: 20px;
            }
        }
    }
</style>