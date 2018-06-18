const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const utils = require('./utils')

function resolve(dir) {
    return path.join(__dirname, '.', dir);
}

module.exports = (env, argv) => {
    return {
        entry: {
            'main': [
                'babel-polyfill',
                './src/main.js'
            ]
        },
        output: {
            path: utils.siteRoot(),
            filename: argv.mode === 'production' ? 'static/js/[chunkhash].js' : 'static/js/[name].js',
            chunkFilename: argv.mode === 'production' ? 'static/js/[chunkhash].js' : 'static/js/[name].js',
            publicPath: utils.staticPath(),
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    loader: 'babel-loader',
                    include: [
                        path.resolve(__dirname, "src")
                    ],
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
                        name: argv.mode === 'production' ? '[path][sha512:hash:base64:7].[ext]' : '[path][name].[ext]',
                        publicPath: utils.staticPath()
                    },
                },
                {
                    enforce: 'pre',
                    test: /\.(vue|js)$/,
                    loader: 'eslint-loader',
                    include: path.resolve(__dirname, "src"),
                    options: {
                        fix: true,
                        ignorePattern: 'ThrowPropsPlugin.js'
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
                        },
                        transformToRequire: {
                            video: ["poster"],
                            source: ["src"]
                        },
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
                filename: argv.mode === 'production' ? 'static/styles/[hash].css' : 'static/styles/[name].css',
                allChunks: true, // with code splitting
            }),
            new HtmlWebpackPlugin({
                inject: false,
                template: utils.siteRoot() + '/Views/Shared/_LayoutTemplate.cshtml',
                filename: utils.siteRoot() + '/Views/Shared/_Layout.cshtml',
            }),
        ],
        resolve: {
            extensions: ['.js', '.vue', '.json', 'scss'],
            alias: {
                'vue$': 'vue/dist/vue.esm.js',
                '@':  resolve('src'),
                'scss':  resolve('./sass'),
                'static': resolve('./static'),
                'assets': resolve('./benefit/assets'),
                'boot': resolve('./node_modules/bootstrap/scss'),
            }
        }
    }
}