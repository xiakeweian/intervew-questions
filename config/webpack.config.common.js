const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

const toml = require('toml');
const yaml = require('yaml');
const json5 = require('json5');

module.exports = (env) => {
    return {
        mode: env.production ? 'production' : 'development',
        output: {
            filename: 'scripts/[name].[contenthash].js',
            path: path.resolve(__dirname, '../dist'),
            chunkFilename: '[chunkhash].js',
            clean: true, // 打包到dist文件之前将dist文件内容清除
            assetModuleFilename: 'images/[name].[contenthash][ext]', // 图片输出的名称以及存放位置
        },
        entry: path.resolve(__dirname, '../src/index.js'),
        target: 'web',
        resolve: {
            alias: {
                '@': path.resolve(__dirname, '../src'),
            },
            extensions: ['.js', '.jsx', '.json']
        },

        externalsType: 'script',
        // 定义外部第三方包别名,就是在windows上暴露的名称
        externals: {
            // jquery:'$'
            // 这里可以是数组，数组第一项是第三方包用script的地址，第二项是别名名称
            jquery: ['https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.js', '$']


        },
        module: {
            // 一般情况下，如果资源小于8k,就会自动生成base64格式图片，大于8k生成资源文件，但是同样也可以设置通过parser
            // asset后面加resource，inline，source,或者不加这些主要区别是什么呢？
            rules: [
                {
                    test: /\.png|jpe?g$/,
                    type: 'asset/resource', // asset/resource的话可以生成一个单独的文件并导出url,url是资源路径，只能加载资源文件
                    generator: {
                        // generator也是配置图片打包路径以及名称，如果output中设置assetModuleFilename了，generator也设置了，那么generator的优先级高于assetModuleFilename
                        filename: 'images/[name]-[contenthash][ext]',
                    },
                },
                {
                    test: /\.svg$/,
                    type: 'asset/inline', // asset/inline打包之后文件不会存在静态文件夹中，但是可以在线访问，且转成base64格式
                },
                {
                    test: /\.txt$/,
                    type: 'asset/source', // 可以导出资源的源代码
                },
                {
                    test: /\.webp$/,
                    type: 'asset', // 设置asset就是在资源文件和base64文件之间可以自由选择，主要取决于临界值maxSize，这是一个通用的资源类型，他是在resource类型和inline类型之前来回转换
                    parser: {
                        dataUrlCondition: {
                            maxSize: 4 * 1024 * 1024, // 最大值4M,当图片大小大于4M就生成资源文件，当图片小于4M就生成base64各式图片
                        },
                    },
                },
                // 所有.ts或者.tsx结尾的扩展名都必须经过awesome-typescript-loader处理
                {
                    test: /\.js$/,
                    exclude: /node_modules/, // 因为代码运行过程中不仅有业务代码也有node_modules中的代码，但是node_modules中代码不需要将es6代码转换成es5代码，所以要把这部分给排除
                    use: {
                        loader: 'babel-loader?cacheDirectory',
                    },
                },
                {
                    test: /\.(css|less)$/,
                    use: env.production
                        ? [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'less-loader']
                        : ['style-loader', 'css-loader', 'postcss-loader', 'less-loader'],
                },
                // { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
                // { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
                // { test: /\.ts$/, use: 'ts-loader' },
                {
                    test: /\.(woff|woff2?|ttf|eot|otf)(\?.*)?$/i,
                    type: 'asset/resource',
                    generator: {
                        // generator也是配置图片打包路径以及名称，如果output中设置assetModuleFilename了，generator也设置了，那么generator的优先级高于assetModuleFilename
                        filename: 'fonts/[name]-[contenthash][ext]',
                    },
                },
                { test: /\.(csv|tsv)$/, use: 'csv-loader' },
                { test: /\.xml$/, use: 'xml-loader' },
                { test: /\.toml$/, type: 'json', parser: { parse: toml.parse } },
                { test: /\.yaml$/, type: 'json', parser: { parse: yaml.parse } },
                { test: /\.json5$/, type: 'json', parser: { parse: json5.parse } },
            ],
        },
        plugins: [
            // 多页面应用可以配置多个HtmlWebpackPlugin
            new HtmlWebpackPlugin({
                template: './src/index.html',
                filename: 'index.html',
                inject: 'body', // script标签应该放哪里？body还是head
                title: 'app',
                // chunks:[]
            }),
            new MiniCssExtractPlugin({
                filename: 'css/[contenthash].css',
            }),
            new webpack.ProvidePlugin({'_':'lodash'})

        ],

        optimization: {
            runtimeChunk: 'single',
            moduleIds: 'deterministic',
            splitChunks: {
                cacheGroups: {
                    vendor: {
                        test: /[\\/]node_modules[\\/]/,
                        name: 'vendors',
                        chunks: 'all',
                    },
                },
            },
        },
    };
};
