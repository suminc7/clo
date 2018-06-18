<template>
    <transition name="fade">
        <div v-if="currentPopup && currentPopup === popupTypes.TERMS" class="popup" tabindex="0">
            <div class="popup-inner" @click.self="closePopup">
                <Terms></Terms>
            </div>
        </div>
    </transition>
</template>

<script>
    // popup 컴포넌트가 동시에 여러개 열릴 수 있어서 PopupTerms 컴포넌트로 분리.(같은 store를 사용하기 때문 -> currentPopup)
    import Terms from './join/Terms.vue'
    import { mapState, mapActions } from 'vuex'
    import * as popupTypes from '../../store/types/popup-types'

    export default {
        name: 'popup',
        data() {
            return {
                name: 'popup',
                popupTypes
            }
        },
        computed: {
            ...mapState('popup', [
                'currentPopup'
            ])
        },
        components: {
            Terms
        },
        methods: {
            ...mapActions('popup', [
                'closePopup'
            ])
        }
    }
</script>
