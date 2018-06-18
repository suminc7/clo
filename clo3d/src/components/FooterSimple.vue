<template>
    <footer>
        <footerLinks></footerLinks>
    </footer>
</template>

<script>
    import footerLinks from './FooterLinks.vue'

    export default {
        name: 'footerSimple',
        data() {
            return {
                name: 'footer',
                selectedTab: 'terms'
            }
        },
        components: {
            footerLinks
        }

    }
</script>

<style lang="scss">
</style>