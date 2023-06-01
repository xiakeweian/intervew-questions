# webpack相关插件
## html-webpack-plugin
html-webpack-plugin的主要作用就是将为你生成一个 HTML5 文件，在 body 中使用 script 标签引入你所有 webpack 生成的 bundle。 只需添加该插件到你的 webpack 配置中。
 |属性|说明|
  |:---:|:---|
|template |也可以应用已有html文件作为模板文件(template)，|
|filename |打包时可以定义打包后的html文件的文件名（filename）,|
|inject|可以定义引入打包的bundle文件使用的script放到哪里，可以放到body或head(inject)|
|title|可以定义打包后html文件的title,可以是具体的文案也可以是动态匹配 |
|meta|可以配置html中的meta属性|
|favicon|可以设置标签图标|

```js
{ plugins: [
new HtmlWebpackPlugin({
 template: './src/index.html',
 filename: 'index.html',
 inject: 'body', // script标签应该放哪里？body还是head
 title: 'app',
 meta:{viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no','theme-color': '#4285f4'}
 favicon:'/dashboard/favicon.ico'
 // chunks:[]
})]}
```

## mini-css-extract-plugin

## terser-webpack-plugin
## webpack-bundle-analyzer
## css-minimizer-webpack-plugin
## optimize-css-assets-webpack-plugin
## pnp-webpack-plugin
## case-sensitive-paths-webpack-plugin
## webpack-manifest-plugin
## workbox-webpack-plugin
##  environment-plugin
