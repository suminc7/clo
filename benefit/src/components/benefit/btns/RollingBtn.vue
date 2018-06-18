<template>
    <div class="showbox white" :class="{active: active}">
        <div class="loader">
            <svg class="circular" viewBox="25 25 50 50">
                <circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="5" stroke-miterlimit="20"/>
            </svg>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'RollingBtn',
        data() {
            return {
                name: 'RollingBtn'
            }
        },
        props: [
            'active'
        ]

    }
</script>

<style lang="scss"></style>