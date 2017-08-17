var webpack = require("webpack"),
    path = require('path'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
ExtractTextPlugin = require("extract-text-webpack-plugin"),
    pkg = require('./package.json');


// 根据环境来获取不同的静态资源部署的根路径
var publicPath = '/dist';


var config = {
    entry: {
        app: path.join(__dirname, 'app.js'),
        vendor: [
            'react',
            'react-dom'
        ],

    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js',
        chunkFilename: '[name].js',
        publicPath: publicPath + '/',
        jsonpFunction: 'sogouamsecurity'
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.json', '.es6.js'],
    },
    // resolveLoader: {
    //     root: path.join(__dirname, 'node_modules')
    // },

    module: {
        loaders: [
            {
                test:/\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)([\?]?.*)$/,
                loader: 'url?limit=10000&name=image/[name].[md5:hash:hex:7].[ext]'
            },
            {
                test: /\.(css)$/i,
                include: [
                    path.resolve(__dirname, 'src/common/'),
                    path.resolve(__dirname, 'asset/css/'),
                ],
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
            },
            //针对新版本antd还有一些其他的使用less语法的样式模块进行处理，主要是对antd的主体进行动态加载
            {
                test: /\.less/i,
                include: [
                    path.resolve(__dirname, "asset/css/"),
                    path.resolve(__dirname, "node_modules/antd/")
                ],
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
            },
            {
                test: /\.(js|jsx)$/i,
                exclude: /node_modules/,
                loader: 'babel',
                //https://github.com/babel/babel-loader#options
                //use cache to speed up transform,
                //
                //#generator ****.json.gzip files in pwd when use babel-loader cacheDirectory attribute
                //https://github.com/davezuko/react-redux-starter-kit/issues/579
                //
                //#npm bug About os.tmpdir() sometimes output system tmp directory, sometimes pwd
                //https://github.com/npm/npm/issues/4531
                // cacheDirectory: os.tmpDir()
                query: {cacheDirectory: true}
            }]
    },
    plugins: [
        new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /^\.\/zh\-cn$/),
        // //生成vendor chunk，抽取第三方模块单独打包成独立的chunk
        // new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.[hash].js'),
        // //抽取webpack loader公共部分的代码到manifest.js中，避免每次打包时hash发生变化
        // new webpack.optimize.CommonsChunkPlugin({
        //     names: ['vendor', 'manifest']
        // }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'vendor.js',
            chunks: ['app']
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'manifest',
            filename:'manifest.js', //仅包含webpack运行时环境和映射表
            chunks: ['vendor']
        }),

        //注入环境变量
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),

        new ExtractTextPlugin('[name].css', {
            allChunks: false
        }),
    ]
}
//从命令行中传递随机的mock端口号，避免多开造成的端口号冲突问题
var mockport, serverport, pubtype;
process.argv.forEach(function(val, index) {
    if (val === '--mockport') {
        mockport = process.argv[index + 1];
        return false;
    }
    if (val === '--port') {
        serverport = process.argv[index + 1];
    }

    if(val === '--pubtype'){
        pubtype = process.argv[index + 1];
    }
});

//在模块id（通常是数字）前添加模块路径的注释，帮助阅读，一般在开发环境中需要
config.output.pathinfo = true;

config.devServer = {
    proxy: {
        '**/*.action': {
            target: 'http://localhost:' + mockport,
            bypass: function(req, res, proxyOptions) {
                //处理jsp页面默认的action
                if (req.headers.accept.indexOf('html') != -1) {
                    return 'app.html';
                }
            }
        },
        '/crossDomainProxy/*': {
            // target: 'http://img.store.sogou-op.org',
            // target: 'http://img01.sogoucdn.com',
            target: 'http://localhost:' + serverport,
            rewrite: function(req) {
                req.url = '/asset/images/guide/ie6_bg.png'
            }
        }
    }
};
config.devtool = '#source-map';

module.exports = config;