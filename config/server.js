const Webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const { merge } = require('webpack-merge')
const devConfig = require('./webpack.config.dev.js')
const commonConfig = require('./webpack.config.common.js')
const webpackConfig = merge(commonConfig({ development: true }), devConfig)


const compiler = Webpack(webpackConfig);
const devServerOptions = { ...webpackConfig.devServer };
const server = new WebpackDevServer(devServerOptions, compiler);

server.startCallback(() => {
    console.log('Successfully started server on http://localhost:' + webpackConfig.devServer.port);
});