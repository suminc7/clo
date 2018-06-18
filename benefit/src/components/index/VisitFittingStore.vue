<template>
    <div class="visit-fitting-store">
        <router-link class="btn-rect visit-btn" :to="{ path: '/fittingroom' }">VISIT FITTING ROOM</router-link>
    </div>
</template>

<script>
    export default {
        name: 'VisitFittingStore',
        data() {
            return {
                name: 'VisitFittingStore'
            }
        }

    }
</script>

<style lang="scss">
    .index {
        .visit-fitting-store {
            height: 300px;
            background: url("~static/images/index/img-visual-fitting.jpg") no-repeat center;
            text-align: center;
            .visit-btn {
                width: 300px;
                margin: 125px 0;
            }
        }
    }
</style>