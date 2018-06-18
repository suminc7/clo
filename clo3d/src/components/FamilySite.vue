<template>
    <div class="country-select jumpmenu en">
        <div class="family-select-box" @click.stop="familySiteShow = !familySiteShow;">
            <div>
                <span class="family-select-box-tit">Family Site</span><span class="img-arrow-down"><img src="~static/images/common/drop-none.svg" alt="drop down arrow"/></span>
            </div>

            <ul v-show="familySiteShow" class="family-select-list">
                <li class="on"><a href="https://marvelousdesigner.com/" target="_blank">MARVELOUSDESIGNER</a></li>
                <li><a href="https://www.clo-set.com/" target="_blank">CLO-SET</a></li>
                <li><a href="http://benefitbyclo.com/" target="_blank">BENEFITBYCLO</a></li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'FamilySite',
        data() {
            return {
                familySiteShow: false
            }
        },
        mounted() {
            document.addEventListener('click', (e) => {
                if (this.familySiteShow) {
                    this.familySiteShow = false
                }
            }, false)
        }
    }
</script>

<style scoped>

</style>