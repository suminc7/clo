const path = require('path');

exports.staticPath = function () {
    return process.env.NODE_ENV === 'production' ? this.s3Path() + '/' + this.prefixPath() : '/'
}
exports.siteRoot = function () {
    return process.env.SITE_ENV === 'admin' ? path.resolve(__dirname, '../benefit.Web/admin-benefit') : path.resolve(__dirname, '../benefit.Web/web-benefit')
}

exports.s3Path = function() {
    return 'https://s3.benefitbyclo.com'
}

exports.prefixPath = function() {
    return process.env.SITE_ENV === 'admin' ? 'admin/' : 'web/'
}

exports.staticAssetPath = function() {
    return process.env.SITE_ENV === 'admin' ? '../benefit.Web/admin-benefit/static' : '../benefit.Web/web-benefit/static'
}