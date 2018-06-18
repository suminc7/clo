<template>
    <div class="tabs fitting-tab">
        <canvas ref="fittingCanvas" id="fittingCanvas" width="720" height="1280" @dblclick="zoom"></canvas>
        <active-images :items="loadImages"/>
        <div class="draw-type">
            <a href="#" @click.prevent="onMeasure" class="measure-btn"></a>
            <a href="#" @click.prevent="onUpload" class="upload-btn"></a>
            <a href="#" @click.prevent="onFitmap(fitmapChecked = !fitmapChecked)" class="fitmap-btn" :class="{active: fitmapChecked}"></a>
            <!--<a href="#" @click.prevent="changeDrawType" class="reset-btn"></a>-->
            <!--<br>-->

        </div>
        <a class="btn-left" href="#" @click.prevent="rotate('left')"></a>
        <a class="btn-right" href="#" @click.prevent="rotate('right')"></a>
    </div>
</template>

<script>
    import { mapActions, mapGetters, mapState } from 'vuex'
    import ActiveImages from './fitting/ActiveImages.vue'
    import panzoom from 'pan-zoom'
    import _last from 'lodash/last'
    import _filter from 'lodash/filter'

    function getImage(url) {
        return new Promise(function(resolve, reject) {
            if (!url) {
                resolve(null)
            }
            const img = new Image()
            img.onload = function() {
                resolve(img)
            }
            img.onerror = function() {
                reject(null)
            }
            img.src = url
        })
    }

    export default {
        components: { ActiveImages },
        name: 'FittingTab',
        data() {
            return {
                name: 'FittingTab',
                fitmapChecked: false,
                clearChecked: false,
                isZoom: false,
                drawType: 1,
                otherImages: {},
                isFittingOn: false,
                scaleData: null,
                isImageLoading: false,
                hideImg: []
            }
        },
        computed: {
            ... mapGetters([
                'fileId'
            ]),
            ... mapGetters('benefit', [
                'loadImages'
            ]),
            ... mapGetters('garment', [
                'garments'
            ]),
            ...mapState('account', [
                'userInfo'
            ])
        },
        watch: {
            loadImages: {
                handler: function(val) {
                    console.log('--------------------------loadImages', val)
                    this.$store.dispatch('setLoadingStatus', 'Downloading output ...', { root: true })
                    this.isImageLoading = true
                    const otherImages = [require('static/images/benefit/fitting/stage.png')].map(getImage)
                    const promiseArr = val.map(getImage)
                    Promise.all(otherImages).then((otherImages) => {
                        Promise.all(promiseArr).then((images) => {
                            this.hideImg = images
                            this.otherImages.stage = otherImages[0]
                            this.drawAntialiasing(this.hideImg)
                            this.isImageLoading = false
                            this.$store.dispatch('offLoading')
                            this.$store.dispatch('setLoadingStatus', '', { root: true })
                        })
                    })
                },
                deep: true
            },
            userInfo(val) {
                console.log('+++++++++++++++++++++ userInfo', val)
                if (this.$store.state.account.userInfo.isLogin) {
                    this.getArtifactBoxes()
                }
            }
        },
        methods: {
            changeDrawType() {
                this.drawType = this.drawType === 1 ? 0 : 1
            },
            rotate(type) {
                if (!this.isImageLoading) {
                    this.rotateAvatar(type)
                }
            },
            ...mapActions('benefit', [
                'getArtifacts',
                'getArtifactBoxes',
                'onFitmap'
            ]),
            ...mapActions('avatar', [
                'avatarBySample',
                'rotateAvatar'
            ]),
            ... mapActions('measure', [
                'onMeasure',
                'makeAvatar2'
            ]),
            ... mapActions('upload', [
                'onUpload'
            ]),
            zoom(e) {
                this.isZoom = !this.isZoom
            },
            drawAntialiasing(arr, data) {
                if (!arr) return

                const canvas = this.canvas
                const ctx = this.ctx
                const oc = this.oc
                const octx = this.octx
                const items = this.garments

                const lastItem = _last(_filter(items, ['isHide', false]))
                let lastLayer = -10
                if (items.length > 0 && lastItem) {
                    lastLayer = lastItem.layer
                }
                console.log('lastLayer', lastLayer)

                ctx.clearRect(0, 0, canvas.width, canvas.height)

                for (let i = 0; i < arr.length; i++) {
                    const img = arr[i]
                    console.log('================================ img', img)
                    if (img) {
                        // avatar
                        if (i === 0) {
                            oc.width = img.width * 0.5
                            oc.height = img.height * 0.5

                            if (this.scaleData) {
                                const { zoom, translate } = this.scaleData
                                octx.translate(translate.x, translate.y)
                                octx.scale(zoom, zoom)
                            }
                        } else {
                            const layer = items[i - 1].layer

                            if (layer > 5 && layer < 10) {
                                octx.globalCompositeOperation = 'source-atop'
                            }
                            console.log('lastLayer, layer', lastLayer, layer)
                            if (lastLayer === layer) {
                                octx.globalCompositeOperation = 'source-over'
                            }
                        }
                        octx.drawImage(img, 0, -10, oc.width, oc.height)
                    }
                }
                octx.globalCompositeOperation = 'destination-over'
                octx.drawImage(this.otherImages.stage, 30, 570, 300, 77)
                ctx.drawImage(oc, 0, 0, oc.width, oc.height, 0, 0, canvas.width, canvas.height)
            }
        },
        created() {
            this.fitmapChecked = this.isFitmap

            if (this.$store.state.account.userInfo.isLogin) {
                this.getArtifactBoxes()
            }

            document.addEventListener('visibilitychange', () => {
                console.log('+++++++++++++++++++++++++++++++++++++visibilitychange')
                this.drawAntialiasing(this.hideImg)
            })
        },
        mounted() {
            this.canvas = document.getElementById('fittingCanvas')
            this.ctx = this.canvas.getContext('2d')
            this.oc = document.createElement('canvas')
            this.octx = this.oc.getContext('2d')

            let ratio = 1
            let vpx = 0
            let vpy = 0

            const realWidth = 720
            const realHeight = 1280

            const halfWidth = realWidth / 2
            const halfHeight = realHeight / 2

            const vpw = halfWidth
            const vph = halfHeight

            const origWidth = halfWidth
            const origHeight = halfHeight

            let width = halfWidth
            let height = halfHeight

            const minRatio = 1.0
            const maxRatio = 3.0

            panzoom(this.canvas, e => {
                let step = e.dz > 0 ? -0.3 : 0.3
                if (e.dz === 0) {
                    step = 0
                }

                let newRatio = ratio + step

                if (newRatio < minRatio) {
                    newRatio = minRatio
                }

                if (newRatio > maxRatio) {
                    newRatio = maxRatio
                }

                const targetX = e.x * realWidth / this.canvas.clientWidth * 0.5
                const targetY = e.y * realHeight / this.canvas.clientHeight * 0.5

                const pX = ((vpx * -1) + targetX) * 100 / width
                const pY = ((vpy * -1) + targetY) * 100 / height

                ratio = newRatio
                width = origWidth * newRatio
                height = origHeight * newRatio

                let x = ((width * pX / 100) - targetX)
                let y = ((height * pY / 100) - targetY)

                x -= e.dx
                y -= e.dy

                if (x < 0) {
                    x = 0
                } else if (x + vpw > width) {
                    x = width - vpw
                }

                if (y < 0) {
                    y = 0
                } else if (y + vph > height) {
                    y = height - vph
                }

                vpx = x * -1
                vpy = y * -1

                this.scaleData = { zoom: ratio, translate: { x: vpx, y: vpy } }
                this.drawAntialiasing(this.hideImg)
            })

            // on 되자마자 transition이 보이므로 시간차를 둔다.
            setTimeout(() => {
                this.isFittingOn = true
            }, 100)
        }

    }
