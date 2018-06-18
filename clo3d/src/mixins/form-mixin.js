
module.exports = {
    computed: {
        formValid() {
            return Object.keys(this.fields).every(key => this.fields[key].valid)
        }
    }

}
