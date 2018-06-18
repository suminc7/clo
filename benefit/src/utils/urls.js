
// const isLocal = window.location.href.indexOf('127.0.0.1') > -1 || window.location.href.indexOf('192.168.0') > -1
// const host = location.protocol + '//' + location.host
const _common_ = window._common_

let api = _common_.server.api
const s3url = _common_.server.s3url
const bucket = _common_.server.bucket

if (window.location.host.split('.')[1].indexOf('zara') > -1) {
    var myhost = window.location.host.split('.')[0]
    var capi = api.split('//')
    capi[1] = myhost + '.' + capi[1]
    api = capi.join('//')
}

const urls = {
    api,
    s3url,
    bucket
}

console.log('urls', urls)

export default urls
