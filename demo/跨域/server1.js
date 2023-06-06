const express = require('express')

// 方法2 jsonp跨域
const app = express()
const port = 3000
app.use(express.static(__dirname))

app.listen(3000)
var app1 = express()
app2.use(cors())

app1.get('/', function (req, res) {
  console.log(res, res.query, req, req.query, 'sss')
  res.send(req.query.callback + '("你好，我是被请求者")')
})
app1.listen(3001)
