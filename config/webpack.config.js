const { merge } = require('webpack-merge')
const devConfig = require('./webpack.config.dev.js')
const proConfig = require('./webpack.config.pro.js')
const commonConfig = require('./webpack.config.common.js')

module.exports = (env) => {
    switch (true) {
        case env.development:
            return merge(commonConfig(env), devConfig)
        case env.production:
            return merge(commonConfig(env), proConfig)
        default:
            return new Error('合并错误')
    }
}