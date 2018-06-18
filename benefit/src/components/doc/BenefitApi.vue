<template>
    <div v-html="html" class="markdown-body"></div>
</template>

<script>
//    import showdown from 'showdown'
//    import text from 'raw-loader!../../../../benefit.Web/web-benefit/benefit-api.md'

export default {
    name: 'BenefitApi',
    data() {
        return {
            name: 'BenefitApi',
            html: null
        }
    },
    created() {
        //            const converter = new showdown.Converter()
        //            converter.setFlavor('github')
        //            this.html = converter.makeHtml(text)
    }

}
</script>

<style lang="scss">
    /*@import "../../../../benefit.Web/web-benefit/static/styles/github-markdown.css";*/

    /*.markdown-body {*/
        /*box-sizing: border-box;*/
        /*min-width: 200px;*/
        /*max-width: 980px;*/
        /*margin: 0 auto;*/
        /*padding: 45px;*/
        /*list-style: circle;*/
    /*}*/

    /*@media (max-width: 767px) {*/
        /*.markdown-body {*/
            /*padding: 15px;*/
        /*}*/
    /*}*/

</style>