import { mapState } from 'vuex'

export default {
    computed: {
        ...mapState('userInfo', [
            'fetchedData'
        ]),
        ...mapState('account', [
            'isLogin'
        ])
    },
    watch: {
        fetchedData: function(val) {
            console.log('fetchedData 1: ', val)

            if (!this.isLogin()) {
                return false
            }

            if (val) {
                if (this.fetched) this.fetched()
            }
        }
    },
    created() {
        console.log('fetchedData 2: ', this.fetchedData)
        console.log('AfterUserinfo.js')

        if (!this.isLogin()) {
            if (this.fetched) this.fetched()
            return false
        }

        if (this.fetchedData) {
            if (this.fetched) this.fetched()
        }
    }
}
