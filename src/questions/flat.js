// 数组扁平化，去重并排序
function flatFun(data) {
  let obj = {}
  let newArr = []
  function flat(list) {
    !!list.length &&
      list.map((item) => {
        if (item instanceof Array) {
          flat(item)
        } else {
          if (obj[item]) return
          obj[item] = true
          newArr.push(item)
        }
      })
    return newArr.sort((a, b) => a - b)
  }
  return flat(data)
}
const list = [
  [23, 1],
  1,
  2,
  3,
  4,
  [91, [24, [222, [4292, [1, 2, 3, 4, 5, [98, 92, [222]]]], 54], 9]],
]
const newList = flatFun(list)
console.log(newList, 'ssnewList')
