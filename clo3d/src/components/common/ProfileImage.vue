<template>
    <div class="profileImage" :style="{ backgroundImage: 'url(' + userProfileImage + ')' }">
        <div class="profileImage-name" v-if="!userProfileImage">{{ userName ? userName.substring(0, 1).toUpperCase() : '' }}</div>
    </div>
</template>

<script>
    import { mapState, mapActions } from 'vuex'

    export default {
        name: 'profileImage',
        data() {
            return {
                name: 'profileImage'
            }
        },
        computed: {
            ...mapState('userInfo', [
                'userName',
                'userProfileImage'
            ])
        },
        methods: {
            ...mapActions('userInfo', [
                'changeProfile'
            ])
        }

    }
</script>

<style lang="scss">
    @import "~sass/responsive";
    @import "~sass/variables";

    .profileImage {
        display: inline-block;
        overflow: hidden;
        width: 50px;
        height: 50px;
        line-height: 50px;
        margin: -5px 0 0 14px;
        color: #ffffff;
        font-size: 20px;
        border-radius: 50%;
        text-align: center;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        background-color: #f1f1f1;
    }

    .profileImage-name {
        background-color: #000;
    }
</style>