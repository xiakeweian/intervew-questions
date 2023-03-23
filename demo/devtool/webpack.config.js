const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, './dist'),
    chunkFilename: '[chunkhash].js',
    // clean: true, // 打包到dist文件之前将dist文件内容清除
    // assetModuleFilename: 'images/[name].[contenthash][ext]',
  },
  devtool: 'cheap-source-map',
  plugins: [new HtmlWebpackPlugin()],
}
