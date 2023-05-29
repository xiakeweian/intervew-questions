import React from 'react'
import PageRoute from './PageRoute'
import * as Redirect from 'react-router-dom'

// const PageRoutes = ({ redirect, ...rest }) => (
//     redirect ? <Redirect key={rest.path} from={rest.path} to={redirect} {...rest} /> : <PageRoute {...rest} />
// )
const PageRoutes = ({ redirect, ...rest }) => {
  console.log(redirect, rest, 'ssssss')
  return redirect ? (
    <Redirect key={rest.path} from={rest.path} to={redirect} {...rest} />
  ) : (
    <PageRoute {...rest} />
  )
}

export default PageRoutes
