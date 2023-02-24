
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')


module.exports = {
    output: {
        filename: 'scripts/[name].[contenthash].js',
        publicPath: 'http://localhost:8080/'
    },
    optimization: {
        minimizer: [new CssMinimizerWebpackPlugin(), new TerserPlugin()] //这个用于生产环境下css压缩,js压缩,只有设置 mode: 'production'的时候有效 ，设置环境变量的时候区分
    },


    performance: {
        //webpack给出错误或警告的时候不展示
        hints: false
    },
    devtool: false

};