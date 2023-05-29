import Loadable from 'react-loadable'
import Loading from '../components/Loading'
export default [
  {
    path: '/',
    redirect: '/app',
    exact: true,
    strict: true,
    routes: [],
  },
  {
    path: '/app',
    exact: true,
    strict: true,
    // component: Loadable({
    //     loader: () => import('@/views'),
    //     loading: Loading
    // }),
    component: '@/views',
    routes: [],
  },
  // {
  //     path: '/home',
  //     component: Loadable({
  //         loader: () => import('@/views/Home'),
  //         loading: Loading
  //     }),
  //     // redirect: '/home',
  //     exact: true,
  //     strict: true,
  //     routes: []
  // }
]
