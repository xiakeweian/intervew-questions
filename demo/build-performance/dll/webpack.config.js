const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    filename: 'scripts/[name].[contenthash].js',
    path: path.resolve(__dirname, './dist'),
    chunkFilename: '[chunkhash].js',
    // clean: true, // 打包到dist文件之前将dist文件内容清除
    assetModuleFilename: 'images/[name].[contenthash][ext]',
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new webpack.DllReferencePlugin({
      manifest: path.resolve(__dirname, 'dist/dll/lodash_manifest.json'),
    }),
    new AddAssetHtmlPlugin({
      filepath: path.resolve(__dirname, 'dist/dll/lodash_56b7209497b3db11f554.js'),
      publicPath: './',
    }),
  ],
}
