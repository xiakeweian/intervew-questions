const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: 'production',
    entry: {
        lodash: ['lodash']
    },
    output: {
        filename: '[name]_[hash].js',
        path: path.resolve(__dirname, 'dist/dll'),
        library: '[name]_[hash]',
        // clean: true, // 打包到dist文件之前将dist文件内容清除

    },
    plugins: [
        new webpack.DllPlugin({
            name: '[name]_[hash]',
            path: path.resolve(__dirname, 'dist/dll/[name]_manifest.json')
        })
    ]

};