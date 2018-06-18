<template>
    <div class="tabs measure-tab">
        <a href="#" @click.prevent="offMeasure" class="close-btn"></a>
        <div class="measure-box2">
            <div class="gender-tab clearfix">
                <div :class="currentMeasure.gender" class="slide"></div>
                <a href="#" @click.prevent="genderClick('female')" :class="{active: currentMeasure.gender === 'female'}" class="gender-tab-box gender-tab-f">WOMAN</a>
                <a href="#" @click.prevent="genderClick('male')" :class="{active: currentMeasure.gender === 'male'}" class="gender-tab-box gender-tab-m">MAN</a>
            </div>
            <div class="measure-avatar"></div>
            <div class="metric-tab">
            <span class="ui radio checkbox">
                <input class="hidden" @click="changeUnit('metric')" name="group1" type="radio" id="test1" value="metric" :checked="unitType === 'metric'" />
                <label for="test1">METRIC</label>
            </span>
            <span class="ui radio checkbox">
                <input class="hidden" @click="changeUnit('imperial')" name="group1" type="radio" id="test2" value="imperial" :checked="unitType === 'imperial'" />
                <label for="test2">IMPERIAL</label>
            </span>
            </div>
            <div class="size-tab">
                <measure-item
                        @changeType="changeType"
                        v-for="(value, key) in currentMeasure"
                        v-if="value > -1"
                        :key="key"
                        :currentType="currentType"
                        :type="key"
                        :min="minmax[key].min"
                        :max="minmax[key].max"
                        :measureUnit="measureUnits[key === 'weight' ? 1 : 0]"
                        :unitType="unitType"
                        v-model.number="currentMeasure[key]">
                </measure-item>
            </div>
            <a href="#" @click.prevent="openPopup(popupTypes.MEASURE)" class="more font-dropdown">MORE +</a>
        </div>
        <button @click="makeAvatar" :disabled="isUploading" class="btn-round sm upload-btn">
            <span class="uploadInputText" :style="{display: isUploading ? 'none' : 'inline-block'}">MAKE AVATAR</span>
            <rolling-btn :active="isUploading" />
        </button>
        <!--<a href="#" @click.prevent="saveClick" :class="{disabled: !fileId}" class="btn-round save-btn">SAVE AVATAR</a>-->
    </div>
</template>

<script>
    import _isEqual from 'lodash/isEqual'
    import { mapActions, mapGetters } from 'vuex'
    import MeasureItem from './measure/MeasureItem'
    import MeasurePopup from '../popup/MeasurePopup'
    import * as popupTypes from '../../../store/popup-types'
    import RollingBtn from '../btns/RollingBtn'
    export default {
        components: {
            RollingBtn,
            MeasurePopup,
            MeasureItem
        },
        name: 'MeasureTab',
        data() {
            return {
                name: 'MeasureTab',
                currentType: null,
                currentMeasure: null,
                unit: 'metric',
                isUploading: null,
                popupTypes
            }
        },
        watch: {
            checkedMeasure: {
                handler(val) {
                    console.log('checkedMeasure', val)
                    if (!_isEqual(this.currentMeasure, val)) {
                        //                        this.currentMeasure = { ...val }
                        this.currentMeasure = { ...this.currentMeasure, ...this.checkedMeasure }
                    }
                },
                deep: true
            }
        },
        computed: {
            ...mapGetters('measure', [
                'isMeasureTab',
                'measure',
                'checkedMeasure',
                'measureUnits',
                'unitType',
                'minmax'
            ])
        },
        methods: {
            makeAvatar() {
                if (this.isUploading) return
                this.offMeasure()
                this.isUploading = this.avatarByMeasurement({ measureValues: this.currentMeasure })
                    .then(() => {
                        this.isUploading = null
                    })
                    .catch(() => {
                        this.isUploading = null
                    })
            },
            changeUnit(value) {
                this.unit = value
                console.log('++++++++++++++++++++++++++ changeUnit', value)
                this.changeMeasureUnit(this.unit)
            },
            changeType(type) {
                this.currentType = type
            },
            saveClick() {
                if (this.isUploading) return
                this.isUploading = true
                this.updateMeasure(this.currentMeasure)
                this.instant()
                    .then(response => {
                        this.isUploading = false
                    })
            },
            genderClick(gender) {
                this.changeMeasure(gender)
            },
            ...mapActions('measure', [
                'offMeasure',
                'updateMeasure',
                'changeMeasure',
                'instant',
                'changeMeasureUnit'
            ]),
            ...mapActions('avatar', [
                'avatarByMeasurement'
            ]),
            ...mapActions([
                'openPopup'
            ]),
            checkContains(e) {
                if (!document.querySelector('.measure-tab').contains(e.target)) {
                    this.offMeasure()
                }
            }
        },
        created() {
            this.currentMeasure = { ...this.measure, ...this.checkedMeasure }
        },
        mounted() {
            document.querySelector('.fitting-tab').addEventListener('click', this.checkContains)
        },
        destroyed() {
            document.querySelector('.fitting-tab').removeEventListener('click', this.checkContains)
        }

    }
</script>

<style lang="scss">
    @import "~scss/vars";
    @import "~scss/responsive";
    @import "~scss/benefit/mixins";
    #benefit {
        .measure-tab {
            padding: 40px 20px;
            height: 100%;
            width: 70%;
            position: absolute;
            right: 0;
            top: 0;
            z-index: 100000;
            background-color: hsla(0, 0%, 95%, 0.8);
            &.slide-enter-active, &.slide-leave-active {
                transition: all 0.3s ease-in-out
            }
            &.slide-enter, &.slide-leave-to /* .fade-leave-active below version 2.1.8 */ {
                right: -70%
            }

            .more {
                margin: 10px 0 30px 0;
                display: inline-block;
            }
            .measure-avatar {
                width: 22px;
                height: 50px;
                background: url("~static/images/benefit/img_avatar.svg") no-repeat center;
                margin: 10px auto;
            }
            .measure-box2 {
                text-align: left;
            }
            .metric-tab {
                margin-bottom: 10px;
                text-align: center;
                & span:first-child {
                    margin-right: 10px;
                }
            }
            .save-btn {
                margin: 30px auto 0 auto;
            }
            .gender-tab {
                width: 130px;
                background-color: #f0f1f2;
                border-radius: 26px;
                border: solid 2px #e0e0e0;
                margin: 0 auto;
                position: relative;
                .slide {
                    width: 60px;
                    height: 20px;
                    border-radius: 22px;
                    background-color: $scarlet;
                    position: absolute;
                    z-index: 0;
                    top: 3px;
                    margin: 0 4px;
                    left: 0;
                    @include transition(All 0.2s ease);
                    &.male {
                        left: 58px;
                    }
                }
                .gender-tab-box {
                    position: relative;
                    width: 60px;
                    height: 26px;
                    float: left;
                    font-weight: 900;
                    text-align: center;
                    color: #949499;
                    /*line-height: 24px;*/
                    @include transition(All 0.2s ease);
                    &.gender-tab-f {
                        padding: 9px 0 7px 4px;
                    }
                    &.gender-tab-m {
                        padding: 9px 0 7px 4px;
                    }
                    &.active {
                        color: white;
                    }
                }
            }
        }
    }
</style>