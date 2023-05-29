import React from 'react'
import { Route, Routes } from 'react-router-dom'
// import PageRoutes from './PageRoutes'
import Home from '@/views/Home'

const RenderPages = (props) => {
  const { routes = [] } = props
  console.log(routes, 'routes')

  const renderRoutes = () => {
    return routes.map((item, i) => {
      return <Route key={item.path} path={item.path} element={<item.component />} />
    })
  }
  console.log(renderRoutes(), 'kkk')

  return (
    <Routes>
      <Route path={'/'} element={<Home />} />
      {/* {renderRoutes()} */}
    </Routes>
  )

  // return <Routes>
  //     {routes && routes.map((route, i) => <PageRoutes key={route.path + i} {...route} />)}
  // </Routes>
}
export default RenderPages
