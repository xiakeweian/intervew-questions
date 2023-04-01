export default function combineReducer(reducers) {
  const reducerKeys = Object.keys(reducers)
  const len = reducerKeys.length

  return function combination(state = {}, action) {
    let currentState = {}
    let hasChanged = false

    for (let i = 0; i < len; i++) {
      const key = reducerKeys[i]
      const reducer = reducers[key] //一个函数
      const preStateForKey = state[key]
      const nextStateForKey = reducer(preStateForKey, action) //返回state
      currentState[key] = nextStateForKey

      hasChanged = hasChanged || preStateForKey !== nextStateForKey
    }

    return hasChanged ? currentState : state
  }
}
