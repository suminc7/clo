import shapeApi from '../../api/shape'
import * as types from './measure-types'
import api from '../../api/avatar'
import _forEach from 'lodash/forEach'
import _xor from 'lodash/xor'

// const agent = navigator.userAgent.toLowerCase()
// const isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor) && agent.indexOf('mobile') === -1
// const outputType = isChrome ? 1001 : 1000
const outputType = 1000

const measureUnits = {
    metric: ['cm', 'kg'],
    imperial: ['ft/in', 'lbs']
}

const state = {
    isMeasureTab: false,
    currentUnitType: 'metric',
    checkedMeasure: {},
    currentMeasureUnits: measureUnits.metric,
    currentMeasure: {
        gender: 'female',
        height: 160,
        weight: 52,
        bust: -1,
        waist: -1,
        hip: -1,
        thigh: -1
    },
    male: {
        'gender': 'male',
        'height': 171,
        'weight': 65,
        'bust': 93,
        'waist': 75,
        'hip': 92,
        'thigh': 54
    },
    female: {
        'gender': 'female',
        'height': 160,
        'weight': 52,
        'bust': 81,
        'waist': 65,
        'hip': 89,
        'thigh': 51
    },
    MIN_MAX: {
        'height': { min: 110, max: 220 },
        'weight': { min: 40, max: 210 },
        'bust': { min: 60, max: 120 },
        'waist': { min: 50, max: 120 },
        'hip': { min: 60, max: 120 },
        'thigh': { min: 30, max: 100 }
    }
}

// getters
const getters = {
    isMeasureTab: state => state.isMeasureTab,
    checkedMeasure: state => state.checkedMeasure,
    measure: state => state.currentMeasure,
    unitType: state => state.currentUnitType,
    measureUnits: state => state.currentMeasureUnits,
    minmax: state => state.MIN_MAX
}

// actions
const actions = {
    measurements({ commit, state }, { measureValues }) {
        return new Promise((resolve, reject) => {
            const params = measureValues
            api.measurements(params).then(response => {
                resolve(response.data)
            }).catch(error => {
                reject(error)
            })
        })
    },
    onMeasure({ commit }) {
        commit(types.ON_MEASURE)
    },
    offMeasure({ commit }) {
        commit(types.OFF_MEASURE)
    },
    instant({ commit, dispatch }) {
        return new Promise((resolve, reject) => {
            api.instant(state.currentMeasure).then(response => {
                dispatch('makeAvatar2', { fileId: response.data.fileId })
                resolve(response)
            }).catch(error => {
                reject(error)
                dispatch('onWorkerError', { error }, { root: true })
            })
        })
    },
    makeAvatar2({ commit, dispatch, rootState }, data = { fileId: '' }) {
        console.log('makeAvatar2')
        dispatch('render', null, { root: true })

        const params = {
            msgType: 1000,
            connId: rootState.connectionId,
            email: rootState.benefitId || rootState.connectionId,
            outputType: outputType,
            fileId: data.fileId
        }

        api.avatar(params).then(() => {
            console.log(data)
            dispatch('setFileItem', data, { root: true })
        }).catch(error => {
            // if (rootState.fileId === null) {
            //     dispatch('activate', false, { root: true })
            // }
            dispatch('onWorkerError', { error }, { root: true })
        })
    },
    makeAvatar({ commit, dispatch, rootState }, { fileId, gender, weight, height }) {
        dispatch('render', null, { root: true })
        commit(types.MAKE_AVATAR, { gender, weight, height })

        getArtifacts()
        function getArtifacts() {
            shapeApi.artifact({
                fileId,
                gender,
                weight,
                height,
                'measurementSetId': 'standard'
            }).then(response => {
                const data = JSON.parse(response.data)
                status(data['artifactId'])
            })
        }

        function status(artifactId) {
            const interval = setInterval(() => {
                shapeApi.status(artifactId).then(response => {
                    const data = JSON.parse(response.data)
                    console.log('status', data.status)
                    if (data.status === 'ready') {
                        clearInterval(interval)
                        components(artifactId)
                    }
                })
            }, 2000)
        }
        function components(artifactId) {
            shapeApi.components(artifactId).then(response => {
                const { signedDownloadUrl } = JSON.parse(response.data)
                console.log('signedDownloadUrl', signedDownloadUrl)
                make({ gender, weight, height, avatarUrl: signedDownloadUrl })
            })
        }

        function make({ gender, weight, height, avatarUrl }) {
            const params = {
                msgType: 1000,
                connId: rootState.connectionId,
                email: rootState.benefitId || rootState.connectionId,
                outputType: outputType,
                gender,
                weight,
                height
            }
            if (avatarUrl) {
                params.avatarUrl = avatarUrl
            }

            console.log('params', params)
            return api.avatar(params).then(() => {
                dispatch('changeTab', 'fitting', { root: true })
            }).catch(error => {
                dispatch('onWorkerError', { error }, { root: true })
            })
        }
    },
    updateMeasure({ commit }, value) {
        commit(types.UPDATE_MEASURE, value)
    },
    changeMeasure({ commit }, gender) {
        commit(types.CHANGE_MEASURE, gender)
    },

    addTypes({ commit }, { checkedMeasure, subTypes }) {
        commit(types.ADD_TYPES, { checkedMeasure, subTypes })
    },
    changeMeasureUnit({ commit }, value) {
        commit(types.CHANGE_MEASURE_UNIT, value)
    }
}

// mutations
const mutations = {
    [types.ON_MEASURE](state) {
        state.isMeasureTab = true
    },
    [types.OFF_MEASURE](state) {
        state.isMeasureTab = false
    },
    [types.CHANGE_MEASURE_UNIT](state, value) {
        state.currentUnitType = value
        state.currentMeasureUnits = measureUnits[value]

        const measure = state.currentMeasure
        for (const key in measure) {
            if (measure.hasOwnProperty(key) && measure[key] > -1) {
                console.log(measure[key])
            }
        }
    },
    [types.MAKE_AVATAR](state, { measure }) {
        localStorage.setItem('benefit-measure', JSON.stringify(measure))
    },
    [types.UPDATE_MEASURE](state, value) {
        state.currentMeasure = { ...value }
    },
    [types.CHANGE_MEASURE](state, gender) {
        const measure = { ...state.checkedMeasure }

        state.checkedMeasure = {}
        state.checkedMeasure.gender = state[gender].gender
        state.checkedMeasure.height = state[gender].height
        state.checkedMeasure.weight = state[gender].weight
        state.checkedMeasure.bust = measure.bust > -1 ? state[gender].bust : -1
        state.checkedMeasure.waist = measure.waist > -1 ? state[gender].waist : -1
        state.checkedMeasure.hip = measure.hip > -1 ? state[gender].hip : -1
        state.checkedMeasure.thigh = measure.thigh > -1 ? state[gender].thigh : -1
    },
    [types.ADD_TYPES](state, { checkedMeasure, subTypes }) {
        state.checkedMeasure = {}

        const gender = state.currentMeasure.gender
        _forEach(checkedMeasure, (type) => {
            state.checkedMeasure[type] = state[gender][type]
        })
        const uncheckedTypes = _xor(checkedMeasure, subTypes)
        _forEach(uncheckedTypes, (type) => {
            state.checkedMeasure[type] = -1
        })
    },
    [types.CHANGE_MEASURE_UNIT](state, value) {
        state.currentUnitType = value
        state.currentMeasureUnits = measureUnits[value]

        const measure = state.currentMeasure
        for (const key in measure) {
            if (measure.hasOwnProperty(key) && measure[key] > -1) {
                console.log(measure[key])
            }
        }
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
