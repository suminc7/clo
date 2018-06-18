const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const utils = require('./utils')
const webpack = require('webpack');

function resolve (dir) {
    return path.join(__dirname, '.', dir);
}

module.exports = {
    entry: {
        'main': [
            'babel-polyfill',
            './admin/src/main.js'
        ]
    },
    output: {
        path: utils.siteRoot(),
        filename: process.env.NODE_ENV === 'production' ? 'static/js/[chunkhash].js' : 'static/js/[name].js',
        chunkFilename: process.env.NODE_ENV === 'production' ? 'static/js/[chunkhash].js' : 'static/js/[name].js',
        publicPath: utils.staticPath(),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: path.resolve(__dirname, "admin")
            },
            {
                test: /\.(sass|scss)$/,
                use: ExtractTextPlugin.extract({
                    use: 'css-loader!sass-loader'
                })
            },
            {
                test: /\.(png|jpg|gif|svg|woff|woff2|eot|ttf|mp4)$/,
                loader: 'file-loader',
                query: {
                    name: process.env.NODE_ENV === 'production' ? '[path][sha512:hash:base64:7].[ext]' : '[path][name].[ext]',
                    publicPath: utils.staticPath()
                },
            },
            {
                enforce: 'pre',
                test: /\.(vue|js)$/,
                loader: 'eslint-loader',
                exclude: /node_modules/,
                options: {
                    fix: true
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        scss: ExtractTextPlugin.extract({
                            use: 'css-loader!sass-loader',
                            fallback: 'vue-style-loader'
                        })
                    }
                }
            }
        ],

    },
    optimization: {
        splitChunks: {
            minSize: 1,
            name: "vendor",
            chunks: "all",
        },
        minimize: true,
    },
    plugins: [
        new ExtractTextPlugin({
            filename: process.env.NODE_ENV === 'production' ? 'static/styles/[hash].css' : 'static/styles/[name].css',
            allChunks: true, // with code splitting
        }),
        new HtmlWebpackPlugin({
            inject: false,
            template: utils.siteRoot() + '/Views/Shared/_LayoutTemplate.cshtml',
            filename: utils.siteRoot() + '/Views/Shared/_Layout.cshtml',
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            Popper: "popper.js",
        })
    ],
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@':  resolve('src')
        }
    },
    watch: false
}