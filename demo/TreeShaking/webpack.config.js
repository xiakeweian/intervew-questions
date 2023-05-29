const path = require('path')
const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, './src/index.js'),
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, './dist'),
        chunkFilename: '[chunkhash].js',
        publicPath: './',

    },
    plugins: [
        new htmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            inject: 'body', // script标签应该放哪里？body还是head
            title: 'app',
            // chunks:[]
        }),
    ],

    optimization: {
        sideEffects: true,
        usedExports: true,
    }
}