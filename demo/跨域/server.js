const express = require('express')

// 方法1CORS跨域设置res.header('Access-Control-Allow-Origin', '*')
const app = express()
const port = 3000
app.use(express.static(__dirname))

app.listen(3000)
var app1 = express()

app1.get('/', function (req, res) {
  // res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000')
  res.send('hello')
})
app1.listen(3001)

// console.log('1')
// 宏任务
// setTimeout(function () {
//     console.log('2')
//     process.nextTick(function () {
//         console.log('3')
//     })
//     new Promise(function (resolve) {
//         console.log('4')
//         resolve()
//     }).then(function () {
//         console.log('5')
//     })
// })
// // 微任务
// process.nextTick(function () {
//     console.log('6')
// })
// // 微任务
// new Promise(function (resolve) {
//     console.log('7')
//     resolve()
// }).then(function () {
//     console.log('8')
// })
// // 宏任务
// setTimeout(function () {
//     console.log('9')
//     process.nextTick(function () {
//         console.log('10')
//     })
//     new Promise(function (resolve) {
//         console.log('11')
//         resolve()
//     }).then(function () {
//         console.log('12')
//     })
// })

setImmediate(() => {
  console.log('第一行setImmediate')
}, 0)
//宏任务
var time = setInterval(() => {
  console.log('第二行 setInterval')
  clearInterval(time)
}, 0)
//宏任务
setTimeout(() => {
  console.log('第三行 setTimeout')
}, 0)

//宏任务
var time1 = setInterval(() => {
  console.log('第四行 setInterval')
  clearInterval(time1)
}, 0)
// 宏任务
setImmediate(() => {
  console.log('第五行setImmediate')
}, 0)
// 微任务
process.nextTick(() => {
  console.log('第六行 nextTick')
})
// 微任务
new Promise((resolve, reject) => {
  reject('reject')
  console.log('第七行Promise')
  resolve('resolve')
})
  .then(() => {
    console.log('第八行 Promise then resolve')
  })
  .catch(() => {
    console.log('第八行 Promise then reject')
  })
