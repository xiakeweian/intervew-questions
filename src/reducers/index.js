import homeReducer from './homeReducer'
import appReducer from './appReducer'
import postsSlice from './postsSlice'

function toObj(curReducer) {
  return { [curReducer.name]: curReducer.reducer }
}

export default {
  ...toObj(homeReducer),
  ...toObj(appReducer),
  ...toObj(postsSlice),
}
