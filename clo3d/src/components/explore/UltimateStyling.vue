<template>
    <div class="section col-12 ultimate-styling section-pad">
        <div class="content-box col-md-6 offset-md-3">
            <div class="title title-sub-style01-black">{{ $t('explore.TEMP_EX10') }}</div>
            <div class="desc contents-txt-style02-black">{{ $t('explore.TEMP_EX11') }}</div>
        </div>
        <div class="copyright">{{ $t('explore.UNLIMITED_COPY_RIGHT') }}</div>
    </div>
</template>

<script>
    export default {
        name: 'UltimateStyling',
        data() {
            return {
                name: 'UltimateStyling'
            }
        }

    }
</script>

<style lang="scss">
    @import "~sass/responsive";
    @import "~sass/variables";
    .explore {
        .ultimate-styling {
            position: relative;
            height: 730px;
            background: url('~static/images/explore/img_unlimited_styling_1.jpg') no-repeat center;
            background-size: cover;
            @include media-breakpoint-up(md) {
                height: 900px;
                background: url('~static/images/explore/img-unlimited-styling-md-1.jpg') no-repeat center;
                background-size: cover;
            }
            @include media-breakpoint-up(xl) {
                height: 1105px;
                background: url('~static/images/explore/img-unlimited-styling-xl-1.jpg') no-repeat center;
                background-size: cover;
            }
            @include media-breakpoint-up(xxl) {
                height: 1360px;
                background: url('~static/images/explore/img-unlimited-styling-xxl-1.jpg') no-repeat center;
                background-size: cover;
            }
        }
    }
</style>