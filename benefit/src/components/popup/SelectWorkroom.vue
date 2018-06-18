<template>
    <div class="popup-contents workroom-popup">
        <a href="#" @click.prevent="$store.dispatch('popup/offPopup')" class="btn-close icon-input close-grey"></a>
        <div class="title font-popup-title">
            MY CLOSET
        </div>
        <div class="workroom-inner">
            <div class="select-box select-company">
                <span>COMPANY</span>
                <basic-select :options="options"
                              :selected-option="item"
                              placeholder="select Company"
                              @select="onSelect">
                </basic-select>
            </div>
            <div class="select-box select-brand">
                <span>BRAND</span>
                <basic-select :options="options1"
                              :selected-option="item1"
                              placeholder="select Brand"
                              @select="onSelect1">
                </basic-select>
            </div>
            <div class="select-box select-workroom">
                <span>WORK ROOM</span>
                <basic-select :options="options2"
                              :selected-option="item2"
                              placeholder="select Workroom"
                              @select="onSelect2">
                </basic-select>
            </div>
        </div>
        <button @click="selectedWorkroom" :disabled="!checkValidate" class="login-btn btn-rectangle">SELECT</button>
    </div>
</template>

<script>
    import { BasicSelect } from 'vue-search-select'
    import api from '../../api/closet'
    import _map from 'lodash/map'
    import _remove from 'lodash/remove'
    export default {
        name: 'SelectWorkroom',
        data() {
            return {
                options: [],
                options1: [],
                options2: [],
                searchText: '',
                item: { value: '', text: '' },
                item1: { value: '', text: '' },
                item2: { value: '', text: '' },
                depth: []
            }
        },
        computed: {
            checkValidate() {
                return this.item.value && this.item1.value && this.item2.value
            }
        },
        components: {
            BasicSelect
        },
        methods: {
            selectedWorkroom() {
                const params = {
                    'roomId': { key: this.item2.value, value: this.item2.text },
                    'depth': [
                        { key: this.item.value, value: this.item.text },
                        { key: this.item1.value, value: this.item1.text },
                        { key: this.item2.value, value: this.item2.text }
                    ]
                }

                api.mycloset(params)
                    .then(response => {
                        console.log('================================= mycloset', response)
                    })
                    .catch(err => {
                        console.dir('================================= mycloset', err)
                    })

                this.$store.dispatch('popup/offPopup', { type: 'selectWorkroom', data: this.item2 })
            },
            onSelect(item) {
                this.item = item
                this.item1 = { value: '', text: '' }
                this.item2 = { value: '', text: '' }

                this.mystructure({ spaceType: 1, spaceId: this.item.value })
            },
            onSelect1(item) {
                this.item1 = item
                this.item2 = { value: '', text: '' }
                this.myworkroom({ spaceType: 2, spaceId: this.item1.value })
            },
            onSelect2(item) {
                this.item2 = item
                console.log('onSelect2', item)
            },
            reset() {
                this.item = {}
            },
            selectOption() {
                this.item = this.options[0]
            },
            async mycompany() {
                const { data: { Data } } = await api.mycompany()
                this.options = _map(Data, o => ({ value: o.CompanyId, text: o.Name }))
            },
            async mystructure({ spaceType, spaceId }) {
                const { data: { Children } } = await api.mystructure({ spaceType, spaceId })
                if (Children.length) {
                    this.publicItem = _remove(Children, o => o.SpaceName === 'Public Room')
                    this.options1 = _map(Children, o => ({ value: o.SpaceId, text: o.SpaceName }))
                }
            },
            async myworkroom({ spaceType, spaceId }) {
                const { data: { Children } } = await api.mystructure({ spaceType, spaceId })
                const arr = []
                _map(this.publicItem, o => arr.push({ value: o.SpaceId, text: o.SpaceName }))
                _map(Children, o => {
                    _map(o.Children, p => {
                        if (p.SpaceType === 4) {
                            _map(p.Children, o => arr.push({ value: o.SpaceId, text: o.SpaceName + '  [' + p.SpaceName + ']' }))
                        } else {
                            arr.push({ value: p.SpaceId, text: p.SpaceName + '  [' + o.SpaceName + ']' })
                        }
                    })
                })
                this.options2 = arr
            }
        },
        created() {
            const myCompany = async() => {
                await this.mycompany()
                if (this.depth.length && this.depth[0]) {
                    this.item.value = this.depth[0].key
                    this.item.text = this.depth[0].value
                } else {
                    this.item = this.options[0]
                }

                await this.mystructure({ spaceType: 1, spaceId: this.item.value })
                if (this.depth.length && this.depth[1]) {
                    this.item1.value = this.depth[1].key
                    this.item1.text = this.depth[1].value
                } else {
                    this.item1 = this.options1[0]
                }

                await this.myworkroom({ spaceType: 2, spaceId: this.item1.value })
                if (this.depth.length && this.depth[2]) {
                    this.item2.value = this.depth[2].key
                    this.item2.text = this.depth[2].value
                } else {
                    this.item2 = this.options2[0]
                }
            }

            api.getmycloset()
                .then(response => {
                    if (response.data.depth.length) this.depth = response.data.depth
                    myCompany().then(() => {})
                })
                .catch(err => {
                    console.log(err)
                    myCompany().then(() => {})
                })
        }

    }
</script>

<style lang="scss">
    @import "~scss/vars";
    @import "~scss/responsive";
    .popup-contents {
        .workroom-inner {
            margin: 30px 0 20px 0;
            .select-box {
                margin-bottom: 30px;
                text-align: left;
                @include media-breakpoint-down(sm) {
                    margin-bottom: 15px;
                }
                > span {
                    display: inline-block;
                    font-size: 12px;
                    margin-bottom: 10px;
                    font-weight: 500;
                }
            }
            .select-workroom {
                margin-bottom: 50px;
                @include media-breakpoint-down(sm) {
                    margin-bottom: 25px;
                }
            }

            .ui.dropdown {
                padding: 12px 2.1em 12px 1em!important;
                i.icon {
                    padding: 12px!important;
                }
                .search {
                    padding: 12px 2.1em 12px 1em!important;
                }
                .text {
                    font-size: 12px!important;
                }
                .item {
                    font-size: 12px!important;
                }
            }

        }
    }

</style>