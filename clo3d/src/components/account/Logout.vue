<template>
    <div>

    </div>
</template>


<script>
import * as envVars from '../../vars'

export default {
    name: 'logout',
    data() {
        return {
            name: 'logout'
        }
    },
    created() {
        this.$store.dispatch('account/signout', envVars.zendeskDomain)
    }
}
</script>


<style>

</style>