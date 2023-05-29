const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  mode: 'production',
  entry: {
    index: './src/index.js', // 第一个入口文件
    chunk1: './src/chunk1.js', // 第二个入口文件
  },
  output: {
    filename: '[name].[hash].js', // 出口文件
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css', // chunkhash => contenthash
    }),
  ],
}
