const express = require('express')
const cors = require('cors')
const { createProxyMiddleware } = require('http-proxy-middleware')



// 服务端代理
const app = express()
app.use(express.static(__dirname))
app.listen(3000)

var app1 = express()
// 使用cors默认允许跨域
app1.use('/api', createProxyMiddleware({
    target: 'http://localhost:3001',
    changeOrigin: true,
    pathRewrite: (path) => path.replace(/^\/api/, '')
}))
// app1.use(cors())
app1.get('*', function (req, res) {
    console.log('coming')
    res.send('hello,createProxyMiddleware')
})
app1.listen(3001)




