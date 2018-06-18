<template>
    <div ref="benefitContainer" class="benefit-container" :style="styleObject">
        <div class="top">BENEFIT
            <a class="close" href="#" @click.prevent="activate(false)"></a>
        </div>
        <center-view/>
        <popup-view/>
        <div v-if="isLoading" class="loading">
            <div class="spinner">
                <div class="bounce1"></div>
                <div class="bounce2"></div>
                <div class="bounce3"></div>
            </div>
            <div class="status">{{ loadingStatus }}</div>
        </div>
    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex'
    import CenterView from './center/CenterView'
    import PopupView from './popup/PopupView'

    const containWid = 300
    const containHei = 550

    export default {
        components: {
            PopupView,
            CenterView
        },
        name: 'BenefitContainer',
        data() {
            return {
                name: 'BenefitContainer',
                styleObject: {
                    width: containWid + 'px',
                    height: containHei + 'px'
                }
            }
        },
        computed: {
            ...mapGetters([
                'isLoading',
                'loadingStatus'
            ])
        },
        methods: {
            ...mapActions([
                'activate'
            ])
        },
        mounted() {
            const fittingCanvas = document.getElementById('fittingCanvas')
            if (window.innerWidth < 400) {
                const wid = (window.innerWidth - 40)
                const hei = (window.innerHeight - 120)
                this.styleObject.width = wid + 'px'
                this.styleObject.height = hei + 'px'
                window.scrollTop = 1

                const fittingHei = hei
                const fittingWid = hei / containHei * containWid

                fittingCanvas.height = fittingHei
                fittingCanvas.width = fittingWid
                fittingCanvas.style.left = (wid - fittingWid) / 2 + 'px'
            } else {
                fittingCanvas.height = containHei
                fittingCanvas.width = containWid
            }
        }

    }
</script>

<style lang="scss">
    @import "~scss/benefit/variables";
    @import "~scss/loading";
    #benefit {

        .benefit-container {
            width: 300px;
            height: $hei;
            background-color: #ffffff;
            border-radius: $border-radius;
            box-shadow: 0 0 10px 0 rgba(0,0,0,0.22);
            overflow: hidden;

            position: absolute;
            right: 20px;
            top: 75px;
            display: flex;
            flex-direction: column;

            @media(min-width: 450px){
                right: 30px;
                top: 100px;
            }

            .top {
                padding-top: 10px;
                height: 22px;
                width: 100%;
                text-align: center;
                color: #999;
                font-size: 11px;
                letter-spacing: 2px;
                position: absolute;
                left: 0;
                top: 0;
                z-index: 10000;
                .close {
                    display: inline-block;
                    position: absolute;
                    left: 0;
                    top: 0;
                    width: 22px;
                    height: 22px;
                    background: url("~static/images/benefit/icon_x.svg") no-repeat center;
                    background-size: 8px 8px;
                }

            }

            > .loading {
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                border-radius: $border-radius;
                overflow: hidden;
                z-index: 99999999999999;
                .status {
                    font-size: 12px;
                    color: white;
                    position: absolute;
                    left: 50%;
                    top: 57%;
                    z-index: 100000;
                    -webkit-transform: translateX(-50%);
                    -ms-transform: translateX(-50%);
                    transform: translateX(-50%);
                }
                .spinner {
                    position:absolute;
                    top: 0;
                    left: 0;
                    background-color: rgba(0,0,0,0.36);
                    width: 100%;
                    height: 100%;
                    padding: $hei*0.5 0;
                    text-align: center;
                    z-index:2;
                }

                .spinner > div {
                    width: 18px;
                    height: 18px;
                    background-color: #fff;
                    border-radius: 100%;
                    display: inline-block;
                    -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;
                    animation: sk-bouncedelay 1.4s infinite ease-in-out both;
                }

                .spinner .bounce1 {
                    -webkit-animation-delay: -0.32s;
                    animation-delay: -0.32s;
                }

                .spinner .bounce2 {
                    -webkit-animation-delay: -0.16s;
                    animation-delay: -0.16s;
                }

                @-webkit-keyframes sk-bouncedelay {
                    0%, 80%, 100% {
                        -webkit-transform: scale(0)
                    }
                    40% {
                        -webkit-transform: scale(1.0)
                    }
                }

                @keyframes sk-bouncedelay {
                    0%, 80%, 100% {
                        -webkit-transform: scale(0);
                        transform: scale(0);
                    } 40% {
                          -webkit-transform: scale(1.0);
                          transform: scale(1.0);
                      }
                }

            }
        }
    }
</style>