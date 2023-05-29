import React, { useState } from 'react'
import { Provider, useDispatch, useSelector } from 'react-redux'
import { BrowserRouter, Routes, Route, Redirect } from 'react-router-dom'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/locale/zh_CN'
import enUS from 'antd/locale/en_US'
import { ConnectedRouter } from 'react-router-redux'
import ViewApp from '@/views/App'
import store from '@/store'
import Home from '@/views/Home'
import RenderPages from '@/components/RenderPages'
import rootRoutes from '@/config/routes.config.js'
import './index.css'
import ReactHooks from '@/questions/ReactHooks'
import Event from '@/questions/Event'
import Questions from '@/questions'

const App = (props) => {
  return (
    <ConfigProvider locale={zhCN}>
      <Provider store={store}>
        {/* <ConnectedRouter> */}
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<ViewApp />} />
            <Route path='/home' element={<Home />} />
            <Route path='/reacthooks' element={<ReactHooks />} />
            <Route path='/event' element={<Event />} />
            <Route path='/questions' element={<Questions />} />
          </Routes>
        </BrowserRouter>
        {/* </ConnectedRouter> */}
      </Provider>
    </ConfigProvider>
  )
}
export default App
