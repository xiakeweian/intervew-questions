import React from 'react'

import routes from '@/config/routes.config'
import * as RenderPages from './index'
import { Route, Routes } from 'react-router-dom'

// const PageRoute = ({ path, component: Comp, routes, ...rest }) => (
//     <Routes>
//         <Route
//             key={path}
//             path={path}
//             {...rest}
//             // element={props => routes ?  }
//             render={props => routes ? <RenderPages routes={routes} /> : <Comp {...props} />}
//         />

//     </Routes>

// )

{
  /* <Route path="/" element={<ViewApp />} /> */
}

const PageRoute = ({ path, component: Comp, routes, ...rest }) => {
  console.log(path, routes, rest, Comp, 'mmm')
  return (
    <Route
      key={path}
      path={path}
      element={
        <React.Fragment>
          <Comp path={path} {...rest} />
        </React.Fragment>
      }
      {...rest}
    />
  )

  // return { routes && !routes.length ? <Route key={path} path={path} element={<Comp path={path} {...rest} />} {...rest} /> : <RenderPages routes={routes} />
}

export default PageRoute
