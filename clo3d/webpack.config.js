const config = require('./config');
const path = require('path');
const utils = require('./utils')
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

function resolve (dir) {
    return path.join(__dirname, '.', dir);
}


module.exports = {
	entry: {
        'all': './src/all.js',
        'main': './src/main.js'
	},
	output: {
		path: config.fileRoot,
		filename: process.env.NODE_ENV === 'production' ? 'static/js/[chunkhash].js' : 'static/js/[name].js',
        chunkFilename: process.env.NODE_ENV === 'production' ? 'static/js/[chunkhash].js' : 'static/js/[name].js',
        publicPath: utils.staticPath(),
	},
	module: {
		rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                include: path.resolve(__dirname, "src"),
            },
            {
                test: /\.(sass|scss)$/,
                use: ExtractTextPlugin.extract({
                    use: 'css-loader!sass-loader'
                }),
                include: path.resolve(__dirname, "sass"),
            },
			{
				test: /\.json$/,
				loader: 'json-loader'
			},
			{
				test: /\.(png|jpg|gif|svg|mp4|eot|ttf|woff|woff2)$/,
				loader: 'file-loader',
                options: {
                    name: process.env.NODE_ENV === 'production' ? '[path][sha512:hash:base64:7].[ext]' : '[path][name].[ext]',
                    publicPath: utils.staticPath()
                }
			},
            {
                enforce: 'pre',
                test: /\.vue$/,
                loader: 'eslint-loader',
                exclude: [
                    /node_modules/,
                    '/externals/'
                ],
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
					},
                    transformToRequire: {
                        video: ["poster"],
                        source: ["src"]
                    },
				}
			}
		],

	},
    plugins: [
        new ExtractTextPlugin({
            filename: process.env.NODE_ENV === 'production' ? 'static/styles/[contenthash].css' : 'static/styles/[name].css',
            allChunks: true, // with code splitting
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'all',
            filename: process.env.NODE_ENV === 'production' ? 'static/js/[chunkhash].js': 'static/js/[name].js',
        }),
        new HtmlWebpackPlugin({
            inject: false,
            template: '../WEB-CLO3D/Views/Shared/_LayoutTemplate.cshtml',
            filename: '../WEB-CLO3D/Views/Shared/_Layout.cshtml',
        }),
        new webpack.DefinePlugin({
            PRODUCTION: process.env.NODE_ENV === 'production' ? JSON.stringify(true) : JSON.stringify(false),
        })
    ],

	resolve: {
        extensions: ['.js', '.vue', '.json'],
		alias: {
            'vue$': 'vue/dist/vue.esm.js',
			'@':  resolve('src'),
            'scss': resolve('./node_modules/bootstrap/scss'),
            'sass': resolve('./sass'),
            'static': resolve('./static'),
            'bootstrapGrid': resolve('./node_modules/bootstrap/scss/bootstrap-grid'),
		}
	},
	devServer: {
		hot: true,
		port: 8080,
		proxy: {
			'**': {
				target: 'http://localhost:8000/',
				secure: false,
				prependPath: false
			}
		},
		publicPath: '/js/'
	},

	watch: false
}

if (process.env.ENV_TYPE !== 'local') {
    module.exports.module.rules = module.exports.module.rules.filter(function(o){
        return o.loader !== 'eslint-loader'
    })
}

if (process.env.NODE_ENV === 'production') {
    //module.exports.devtool = '#source-map'
    // http://vue-loader.vuejs.org/en/workflow/production.html
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            compress: {
                warnings: false,
                drop_console: true
            },
            output: {
                comments: false
            }
        })
    ])
}