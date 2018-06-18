<template>
    <div class="measure-popup">
        <p v-for="measureKey in subTypes" class="ui checkbox">
            <input class="hidden" type="checkbox" :id="'checkbox-measure-'+measureKey" :value="measureKey" v-model="checkedTypes">
            <label :for="`checkbox-measure-${measureKey}`">{{ measureKey.toUpperCase() }}</label>
        </p>
        <a href="#" @click.prevent="add" class="btn black font-dropdown">ADD</a>
    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex'
    export default {
        name: 'MeasurePopup',
        data() {
            return {
                name: 'MeasurePopup',
                subTypes: [
                    'bust',
                    'waist',
                    'hip',
                    'thigh'
                ],
                checkedTypes: []
            }
        },
        computed: {
            ...mapGetters('measure', [
                'checkedMeasure'
            ])
        },
        methods: {
            add() {
                this.closePopup()
                this.addTypes({ checkedMeasure: this.checkedTypes, subTypes: this.subTypes })
            },
            ...mapActions('measure', [
                'addTypes'
            ]),
            ...mapActions([
                'closePopup'
            ])
        },
        created() {
            this.subTypes.forEach(type => {
                const value = this.checkedMeasure[type]
                if (value > -1) {
                    this.checkedTypes.push(type)
                }
            })
        }

    }
</script>

<style lang="scss">
    @import "~scss/benefit/variables";
    #benefit {
        .measure-popup {
            position: absolute;
            padding: 30px;
            width: 180px;
            height: 230px;
            background-color: white;
            border-radius: $border-radius;
            left: 50%;
            top: 50%;
            margin: -115px 0 0 -90px;
            box-shadow: 0 10px 15px 0 rgba(0, 0, 0, 0.12);

            .checkbox {
                margin-bottom: 12px;
                display: block;
                label {
                    padding-left: 22px;
                }
            }
            .btn {
                margin-top: 20px;
            }
        }
    }
</style>