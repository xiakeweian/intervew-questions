function deepCopy(ori) {
  const type = getType(ori)
  let copyObj
  switch (type) {
    case 'array':
      return copyArray(ori, type, copy)
    case 'object':
      return copyObject(ori, type, copy)
    case 'function':
      return copyFunction(ori, type, copy)
    default:
      return ori
  }
}
function copyArray(ori, type, copy = []) {
  for (const [index, value] of ori.entries()) {
    copy[index] = deepCopy(value)
  }
  return copy
}
function copyObject(ori, type, copy = {}) {
  for (const [key, value] of Object.entries(ori)) {
    copy[key] = deepCopy(value)
  }
  return copy
}
function copyFunction(ori, type, copy = () => {}) {
  const fun = eval(ori.toString())
  fun.prototype = ori.prototype
  return fun
}
function getType(value) {
  switch (value) {
    case value instanceof Array:
      return 'array'
      break
    case typeof value === 'object':
      return 'object'
      break
    case typeof value === 'function':
      return 'function'
      break
    case typeof value === 'number':
      return 'number'
      break
    case typeof value === 'string':
      return 'string'
      break
    case typeof value === 'boolean':
      return 'boolean'
      break
    case typeof value === 'undefined':
      return 'undefined'
      break
  }
}
