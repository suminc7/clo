<template>
    <transition name="fade">
        <div v-if="popupType" class="popup" tabindex="0">
            <div class="popup-inner" @click.self="$store.dispatch('popup/offPopup')">
                <login v-if="popupType === 'login'" />
                <select-workroom v-if="popupType === 'selectWorkroom'" />
            </div>
        </div>
    </transition>
</template>

<script>
    import Login from './Login'
    import { mapGetters } from 'vuex'
    import SelectWorkroom from './SelectWorkroom'
    export default {
        components: {
            SelectWorkroom,
            Login },
        name: 'Popup',
        data() {
            return {
                name: 'Popup'
            }
        },
        computed: {
            ...mapGetters('popup', [
                'popupType'
            ])
        }

    }
</script>

<style lang="scss"></style>