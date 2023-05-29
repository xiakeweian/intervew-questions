import createStore from './createStore'
import applyMiddleware from './applyMiddleware'
import compose from './compose'
import combineReducer from './combineReducer'
import bindActionCreators from './bindActionCreators'

export { createStore, applyMiddleware, compose, combineReducer, bindActionCreators }

const logger =
  ({ getState }) =>
  (next) =>
  (action) => {
    console.log('pre-->', getState())
    next(action)
    console.log('next-->', getState())
  }

const thunk =
  ({ dispatch, getState }) =>
  (next) =>
  (action) => {
    if (typeof action === 'function') {
      action(dispatch, getState)
    } else {
      next(action)
    }
  }

function counter(state = { num: 0 }, action) {
  switch (action.type) {
    case 'increment':
      return {
        ...state,
        num: state.num + 1,
      }
    default:
      return state
  }
}

function todo(state, action) {
  state = state || { todos: [] }

  switch (action.type) {
    case 'addTodo':
      return {
        ...state,
        todos: state.todos.concat(action.payload.todo),
      }
    default:
      return state
  }
}

const reducer = combineReducer({ counter, todo })
const store = createStore(reducer, applyMiddleware(logger, thunk))

store.subscribe(() => {
  console.log(store.getState())
})

store.dispatch({ type: 'increment' })
store.dispatch({ type: 'increment' })
store.dispatch({ type: 'addTodo', payload: { todo: { id: '0' } } })
store.dispatch((dispatch) => dispatch({ type: 'addTodo', payload: { todo: { id: '1' } } }))
