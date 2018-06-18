<template>
    <form role="form" class="form" onsubmit="return false;">
        <div class="form-group">
            <label for="file">File</label>
            <input id="file" type="file" class="form-control"/>
        </div>
        <br>
        <button id="somaUpload" type="button" class="btn btn-primary">Upload</button>
        <button id="somaDownload" type="button" class="btn btn-primary">Download</button><br><br>
        <button id="somaCreate" type="button" class="btn btn-primary">create an artifact</button>
        <button id="somaStatus" type="button" class="btn btn-primary">status</button>
    </form>
</template>

<script>
    import axios from 'axios'
    import CryptoJS from 'crypto-js'
    export default {
        name: 'UploadForm',
        data() {
            return {
                name: 'UploadForm',
                filesData: null,
                artifactData: null,
                s3VersionId: ''
            }
        },
        methods: {
            auth() {

                var wordArray = CryptoJS.enc.Utf8.parse(`${accessKey}:${secret}`)
                var base64 = CryptoJS.enc.Base64.stringify(wordArray)
                console.log(base64)

                axios.defaults.headers.patch['Authorization'] = `Basic ${base64}`
                axios.defaults.headers.patch['Content-Type'] = `application/json`
                axios.defaults.headers.get['Authorization'] = `Basic ${base64}`
                axios.defaults.headers.get['Content-Type'] = `application/json`
                axios.defaults.headers.post['Authorization'] = `Basic ${base64}`
                axios.defaults.headers.post['Content-Type'] = `application/json`
                axios.defaults.headers.put['Content-Type'] = `application/octet-stream`

                axios.get(`https://shape.api.soma.bodylabs.com/accounts/me`).then(() => {
                    axios.post(`https://shape.api.soma.bodylabs.com/files`, {
                        fileType: 'png'
                    }).then(response => {
                        this.filesData = response.data
                    })
                })
            },
            uploadFile() {
                var self = this

                //                var output = document.getElementById('output')
                //                var output = document.getElementById('output')
                document.getElementById('somaUpload').onclick = () => {
                    var url = this.filesData.signedUploadUrl

                    var data = new FormData()
                    var file = document.getElementById('file').files[0]
                    data.append('file', file)

                    function readFile(event) {
                        //                        document.body.textContent = event.target.result

                        axios.put(url, event.target.result).then(response => {
                            self.s3VersionId = response.headers['x-amz-version-id']
                            console.log('readFile', response.headers['x-amz-version-id'])
                        })
                    }

                    function changeFile() {
                        var reader = new FileReader()
                        reader.addEventListener('load', readFile)
                        reader.readAsArrayBuffer(file)
                    }
                    changeFile()

                //                    axios.put(url, {
                //                        data
                //                    })
                //                        .then(function(response) {
                //                            console.log('put complete: ', response)
                //                        })
                //                        .catch(function() {
                //
                //                        })
                }

                document.getElementById('somaDownload').onclick = () => {
                    console.log(this.s3VersionId)
                    var fileId = this.filesData.fileId
                    //                    axios.get(`https://shape.api.soma.bodylabs.com/files/${fileId}/download?redirect=false`)
                    axios.patch(`https://shape.api.soma.bodylabs.com/files/${fileId}`, {
                        s3VersionId: this.s3VersionId
                    }).then(response => {
                        console.log(response.data.status)

                        axios.get(`https://shape.api.soma.bodylabs.com/files/${fileId}/download?redirect=false`).then(response => {
                            console.log(response.data.status)
                        })
                    })
                }

                document.getElementById('somaCreate').onclick = () => {
                    var fileId = this.filesData.fileId

                    axios.post(`https://shape.api.soma.bodylabs.com/artifacts`, {
                        'serviceType': 'ShapeMeasurementService',
                        'serviceVersion': 'v1',
                        'dependencies': {
                            'photo': { 'fileId': fileId }
                        },
                        'parameters': {
                            'gender': 'female',
                            'weight': 64,
                            'height': 170
                        }
                    }).then(response => {
                        this.artifactData = response.data
                    //                        console.log(response.data.artifactId)
                    })
                }

                var interval
                const checkStatus = () => {
                    axios.get(`https://shape.api.soma.bodylabs.com/artifacts/${this.artifactData.artifactId}`).then(response => {
                        console.log(response.data.status)

                        if (response.data.status === 'ready') {
                            clearInterval(interval)
                            downloadArtifact()
                        }
                    })
                }

                const downloadArtifact = () => {
                    axios.get(`https://shape.api.soma.bodylabs.com/artifacts/${this.artifactData.artifactId}/components/mesh?redirect=false`).then(response => {
                        console.log(response.data.signedDownloadUrl)
                    })
                }
    
                document.getElementById('somaStatus').onclick = () => {
                    interval = setInterval(checkStatus, 5000)
                    checkStatus()
                }
            }
        },
    
        mounted() {
            this.auth()
            this.uploadFile()
        }

    }
</script>

<style lang="scss"></style>