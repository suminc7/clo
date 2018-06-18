<template>
    <ul class="room-list col-10 offset-lg-2">
        <!--<li v-for="room in rooms"><a @click.prevent="changeRoom(room)" href="#">{{ room.Name }}</a></li>-->
    </ul>
</template>

<script>
    import { mapState } from 'vuex'
    export default {
        name: 'RoomList',
        data() {
            return {
                name: 'RoomList'
            }
        },
        computed: {
            ...mapState('store', [
                'rooms'
            ])
        },
        methods: {
            changeRoom(room) {
                this.$router.push({ name: 'Store', params: { roomName: room.Name.toLowerCase(), childRoomName: null } })
            }
        }

    }
</script>

<style lang="scss"></style>