var path = require('path');

module.exports = {
    entry: path.resolve(__dirname, './src/index.jsx'),
    output: {
        path: path.resolve(__dirname, './lib'),
        library: 'Panel',
        libraryTarget: 'umd',
        filename: 'index.js'
    },
    externals: {
        'react'       : 'umd react',
        'react-dom'   : 'umd react-dom'
    },
    module: {
        loaders: [{
            test:/\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)([\?]?.*)$/,
            loader: 'url?limit=10000&name=image/[name].[md5:hash:hex:7].[ext]'
        }, {
            test: /\.css$/, // Only .css files
            loader: 'style!css' // Run both loaders
        },{
            test: /\.jsx$/,
            loader: 'babel'
        }]
    }
}