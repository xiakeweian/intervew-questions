let mySet = new Set()

mySet.add(1) // Set(1) {1}
mySet.add(5) // Set(2) {1, 5}
mySet.add('some text') // Set(3) {1, 5, "some text"}
var o = { a: 1, b: 2 }
mySet.add(o)

mySet.add({ a: 1, b: 2 }) // o 指向的是不同的对象，所以没问题

mySet.add('5')
mySet.add(+0)
mySet.add(-0)
mySet.has(1) // true
mySet.has(3) // false
mySet.has(Math.sqrt(25)) // true
mySet.has('Some Text'.toLowerCase()) // true

mySet.forEach((item, key, ownSet) => {
  console.log(item === key, ownSet, ownSet === mySet, 'item')
})
let ks = { a: 2 }
mySet.add(ks)
console.log(mySet, 'ggggmySet')
ks = null
console.log(mySet, 'ggggmySet2')

console.log(mySet, mySet.size, mySet.has(o), 'ppp')

// mySet.delete(5) // true,  从set中移除5
// console.log(mySet.has(5)) // false, 5已经被移除

// console.log(mySet.size) // 4, 刚刚移除一个值
// mySet.clear()
console.log(mySet.keys(), 'keys')
console.log(mySet.values(), 'values')
console.log(mySet.entries(), 'entries')

// 可以用于数组去重
let a = [1, 2, 3]
let b = [4, 3, 2]
let c = [9, 2, 1, 42, 12, 2, 1, 5, 42, 1, 9]
// 取并集
let union1 = new Set([...a, ...b])
// 取交集
let union2 = new Set([...a].filter((x) => b.includes(x)))
// 取差集
let union3 = new Set([...a].filter((x) => !b.includes(x)))
console.log(union1, union2, union3)
// 数组去重
let unique1 = [...new Set(c)]
let unique2 = Array.from(new Set(c))

// weakSet
// 在WeakSet实例中，如果向add()方法中传入非对象参数会导致程序报错，向has()和delete()方法中传入非对象参数则会返回false；
// WeakSet集合不可迭代，不能被用于for-of循环；
// WeakSet集合不暴露任何迭代器，如keys,values方法，无法通过程序本身检测其中内容；
// WeakSet集合不支持forEach,不支持size属性。

let weakSet = new WeakSet()
let key = { a: 1 }
weakSet.add(key)
console.log(weakSet.has(key), 'size') // true
console.log(weakSet.size) // undefined 不支持size属性
key = null
console.log(weakSet.has(key)) // false
// weakSet.clear() // clear方法已废弃不能使用
// console.log(weakSet, 'hhhh')

// 与其他数据结构的相互转换
// 1. Map转Array ...展开运算符

// const map = new Map([[1, 1], [2, 2], [3, 3]])
// console.log([...map])	// [[1, 1], [2, 2], [3, 3]]

// 2. Array转Map

// const map = new Map([[1, 1], [2, 2], [3, 3]])
// console.log(map)	// Map {1 => 1, 2 => 2, 3 => 3}

// 3. Map转Object
// 因为 Object 的键名都为字符串，而Map 的键名为对象，所以转换的时候会把非字符串键名转换为字符串键名。

// function mapToObj (map) {
//     let obj = Object.create(null)
//     for (let [key, value] of map) {
//         console.log(key, value, 'llll')
//         obj[key] = value
//     }
//     return obj
// }
// const map = new Map().set('name', 'An').set('des', 'JS')
// const obj = mapToObj(map)  // {name: "An", des: "JS"}
// console.log(obj, 'gg')
// 4. Object转Map

// function objToMap (obj) {
//     let map = new Map()
//     for (let key of Object.keys(obj)) {
//         map.set(key, obj[key])
//     }
//     return map
// }

// const map = objToMap({ 'name': 'An', 'des': 'JS' }) // Map {"name" => "An", "des" => "JS"}
// console.log(map)
// 5. Map转Json

// function mapToJson(map) {
//     return JSON.stringify([...map])
// }

// let map = new Map().set('name', 'An').set('des', 'JS')
// mapToJson(map)	// [["name","An"],["des","JS"]]

// 6. Json转Map

// function jsonToStrMap(jsonStr) {
//   return objToMap(JSON.parse(jsonStr));
// }

// jsonToStrMap('{"name": "An", "des": "JS"}') // Map {"name" => "An", "des" => "JS"}
