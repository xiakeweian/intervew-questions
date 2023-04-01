export default function bindActionCreators(actionCreators, dispatch) {
  const ret = {}

  for (let key in actionCreators) {
    const actionCreator = actionCreators[key]
    ret[key] = function () {
      return dispatch(actionCreator.apply(this, arguments))
    }
  }

  return ret
}
