<template>
    <div class="siginup-error-message-box">
        <span
        v-show="field && field[id] && field[id].invalid && !error.firstByRule(id, 'required') || field && field[id] && field[id].valid"
        :class="{'is-danger': error.has(id), 'is-info': field && field[id] && field[id].valid}"
        class="help">
            {{ message }}
        </span>
    </div>
</template>

<script>
    export default {
        name: 'ValidationLabel',
        data() {
            return {
                name: 'ValidationLabel'
            }
        },
        props: [
            'error',
            'field',
            'id'
        ],
        computed: {
            message() {
                const id = this.id
                const error = this.error
                const field = this.field

                if (!field) {
                    return false
                }
    
                if (error.first(id)) {
                    return error.first(id)
                }

                if (field[id] && field[id].valid) {
                    if (id === 'confirmedPassword') {
                        return this.$t('common.VALID_MATCH')
                    } else if (id === 'joinEmail') {
                        return this.$t('common.VALID_PASS_EMAIL')
                    }

                    return this.$t('common.AVAILABLE')
                }
            }
        }
    }
</script>

<style lang="scss">
    @import "~sass/responsive";
    @import "~sass/variables";

    .siginup-error-message-box {
        height: 14px;
    }
</style>