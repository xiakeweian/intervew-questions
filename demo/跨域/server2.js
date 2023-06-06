const express = require('express')
const cors = require('cors')

// 配置cors
const app = express()
app.use(express.static(__dirname))
app.listen(3000)

var app1 = express()
// 使用cors默认允许跨域
app1.use(cors())
// app1.use(cors({origin:['http://localhost:3000']}))
app1.get('/', function (req, res) {
  res.send('hello，cors')
})
app1.listen(3001)
