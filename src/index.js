import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.js'
import 'antd/dist/reset.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)

// 模块热替换 devServer配置了 hot:true之后，module.hot就为true了
if (module.hot) {
  module.hot.accept()
}
