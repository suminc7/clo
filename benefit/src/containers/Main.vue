<template>
    <div>
        <app-header/>
        <router-view/>
        <app-footer/>
    </div>
</template>

<script>
    import AppFooter from '../components/footer/AppFooter'
    import AppHeader from '../components/header/AppHeader'

    export default {
        components: {
            AppHeader,
            AppFooter },
        name: 'Main',
        data() {
            return {
                name: 'Main'
            }
        }

    }
</script>

<style lang="scss"></style>