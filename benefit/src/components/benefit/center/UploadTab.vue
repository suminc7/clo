<template>
    <div class="tabs upload-tab">
        <div>AVATAR UPLOAD</div>
        <a href="#" @click.prevent="offUpload" class="close-btn"></a>
        <button :disabled="isUploading" class="btn-round sm upload-btn">
            <span class="uploadInputText" :class="{active: isUploading}">UPLOAD FILE</span>
            <rolling-btn :active="isUploading" />
            <label for="uploadInput"><input id="uploadInput" @change="uploadChange" type="file"/></label>
        </button>
        <ul class="file-items">
            <li v-for="item in avatarBoxes">
                <a class="item-btn" href="#" @click.prevent="itemClick(item)">
                    {{ item.name }}
                </a>
                <a href="#" @click.prevent="deleteAvatarBox(item)" class="item-close-btn"></a>
            </li>
        </ul>
        <!--<a href="#" @click.prevent="saveClick" :class="{disabled: !fileId}" class="btn-round save-btn">SAVE AVATAR</a>-->
    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex'
    import RollingBtn from '../btns/RollingBtn'
    export default {
        components: { RollingBtn },
        name: 'UploadTab',
        data() {
            return {
                name: 'UploadTab',
                isUploading: false
            }
        },
        computed: {
            ...mapGetters('avatar', [
                'avatarBoxes'
            ])
        },
        methods: {
            checkContains(e) {
                if (!document.querySelector('.upload-tab').contains(e.target)) {
                    this.offUpload()
                }
            },
            ...mapActions('upload', [
                'offUpload'
            ]),
            ...mapActions('avatar', [
                'avatarByFile',
                'avatarByFileId',
                'getAvatarBoxes',
                'deleteAvatarBox'
            ]),
            itemClick(item) {
                console.log('--------------------itemClick', item)
                if (this.isUploading) return
                this.isUploading = true
                this.offUpload({})
                this.avatarByFileId(item)
                    .then(() => {
                        this.isUploading = false
                    })
                    .catch(() => {
                        this.isUploading = false
                    })
            },
            uploadChange(e) {
                if (this.isUploading) return
                this.isUploading = true
                this.offUpload({})
                this.avatarByFile({ file: e.target })
                    .then(() => {
                        e.target.value = ''
                        this.isUploading = false
                    })
                    .catch(() => {
                        e.target.value = ''
                        this.isUploading = false
                    })
            }
        },
        mounted() {
            this.getAvatarBoxes()
                .then(data => {
                    this.fileItems = data
                })

            document.getElementById('benefit').addEventListener('click', this.checkContains)
        },
        destroyed() {
            document.getElementById('benefit').removeEventListener('click', this.checkContains)
        }

    }
</script>

<style lang="scss">
    @import "~scss/benefit/mixins";
    #benefit {
        .upload-tab {
            overflow: auto;
            padding: 40px 20px;
            height: 100%;
            width: 80%;
            position: absolute;
            right: 0;
            top: 0;
            z-index: 100000;
            background-color: hsla(0, 0%, 95%, 0.8);

            & label {
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                z-index: 10;
                cursor: pointer;
            }

            &.slide-enter-active, &.slide-leave-active {
                transition: all 0.3s ease-in-out
            }
            &.slide-enter, &.slide-leave-to /* .fade-leave-active below version 2.1.8 */ {
                right: -70%
            }

            .file-items {
                margin-top: 20px;
                text-align: left;
                li {
                    margin-top: 5px;
                    &:first-child {
                        margin-top: 0;
                    }
                    &:hover {
                        .item-close-btn {
                            display: inline-block;
                        }
                    }
                    .item-btn {
                        display: inline-block;
                        border-radius: 10px;
                        padding: 5px 10px;
                        background-color: #aaa;
                        color: white;
                    }
                    .item-close-btn {
                        background: url(~static/images/benefit/fitting/cancel-black.svg) no-repeat 50%;
                        background-size: 10px;
                        width: 20px;
                        height: 20px;
                        display: none;
                        vertical-align: top;
                    }
                }
            }

            #uploadInput {
                position: absolute;
                width: 1px;
                height: 1px;
                padding: 0;
                margin: -1px;
                overflow: hidden;
                clip: rect(0,0,0,0);
                border: 0;
            }

            .upload-btn {
                margin: 10px auto 0 auto;
                position: relative;
                cursor: pointer;
                @include transition(all 0.6s);
                .uploadInputText {
                    &.active {
                        display: none;
                    }
                }
            }
        }
    }
</style>