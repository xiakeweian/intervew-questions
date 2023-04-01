import compose from './compose'

export default function applyMiddleware(...middlewares) {
  return (createStore) => (reducer, preloadState) => {
    const store = createStore(reducer, preloadState)
    const middlewareAPI = {
      dispatch: (action) => dispatch(action),
      getState: store.getState,
    }
    const chain = middlewares.map((middleware) => middleware(middlewareAPI))
    const dispatch = compose(...chain)(store.dispatch)

    return {
      ...store,
      dispatch,
    }
  }
}
