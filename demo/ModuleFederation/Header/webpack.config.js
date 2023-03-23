const HtmlWebpackPlugin = require('html-webpack-plugin')
const { ModuleFederationPlugin } = require('webpack').container
module.exports = {
  mode: 'production',
  entry: './src/index.js',
  plugins: [
    new HtmlWebpackPlugin(),
    new ModuleFederationPlugin({
      name: 'header',
      filename: 'remoteEntry.js',
      remotes: {},
      exposes: {
        './Header': './src/Header.js',
      },
      shared: {},
    }),
  ],
}
