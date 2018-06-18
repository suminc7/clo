<template>
    <div>
        <app-header></app-header>
        <app-body></app-body>
        <div class="container-fluid">
            <div class="row flex-xl-nowrap">
                <sidebar></sidebar>
                <main class="col-12 col-md-9 col-xl-8 py-md-3 pl-md-5 bd-content" role="main">
                    <router-view/>
                </main>
            </div>
        </div>
    </div>
</template>

<script>
    import Sidebar from '../components/Sidebar.vue'
    import AppHeader from '../components/AppHeader.vue'
    import AppBody from '../components/AppBody.vue'
    export default {
        components: {
            Sidebar,
            AppBody,
            AppHeader
        },
        name: 'Index',
        data() {
            return {
                name: 'Index'
            }
        }

    }
</script>

<style lang="scss">
</style>