<template>
    <div id="app" :class="breakpoint">
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'app1',
        data() {
            return {
                breakpoint: null
            }
        }
    }
</script>

<style lang="scss">
</style>
