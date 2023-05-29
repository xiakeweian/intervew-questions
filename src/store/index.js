import reducers from '../reducers'
import { configureStore } from '@reduxjs/toolkit'

import postsReducer from '../reducers/postsSlice'

// export default {

//     getInstantiate (initialState, history) {

//         // const reducer = combineReducers({
//         //     // homeReducer: reducers.homeReducer
//         //     ...reducers
//         // })

//         // const instance = compose(
//         //     applyMiddleware(routerMiddleware(history), sagaMiddleWare),
//         //     window.window.__REDUX_DEVTOOLS_EXTENSION__ ? window.window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
//         // )

//         // const store = configureStore(reducer, initialState)
//         const store = configureStore({
//             reducer: {
//                 posts: postsReducer,
//                 // ...reducers
//             }
//         })

//         return store

//     }

// }

export default configureStore({
  reducer: {
    // posts: postsReducer,
    ...reducers,
  },
})
