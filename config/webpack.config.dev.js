const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack'); // 用于访问内置插件
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    // output: {
    //     publicPath: 'http://localhost:8080/'
    // },
    output: {
        filename: 'scripts/[name].js',
        publicPath: '/',
    },
    devServer: {
        static: './dist',
        compress: true, // 增加的压缩头部，当为true的时候，请求过来的时候是压缩的，Content-Encoding: gzip
        port: 9000,
        host: '0.0.0.0', // 配置为0.0.0.0之后局域网内别的小伙伴也都可以访问你的服务
        historyApiFallback: true, // 配置为true，路由无论怎么写都不会为true
        hot: true, // 设置为true实现模块热替换，这是webpack-dev-server默认值，
        liveReload: false, // 热加载 设置为true之后，代码发生变化会自动刷新页面
        client: {
            overlay: false, // 当有错误的eslint或者代码错误时候不显示覆盖层
        },
    },
    devtool: 'eval-cheap-module-source-map', // 开发环境推荐使用这个，因为这个可以锁定代码行数，单独打包sourceMap文件，且不包含列信息而且简化为只包含对应行
    // plugins: [
    //     // 它将 bundle 内容展示为一个便捷的、交互式、可缩放的树状图形式。
    //     new BundleAnalyzerPlugin({
    //         analyzerMode: 'server',
    //         analyzerHost: '127.0.0.1',
    //         analyzerPort: 8888,
    //         reportFilename: 'report.html',
    //         defaultSizes: 'stat',
    //         openAnalyzer: false,
    //         generateStatsFile: true,
    //         statsFilename: 'stats.json',
    //         statsOptions: { source: false },
    //         logLevel: 'info'
    //     }),

    // ],
    // optimization: {
    //     usedExports: true, // 只导出被使用的模块
    //     minimize: true // 启动压缩
    // },
};
