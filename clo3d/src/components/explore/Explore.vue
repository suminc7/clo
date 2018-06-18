<template>
    <div class="explore">
        <div class="sub-header">
            <vueHeader></vueHeader>
            <div class="mobile-scroll"></div>
            <div class="sub-visual-txt-area">
                <h2 class="sub-visual-txt-title uppercase ko">{{ $t('explore.TEMP_EX1') }}</h2>
            </div>
        </div>
        <div class="section-container clearfix">
            <unlimited-design></unlimited-design>
            <real-time></real-time>
            <easy-to-use></easy-to-use>
            <evolve></evolve>
            <accurate></accurate>
            <stream-line></stream-line>
            <ultimate-styling></ultimate-styling>
        </div>

        <vueFooter></vueFooter>
    </div>
</template>

<script>
    import UnlimitedDesign from './UnlimitedDesign.vue'
    import UltimateStyling from './UltimateStyling.vue'
    import StreamLine from './StreamLine.vue'
    import Evolve from './Evolve.vue'
    import Accurate from './Accurate.vue'
    import RealTime from './RealTime.vue'
    import EasyToUse from './EasyToUse.vue'

    export default {
        components: {
            EasyToUse,
            RealTime,
            Accurate,
            Evolve,
            StreamLine,
            UltimateStyling,
            UnlimitedDesign },
        name: 'Explore',
        data() {
            return {
                name: 'Explore'
            }
        }

    }
</script>

<style lang="scss">
    @import "~sass/responsive";
    @import "~sass/variables";

</style>