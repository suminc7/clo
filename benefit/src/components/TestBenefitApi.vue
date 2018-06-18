<template>
    <div class="test-benefit">
        <div class="sections">
            <section>
                <p>GET /accounts/me</p>
                <button @click="accounts">submit</button>
            </section>
            <section>
                <p>POST /files</p>
                <button @click="files">submit</button>
            </section>
            <section>
                <p>PUT [{{ this.uploadURL }}]</p>
                <input id="file" type="file" />
                <button @click="upload">submit</button>
            </section>
        </div>
        <div id="resultArea">{{ resultData }}</div>
    </div>
</template>

<script>
    import api from '../api/test-benefit'
    export default {
        name: 'TestBenefitApi',
        data() {
            return {
                name: 'TestBenefitApi',
                resultData: '',
                uploadURL: 'signedUploadUrl'
            }
        },
        methods: {
            accounts() {
                api.accounts()
            },
            files() {
                api.files().then(response => {
                    this.resultData = response.data
                    this.uploadURL = response.data.signedUploadUrl
                    console.log('response.data.signedUploadUrl', response.data.signedUploadUrl)
                })
            },
            upload() {
                const data = new FormData()
                const file = document.getElementById('file').files[0]
                data.append('file', file)

                const reader = new FileReader()
                reader.addEventListener('load', this.readFile)
                reader.readAsArrayBuffer(file)
            },

            readFile(event) {
                api.upload(this.uploadURL, event.target.result).then(response => {
                    this.resultData = response.data
                })

                //                        document.body.textContent = event.target.result

                // axios.put(url, event.target.result).then(response => {
                //     self.s3VersionId = response.headers['x-amz-version-id']
                //     console.log('readFile', response.headers['x-amz-version-id'])
                // }).catch(response => {
                //     self.s3VersionId = response.headers['x-amz-version-id']
                //     console.log('readFile', response.headers['x-amz-version-id'])
                // })
            }
        }

    }
</script>

<style lang="scss">
    .test-benefit {
        margin: 30px;
        position: relative;
        .sections {
            float: left;
            width: 500px;
        }
        section {
            margin-bottom: 50px;
        }

        #resultArea {
            float: left;
            margin-left: 100px;
            width: 500px;
            height: 500px;
            background-color: #f1f1f1;
            font-size: 12px;
            word-break: break-all;
        }
    }
</style>