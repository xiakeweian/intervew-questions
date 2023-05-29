const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = {
  output: {
    filename: 'scripts/[name].[contenthash].js',
    publicPath: './',
  },
  optimization: {
    minimize: true, // 启动压缩
    minimizer: [new CssMinimizerWebpackPlugin(), new TerserPlugin()], // 这个用于生产环境下css压缩,js压缩,只有设置 mode: 'production'的时候有效 ，设置环境变量的时候区分
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[contenthash].css',
    }),
  ],
  performance: {
    // webpack给出错误或警告的时候不展示
    hints: false,
  },
  devtool: false, // 生产环境下关闭devtool
}
