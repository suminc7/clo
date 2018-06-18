<template>
    <div class="news">
        <div class="sub-header">
            <vueHeader />
            <div class="mobile-scroll"></div>
            <div class="sub-visual-txt-area">
                <h2 class="sub-visual-txt-title koEn" v-html="$t('news.NEWS_TITLE')"></h2>
                <p class="sub-visual-txt-spot">{{ $t('news.NEWS_TXT_SPOT') }}</p>
            </div>
        </div>

        <div class="sub-area">
            <div v-if="newsList" class="scoop_thumb_box">

                <div v-for="el in newsList" class="col-6 col-md-3 main-scoop-list">
                    <a :href="`/company/newsdetail/${el.Seq}`">
                        <div class="main-scoop-box">
                            <div :style="{'background-image': `url( ${getImageUrl(el['ThumbnailURL'])} )`}"></div>
                            <div class="main-scoop-box_spot">
                                <p class="main_scoop_spot multiline">{{ el[`Title`] }}</p>
                                <p class="main_scoop_date">{{ getDate(el['DisplayDate']) }}</p>
                            </div>
                        </div>
                    </a>
                </div>

            </div>


            <div v-if="!newsList" class="scoop_thumb_box">

                <div v-for="el in 8" class="col-6 col-md-3 main-scoop-list">
                    <a>
                        <div class="main-scoop-box">
                            <div></div>
                            <div class="main-scoop-box_spot">
                                <p class="main_scoop_spot multiline"></p>
                                <p class="main_scoop_date"></p>
                            </div>
                        </div>
                    </a>
                </div>

            </div>


            <newsPagination :totalCount="newsTotalCount" :option="paginationOption" :callback="onPaginagionClicked" @indexChanged="value => newsList = value" />
        </div>

        <vueFooterSimple />

    </div>

</template>

<script>
    import afterUserInfo from '../../mixins/AfterUserinfo'
    import newsApi from '../../api/news'
    import { getDate } from '../../utils/getDateFormat'
    import * as cookieUtils from '../../utils/cookies'
    import newsPagination from '../common/Pagination'

    export default {
        name: 'news',
        data() {
            return {
                name: 'news',
                newsList: null,
                currentLang: cookieUtils.getLocale(),
                newsTotalCount: 0,
                paginationOption: {
                    maxItemLength: 20,
                    maxPagingLength: 5,
                    gap: 5
                }
            }
        },
        components: {
            newsPagination
        },
        mixins: [
            afterUserInfo
        ],
        methods: {
            getDate,
            getImageUrl(url) {
                return url ? `https://s3.clo3d.com/${url}` : 'https://s3.clo3d.com/newclo3d/article/default.png'
            },
            onPaginagionClicked(index, changeList) {
                newsApi.getArticleList({
                    pageNum: index,
                    pageSize: this.paginationOption.maxItemLength,
                    section: this.$route.meta.section,
                    lang: this.currentLang
                }).then(({ data }) => {
                    changeList(data.ListData)
                }).catch(error => {
                    console.log(error)
                })
            },
            fetched() {
                newsApi.getArticleList({
                    pageNum: 1,
                    pageSize: this.paginationOption.maxItemLength,
                    section: this.$route.meta.section,
                    lang: this.currentLang
                }).then(({ data }) => {
                    console.log(data.ListData)
                    this.newsList = data.ListData
                    this.newsTotalCount = data.ListDataTotalCount
                }).catch(error => {
                    console.error(error)
                })
            }
        }
    
    }
</script>

<style lang="scss">
    @import "~sass/responsive";
    @import "~sass/variables";

</style>