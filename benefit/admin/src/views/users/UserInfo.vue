<template>
    <div>
        <h2>{{ name }}</h2>
        <b-table stacked :items="items" :fields="fields">
            <template slot="UserProvider" slot-scope="data">
                {{ data.item.UserProvider === 1 ? 'Google' : 'Facebook' }}
            </template>
        </b-table>
    </div>
</template>

<script>
    import api from '../../api/users'
    export default {
        name: 'UserInfo',
        data() {
            return {
                name: 'UserInfo',
                fields: ['UserEmail', 'UserProvider', 'RegDate'],
                items: []
            }
        },
        created() {
            api.memberInfo(this.$route.params.email).then(response => {
                this.items = [{ ...response.data }]
                console.log(response.data)
                console.log(this.items)
            })
        }

    }
</script>

<style lang="scss"></style>