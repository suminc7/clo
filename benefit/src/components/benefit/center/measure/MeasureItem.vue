<template>
    <div class="measure-item">
        <div @click.prevent="changeType" class="measure-info cb">
            <span class="measure-info-type">{{ type.toUpperCase() }}</span>
            <span class="measure-info-value">{{ (unitType === 'metric' || type === 'weight') ? convertedValue : toInches(convertedValue) }}</span>
            <span class="measure-info-metric">{{ measureUnit }}</span>
        </div>
        <measure-slider @change="changedSlider" :type="type" :unitType="unitType" :value="convertedValue"
                        v-if="currentType === type" :min="convertedMin" :max="convertedMax"/>
    </div>
</template>

<script>
    import MeasureSlider from './MeasureSlider'
    export default {
        components: { MeasureSlider },
        name: 'MeasureItem',
        data() {
            return {
                name: 'MeasureItem'
            }
        },
        model: {
            prop: 'value',
            event: 'change'
        },
        props: [
            'currentType',
            'type',
            'value',
            'min',
            'max',
            'measureUnit',
            'unitType'
        ],
        computed: {
            converter() {
                return this.type === 'weight' ? this.kgToLbs : this.cmToInches
            },
            convertedMin() {
                return this.convert(this.min)
            },
            convertedMax() {
                return this.convert(this.max)
            },
            convertedValue() {
                return this.convert(this.value)
            }
        },
        methods: {
            convert(val) {
                return this.unitType === 'metric' ? Math.round(val) : Math.round(this.converter(val))
            },
            changedSlider(value) {
                // revert value
                if (this.unitType === 'metric') {
                } else {
                    if (this.type === 'weight') {
                        // lb
                        value = this.lbsToKg(value)
                    } else {
                        // inche
                        value = this.inchesToCm(value)
                    }
                }
                if (value > this.max) {
                    value = this.max
                } else if (value < this.min) {
                    value = this.min
                }
                this.$emit('change', value)
            },
            changeType() {
                this.$emit('changeType', this.type)
            },
            feetToCm() {
                return (this.value * 100 / 3.2808)
            },
            cmToFeet(val) {
                return (val * 0.01 * 3.2808)
            },
            cmToInches(val) {
                return (val * 0.39370)
            },
            inchesToCm(val) {
                return (val / 0.39370)
            },
            kgToLbs(val) {
                return (val * 2.20462)
            },
            lbsToKg(val) {
                return (val / 2.20462)
            },
            toInches(val) {
                val = this.inchesToCm(val)
                let inches = (val * 0.39370).toFixed(0)
                const feet = Math.floor(inches / 12)
                inches %= 12
                return feet + "\'" + inches + '"'
            }
        }

    }
</script>

<style lang="scss">
    #benefit {
        .measure-item {
            border-bottom: 1px solid #b9b9b9;
            &:first-child {
                border-top: 1px solid #b9b9b9;
            }
            .measure-info {
                line-height: 1;
                text-align: center;
                padding: 10px;
                .measure-info-type {
                    float: left;
                    padding: 3px 0;
                    color: #191919;
                    width: 50px;
                    text-align: left;
                    font-weight: bold;
                }
                .measure-info-value {
                    font-size: 15px;
                    color: #191919;
                }
                .measure-info-metric {
                    float: right;
                    color: #949494;
                    width: 50px;
                    text-align: right;
                }
            }
        }
    }
</style>