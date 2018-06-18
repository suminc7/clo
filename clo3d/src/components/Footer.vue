<template>
    <footer>
        <div>
            <footerDiscover />
            <footerLinks />
        </div>
    </footer>
</template>

<script>
    import footerDiscover from './FooterDiscover.vue'
    import footerLinks from './FooterLinks.vue'

    export default {
        name: 'siteFooter',
        data() {
            return {
                name: 'siteFooter'
            }
        },
        components: {
            footerDiscover,
            footerLinks
        }
    }
</script>

