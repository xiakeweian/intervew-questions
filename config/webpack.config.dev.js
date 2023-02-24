const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack'); // 用于访问内置插件
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin


module.exports = {
    // output: {
    //     publicPath: 'http://localhost:8080/'
    // },
    output: {
        filename: 'scripts/[name].js',
        publicPath: '/'
    },
    devtool: "inline-source-map",
    devServer: {
        static: './dist',
        compress: true,//增加的压缩头部，就是文件在
        port: 9000,
        historyApiFallback: true
    },
    devtool: "cheap-module-source-map",

    // plugins: [
    //它将 bundle 内容展示为一个便捷的、交互式、可缩放的树状图形式。
    // new BundleAnalyzerPlugin({
    //     analyzerMode: 'server',
    //     analyzerHost: '127.0.0.1',
    //     analyzerPort: 8888,
    //     reportFilename: 'report.html',
    //     defaultSizes: 'stat',
    //     openAnalyzer: false,
    //     generateStatsFile: true,
    //     statsFilename: 'stats.json',
    //     statsOptions: { source: false },
    //     logLevel: 'info'
    // }),

    // ],


}