// redux-thunk处理一部分逻辑和数据请求，因为reducers中数据只能是个纯函数，所以那些副作用都不能存在
// 它先判断传入 dispatch 的 action 是函数还是对象。如果是一个函数，则调用函数，并返回结果。否则，传入的是普通 action 对象，就把这个 action 传递给 store 处理。

// 这就让我们可以用一种方法来处理同步或者异步方法，同时仍然可以调用 dispatch 和 getState。
const thunkMiddleware =
  ({ dispatch, getState }) =>
  (next) =>
  (action) => {
    if (typeof action === 'function') {
      return action(dispatch, getState)
    }

    return next(action)
  }
