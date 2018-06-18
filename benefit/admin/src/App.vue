<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
    import 'bootstrap'
    import 'bootstrap-vue'
    export default {
        name: 'app'
    }
</script>

<style lang="scss">
    @import "../scss/style.scss";
    @import "../scss/default/docs";
</style>
