<template>
    <div>
        <div ref="measureSlider" class="measure-slider">
            <div ref="measureSliderInner" class="measure-slider-inner" :style="{'height': '100%'}">
                <div class="measure-slider-box" :style="{padding: `0 ${boxPadding}px`}">
                    <div
                        v-for="n in range(min, (max+1))"
                        class="measure-slider-marker"
                        :data-width="isMetric ? n : Math.floor(n/12)"
                        :class="isMetric ? classObject(n) : classObjectInche(n)">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import range from 'lodash/range'
    import Draggable from 'gsap/Draggable'
    import 'script-loader!@/plugins/ThrowPropsPlugin'

    let drag

    export default {
        name: 'MeasureSlider',
        data() {
            return {
                name: 'MeasureSlider',
                beforeWidth: 0,
                xValue: this.value,
                metricOffset: 41,
                boxPadding: 0
            }
        },
        props: [
            'max',
            'min',
            'value',
            'type',
            'unitType'
        ],
        computed: {
            isMetric() {
                return this.unitType === 'metric' || this.type === 'weight'
            }
        },
        methods: {
            classObject(n, toInt = false) {
                if (n % 10 === 0) {
                    return !toInt ? 'large' : 5
                } else if (n % 5 === 0) {
                    return !toInt ? 'sub' : 4
                } else {
                    return !toInt ? 'normal' : 4
                }
            },
            classObjectInche(n, toInt = false) {
                if (n % 12 === 0) {
                    return !toInt ? 'large' : 5
                } else if (n % 6 === 0) {
                    return !toInt ? 'sub' : 4
                } else {
                    return !toInt ? 'normal' : 4
                }
            },
            emitValue(position) {
                this.xValue = Math.round((position + 1) / this.metricOffset * -10 + this.min)
                this.$emit('change', this.xValue)
            },
            valueToPosition(val) {
                return Math.round((val - this.min) / 10 * -this.metricOffset - 1)
            },
            setPadding() {
                const inner = this.$refs['measureSliderInner']
                this.boxPadding = inner.parentElement.clientWidth / 2
            },
            setWidth() {
                let width = 0
                for (let i = this.min; i < this.max + 1; i++) {
                    width += this.isMetric ? this.classObject(i, true) : this.classObjectInche(i, true)
                }
                // 3 is last marginRight
                const inner = this.$refs['measureSliderInner']
                const cw = inner.parentElement.clientWidth
                console.log('cw', cw, width, this.isMetric)
                const wid = (width - 3 + cw)
                inner.style.width = wid + 'px'
                return wid - cw
            },
            initDraggable() {
                const self = this
                const realWid = this.setWidth()

                const draggable = Draggable.create(this.$refs['measureSliderInner'], {
                    type: 'x',
                    edgeResistance: 0.99,
                    bounds: this.$refs['measureSlider'],
                    throwProps: true,
                    onDrag: function() {
                        self.emitValue(this.x)
                    },
                    onThrowUpdate: function() {
                        self.emitValue(this.x)
                    },
                    snap: {
                        x: function(endValue) {
                            endValue > 0 && (endValue = 0)
                            endValue < -realWid && (endValue = -realWid)

                            const m = Math.floor(endValue / self.metricOffset) * 5
                            const r = Math.round((endValue - m) / 4) * 4 + m
                            // 2px 중 앞쪽을 가르킬 경우때문에 -1 한다
                            return r % self.metricOffset === 0 ? r - 1 : r
                        }
                    }
                })
                drag = draggable[0]

                TweenLite.to(drag.target, 0, { x: this.valueToPosition(this.value) })
                drag.update()
            },
            range
        },
        watch: {
            unitType: {
                handler() {
                    console.log('watch unitType')
                    if (drag) drag.kill()
                    this.initDraggable()
                }
            }
        },
        created() {
            console.log('created')
        },
        mounted() {
            this.setPadding()
            console.log('mounted')
            if (drag) drag.kill()
            this.initDraggable()
        },
        destroyed() {
            console.log('destroyed')
        }

    }
</script>

<style lang="scss">
    #benefit {
        .measure-slider {
            transform: translate3d(0,0,0);
            background-color: #aaaaaa;
            height: 30px;
            overflow: hidden;
            &:before {
                content: '';
                width: 0;
                height: 0;
                border-left: 8px solid transparent;
                border-right: 8px solid transparent;
                border-top: 8px solid white;
                position: absolute;
                left: 50%;
                margin-left: -8px;
                z-index: 100;
            }
            .measure-slider-inner {
                .measure-slider-box {
                    padding: 0 85px;
                    position: relative;
                    height: 100%;
                }
            }
            .measure-slider-marker {
                background-color: white;
                float: left;
                margin-right: 3px;
                width: 1px;
                height: 10px;
                text-align: center;

                &:last-child {
                    margin-right: 0;
                }

                &.normal {
                    height: 10px;
                }
                &.sub {
                    height: 15px;
                }
                &.large {
                    height: 18px;
                    position: relative;
                    width: 2px;
                    &:before {
                        content: attr(data-width);
                        position: absolute;
                        width: 30px;
                        left: -15px;
                        top: 20px;
                        color: white;
                    }
                }
            }
        }
    }
</style>