</script>

<style lang="scss">
    @import "~scss/benefit/mixins";
    #benefit {
        .fitting-tab {
            position: relative;
            height: 100%;
            .draw-type {
                position: absolute;
                right: 10px;
                top: 30px;
                text-align: right;
                input {
                    width: 20px;
                }
            }
            #fittingCanvas {
                position: absolute;
                left: 0;
                bottom: 0;
                &.loading {
                    background: url(~static/images/benefit/fitting/Rolling.gif) no-repeat center;
                }
                &.on {
                    @include transition(All 0.4s ease);
                }

            }
            .measure-btn {
                width: 30px;
                height: 30px;
                display: block;
                margin-bottom: 5px;
                background: url(~static/images/benefit/fitting/user.svg) no-repeat center;
                border-radius: 40px;
                border: 2px solid #ddd;
                background-size: 57%;
            }
            .upload-btn {
                width: 30px;
                height: 30px;
                display: block;
                margin-bottom: 5px;
                background: url(~static/images/benefit/fitting/upload.svg) no-repeat center;
                border-radius: 40px;
                border: 2px solid #ddd;
                background-size: 55%;

            }
            .fitmap-btn {
                margin-top: 20px;
                width: 30px;
                height: 30px;
                display: inline-block;

                &:before {
                    content: '';
                    background: url(~static/images/benefit/fitting/fitcheck_off.png) no-repeat 40% center;
                    width: 24px;
                    height: 24px;
                    border-radius: 24px;
                    border: 1px solid #ddd;
                    /*background-size: 29px 34px;*/
                    display: block;
                    margin-left: 3px;
                }
                &:after {
                    content: url(~static/images/benefit/fitting/fitcheck_on.png);
                    display: none;
                }
                &.active {
                    &:before {
                        background: url(~static/images/benefit/fitting/fitcheck_on.png) no-repeat center;
                    }
                }
                &:hover {
                    &:before {
                        background-color: #f1f1f1;
                    }
                }
            }
            .reset-btn {
                width: 30px;
                height: 20px;
                display: block;
                &:before {
                    margin: 0 auto;
                    content: '';
                    background: url(~static/images/benefit/btn_reset.svg) no-repeat;
                    width: 20px;
                    height: 20px;
                    background-size: 20px 40px;
                    display: block;
                }
                &:hover {
                    &:before {
                        background-position: 0 -20px;
                    }
                }
            }
            .btn-left {
                position: absolute;
                left: 15px;
                top: 75%;
                width: 24px;
                height: 56px;
                margin-top: -35px;
                background: url(~static/images/benefit/fitting/arrow_left.png) no-repeat;
                background-size: contain;
                opacity: 0.6;
            }
            .btn-right {
                position: absolute;
                right: 15px;
                top: 75%;
                width: 24px;
                height: 56px;
                margin-top: -35px;
                background: url(~static/images/benefit/fitting/arrow_right.png) no-repeat;
                background-size: contain;
                opacity: 0.6;
            }
            .toggle-ui {
                text-align: left;
                position: absolute;
                left: 20px;
                bottom: 20px;
            }
        }
    }
</style>