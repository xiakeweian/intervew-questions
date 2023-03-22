const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
module.exports = {
    mode: 'production',
    entry: './src/index.js',
    plugins: [
        new HtmlWebpackPlugin(),
        new ModuleFederationPlugin({
            name: 'home',
            filename: 'remoteEntry.js',
            remotes: {
                header: 'header@http://localhost:3001/remoteEntry.js'
            },
            exposes: {
                './HomeList': './src/HomeList.js'
            }
        })
    ]

};