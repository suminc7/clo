<template>
    <div class="tabs measure-tab">
        <measure-step1 @complete="step1Complete"></measure-step1>
        <measure-step2 @complete="step2Complete" :fileId="fileId"></measure-step2>
        <benefit-api-test></benefit-api-test>
    </div>
</template>

<script>
    import MeasureStep1 from './measure/MeasureStep1.vue'
    import MeasureStep2 from './measure/MeasureStep2.vue'
    import BenefitApiTest from './BenefitApiTest.vue'

    export default {
        components: {
            BenefitApiTest,
            MeasureStep2,
            MeasureStep1
        },
        name: 'MeasureTab2',
        data() {
            return {
                name: 'MeasureTab2',
                currentStep: 'step1',
                fileId: null
            }
        },
        methods: {
            step1Complete(fileId) {
                console.log('step1Compete')
                this.fileId = fileId
                this.currentStep = 'step2'
            },
            step2Complete() {
                console.log('step2Compete')
            }
        }

    }
</script>

<style lang="scss">
    @import "scss/benefit/mixins";
    #benefit {
        .measure-tab {
            padding: 40px;
            height: 100%;

        }
    }
</style>