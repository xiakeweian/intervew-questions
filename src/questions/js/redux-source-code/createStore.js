// 创建一个redux store, 初始化状态树，传入三个参数，这三个参数中，第一个reducer是必传项，preloadState和enhancer不是必传项，首先要对这三个参数进行类型判断，如果typeof reducer !== 'function'
// 抛出错误，如果preloadState有传值但是类型是function或者enhancer不是function,这样也会抛出错误
export default function createStore (reducer, preloadedState, enhancer) {
  if (
    (typeof preloadedState === 'function' && typeof enhancer === 'function') ||
    (typeof enhancer === 'function' && typeof arguments[3] === 'function')
  ) {
    throw new Error(
      'It looks like you are passing several store enhancers to ' +
      'createStore(). This is not supported. Instead, compose them ' +
      'together to a single function.'
    )
  }
  // 这里判断主要是防止参数传递顺序错误，纠正传递错误
  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState
    preloadedState = undefined
  }
  // 如果enhancer传值了，但是传递参数不是function类型，则抛出错误
  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error('Expected the enhancer to be a function.')
    }

    return enhancer(createStore)(reducer, preloadedState)
  }
  // 如果reducer不是function类型，则抛出错误
  if (typeof reducer !== 'function') {
    throw new Error('Expected the reducer to be a function.')
  }

  let currentReducer = reducer
  let currentState = preloadedState
  let currentListeners = []
  let nextListeners = currentListeners
  let isDispatching = false

  /**
   * This makes a shallow copy of currentListeners so we can use
   * nextListeners as a temporary list while dispatching.
   *
   * This prevents any bugs around consumers calling
   * subscribe/unsubscribe in the middle of a dispatch.
   */
  function ensureCanMutateNextListeners () {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice()
    }
  }

  /**
   * createStore向外暴露getState,可以通过store.getState()获取状态树数据，
   * @returns {any} 返回当前应用状态树
   */
  function getState () {
    if (isDispatching) {
      throw new Error(
        'You may not call store.getState() while the reducer is executing. ' +
        'The reducer has already received the state as an argument. ' +
        'Pass it down from the top reducer instead of reading it from the store.'
      )
    }
    return currentState
  }

  /**
   *添加一个监听器，任何时候调用dispatch action都可以监听到，如果状态树的一些部分改变，你可以在回调函数中调用store.getState()获取当前状态树中的值
   *可以调用dispatch()改变监听器，以下注意事项：
   *1.订阅是在每次“dispatch（）”调用之前进行快照的。如果在调用侦听器时订阅或取消订阅，则不会对当前正在进行的“dispatch（）”产生任何影响。然而，下一个“dispatch（）”调用，无论是否嵌套，都将使用更多订阅列表的最新快照。
   *2.监听器不应该期望看到所有的状态变化，因为状态之前在嵌套的“dispatch（）”期间可能已更新多次调用侦听器。然而，保证所有订户在“dispatch（）”启动之前注册的将使用最新的
   *状态。
   * @param {Function} listener 回调函数.
   * @returns {Function} 返回一个删除监听器的函数
   */
  function subscribe (listener) {
    if (typeof listener !== 'function') {
      throw new Error('Expected the listener to be a function.')
    }

    if (isDispatching) {
      throw new Error(
        'You may not call store.subscribe() while the reducer is executing. ' +
        'If you would like to be notified after the store has been updated, subscribe from a ' +
        'component and invoke store.getState() in the callback to access the latest state. ' +
        'See https://redux.js.org/api-reference/store#subscribelistener for more details.'
      )
    }

    let isSubscribed = true

    ensureCanMutateNextListeners()
    nextListeners.push(listener)

    return function unsubscribe () {
      if (!isSubscribed) {
        return
      }

      if (isDispatching) {
        throw new Error(
          'You may not unsubscribe from a store listener while the reducer is executing. ' +
          'See https://redux.js.org/api-reference/store#subscribelistener for more details.'
        )
      }

      isSubscribed = false

      ensureCanMutateNextListeners()
      const index = nextListeners.indexOf(listener)
      nextListeners.splice(index, 1)
      currentListeners = null
    }
  }

  /**
   * dispatch一个action,他是改变状态的唯一方式
   * 在创建store时使用的reducer函数，将使用当前状态树和给定的action进行调用，他的返回值被作为下一个状态树的状态，并且将通知监听器改变
   * 基本实现只支持普通对象操作。如果你想发送一个Promise、一个Observable、一个thunk或其他什么，
   * 你需要将您的store创建功能封装到相应的中间件中。对于例如，请参阅“redux thunk”包的文档。甚至中间件最终将使用这种方法调度普通对象操作。
   * @param {Object} action 参数是一个发生什么变化的普通对象，他是一个保持操作可序列化的一个好方法，这样可以记录和回放用户会话，或使用redux-devtools,每个action都有一个type属性，不能是undefined,他是一个action的常量字符串，
   * @returns {Object} 为了方便起见，返回的是一个dispatch的同样action的对象

   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */
  function dispatch (action) {
    if (!isPlainObject(action)) {
      throw new Error(
        'Actions must be plain objects. ' +
        'Use custom middleware for async actions.'
      )
    }

    if (typeof action.type === 'undefined') {
      throw new Error(
        'Actions may not have an undefined "type" property. ' +
        'Have you misspelled a constant?'
      )
    }

    if (isDispatching) {
      throw new Error('Reducers may not dispatch actions.')
    }

    try {
      isDispatching = true
      currentState = currentReducer(currentState, action)
    } finally {
      isDispatching = false
    }

    const listeners = (currentListeners = nextListeners)
    for (let i = 0; i < listeners.length; i++) {
      const listener = listeners[i]
      listener()
    }

    return action
  }

  /**
   *
   * 替换掉当前reducer通过store计算state，
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */
  function replaceReducer (nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error('Expected the nextReducer to be a function.')
    }

    currentReducer = nextReducer

    dispatch({ type: ActionTypes.REPLACE })
  }

  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/tc39/proposal-observable
   */
  function observable () {
    const outerSubscribe = subscribe
    return {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe (observer) {
        if (typeof observer !== 'object' || observer === null) {
          throw new TypeError('Expected the observer to be an object.')
        }

        function observeState () {
          if (observer.next) {
            observer.next(getState())
          }
        }

        observeState()
        const unsubscribe = outerSubscribe(observeState)
        return { unsubscribe }
      },

      [$$observable] () {
        return this
      }
    }
  }

  // 当一个store创建好之后会dispatch一个初始化的action,这个初始化的action会将每一个reducer中的state初始化，这样可以有效的初始化状态树
  dispatch({ type: ActionTypes.INIT })

  return {
    dispatch,
    subscribe,
    getState,
    replaceReducer,
    [$$observable]: observable
  }
}

