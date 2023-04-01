const http2 = require('spdy'),
  fs = require('fs')

const options = {
  key: fs.readFileSync('./server.key'),
  cert: fs.readFileSync('./server.crt'),
}

const server = http2
  .createServer(options, function (request, response) {
    response.end('Hello world!')
  })
  .listen(8080)

// 多路复用：允许浏览器在一个 TCP 连接中包含多个请求，从而使得浏览器可以并行请求所有资源。

// 服务器推送：服务器可以在浏览器需要之前主动推送 web 资源 (CSS，JS， 图片)，这样可以减少请求数，提高页面加载速度。

// 串流优先：允许浏览器指定资源的优先级。比如，浏览器可以在所有样式和 JavaScript 之前优先请求 HTML 来渲染。

// 头压缩：所有的 HTTP/1.1 请求中必须要包含一些经常冗余的头信息，不过 H2 强制所有的 HTTP 报头以一种压缩的格式进行发送。

// 事实强制加密：尽管加密不是必须的，大多数主流浏览器只支持使用 TLS (HTTPS) 的 H2。
