export default function createStore(reducer, preloadState, enhancer) {
  let currentReducer = reducer
  let currentState = preloadState
  let currentEnhancer = enhancer
  let listeners = []

  if (typeof preloadState === 'function' && typeof enhancer === 'undefined') {
    currentEnhancer = preloadState
    currentState = undefined
  }

  if (typeof currentEnhancer === 'function') {
    return currentEnhancer(createStore)(currentReducer, currentState)
  }

  function dispatch(action) {
    currentState = currentReducer(currentState, action)
    const len = listeners.length
    for (let i = 0; i < len; i++) {
      listeners[i]()
    }
  }

  function getState() {
    return currentState
  }

  function subscribe(listener) {
    listeners.push(listener)

    return function unsubscribe(listener) {
      listeners.splice(listeners.indexOf(listener), 1)
    }
  }

  function replaceReducer(nextReducer) {
    currentReducer = nextReducer
  }

  dispatch({ type: '@@redux/init' })

  return {
    dispatch,
    getState,
    subscribe,
    replaceReducer,
  }
}
