<template>
    <div>
        <h2>{{ name }}</h2>
        <p>Due to the widespread use of tables across third-party widgets like calendars and date pickers, we’ve designed our tables to be <strong>opt-in</strong>. Just add the base class <code class="highlighter-rouge">.table</code> to any <code class="highlighter-rouge">&lt;table&gt;</code>, then extend with custom styles or our various included modifier classes.</p>
        <b-table :fixed="true" @row-clicked="clickedItem" striped hover :items="items" :fields="fields">
            <template slot="UserProvider" slot-scope="data">
                {{ data.item.UserProvider === 1 ? 'Google' : 'Facebook' }}
            </template>
        </b-table>
        <b-pagination @change="loadList" size="md" :total-rows="totalCount" v-model="currentPage" :per-page="pageSize"></b-pagination>
    </div>
</template>

<script>
    import HeadTitle from '../components/HeadTitle.vue'
    import api from '../api/users'

    export default {
        components: { HeadTitle },
        name: 'Users',
        data() {
            return {
                name: 'Users',
                currentPage: 1,
                totalCount: 0,
                pageSize: 2,
                fields: ['UserEmail', 'UserProvider', 'RegDate'],
                items: []
            }
        },
        methods: {
            clickedItem(item, index, event) {
                console.log(item.UserEmail)
                this.$router.push({ name: 'UserInfo', params: { email: item.UserEmail } })
            },
            loadList(page) {
                api.member({
                    pageNum: page,
                    pageSize: this.pageSize
                }).then(response => {
                    this.items = response.data.ListData
                    this.totalCount = response.data.ListDataTotalCount
                })
            }
        },
        created() {
            this.loadList(1)
        }

    }
</script>

<style lang="scss"></style>