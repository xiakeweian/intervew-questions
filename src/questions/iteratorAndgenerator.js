// 迭代器

// function createIterator (items) {
//     var i = 0
//     return {
//         next: function () {
//             var done = (i >= items.length)
//             var value = !done ? items[i++] : undefined
//             return {
//                 done: done,
//                 value: value
//             }
//         }
//     }
// }
// var iterator = createIterator([1, 2, 3])
// console.log(iterator.next()) // {done: false, value: 1}
// console.log(iterator.next()) // {done: false, value: 2}
// console.log(iterator.next()) // {done: false, value: 3}
// console.log(iterator.next()) // { done: true, value: undefined }

// 生成器generator
// function* createIterator () {
//     yield 1
//     yield 2
//     yield 3

// }
// let iterator = createIterator()

// console.log(iterator.next().value, 'value1')
// console.log(iterator.next().value, 'value2')
// console.log(iterator.next().value, 'value3')

// 循环使用yield关键字
// function* createIterator (items) {
//     for (let i = 0; i < items.length; i++) {
//         yield items[i]
//     }
// }
// let iterator = createIterator([1, 2, 3])

// console.log(iterator.next()) // {value: 1, done: false}
// console.log(iterator.next()) // {value: 2, done: false}
// console.log(iterator.next()) // {value: 3, done: false}
// console.log(iterator.next()) // {value: undefined, done: true}
// // 之后所有的调用都会返回相同的内容
// console.log(iterator.next()) // { value: undefined, done: true }

// 生成器函数表达式
// let createIterator = function* (items) {
//     for (let i = 0; i < items.length; i++) {
//         yield items[i]
//     }
// }
// let iterator = createIterator([1, 2, 3])

// console.log(iterator.next()) // {value: 1, done: false}
// console.log(iterator.next()) // {value: 2, done: false}
// console.log(iterator.next()) // {value: 3, done: false}
// console.log(iterator.next()) // {value: undefined, done: true}
// // // 之后所有的调用都会返回相同的内容
// console.log(iterator.next()) // { value: undefined, done: true }

// let o = {
//     createIterator: function* (items) {
//         for (let i = 0; i < items.length; i++) {
//             yield items[i]
//         }
//     },
//     *createIterator1 (items) {

//         for (let i = 0; i < items.length; i++) {
//             yield items[i]
//         }

//     }
// }
// let iterator = o.createIterator([1, 2, 3])
// let iterator2 = o.createIterator([4, 5, 6])

// 可迭代对象和for-of循环
// let values = [1, 2, 3]
// for (let num of values) {

//     console.log(num)

// }
// 访问默认迭代器,通过Symbol.iterator获取数组的默认迭代器，并用它遍历数组中的元素，for of循环也会有类似处理过程

// let values = [1, 2, 3]
// let iterator = values[Symbol.iterator]()
// console.log(iterator.next()) // {value: 1, done: false}
// console.log(iterator.next()) // {value: 2, done: false}
// console.log(iterator.next()) // {value: 3, done: false}
// console.log(iterator.next()) // {value: undefined, done: true}

// 由于具有Symbol.iterator属性的对象都有默认的迭代器，因此可以用来检测对象是否为可迭代对象
// function isIterable (object) {
//     return typeof object[Symbol.iterator] === 'function'
// }
// console.log(isIterable([1, 2, 3])) // true
// console.log(isIterable('hello'))  // true
// console.log(isIterable(new Map()))  // true
// console.log(isIterable(new Set()))  // true
// console.log(isIterable(new WeakMap()))  // false
// console.log(isIterable(new WeakSet()))  // false

// isIterable函数可以检查指定对象中是否含有默认的函数类型迭代器，而for-of循环也会做相似的检查

// 创建可迭代对象
// let collection = {
//     items: [],
//     *[Symbol.iterator] () {
//         for (let item of this.items) {
//             yield item
//         }
//     }
// }
// collection.items.push(1)
// collection.items.push(2)
// collection.items.push(3)
// console.log(collection.items)
// for (let x of collection) {
//     console.log(x)
// }
// 内建迭代器
// 结合对象迭代器
// ES6中有三种类型的结合对象：数组， Map集合和Set集合，这三种对象都内建了以下三种迭代器：
// entries() 返回一个迭代器，其值为多个键值对
// values() 返回一个迭代器，其值为集合的值
// keys() 返回一个迭代器，其值为集合中的所有键名

// let colors = ['red', 'green', 'blue']
// let tracking = new Set([1234, 678, 9012])
// let data = new Map()
// data.set('title', 'Understanding ESMAScript 6')
// data.set('format', 'ebook')

// entries()迭代器
// for (let entry of colors.entries()) {
//     console.log(entry, 'colors')
// }
// for (let entry of tracking.entries()) {
//     console.log(entry, 'tracking')
// }

// for (let entry of data.entries()) {
//     console.log(entry, 'data')
// }
// 调用values()迭代器会返回集合的值
// for (let entry of colors.values()) {
//     console.log(entry, 'colors')
// }
// for (let entry of tracking.values()) {
//     console.log(entry, 'tracking')
// }

// for (let entry of data.values()) {
//     console.log(entry, 'data')
// }

// 调用keys()迭代器会返回集合中所有键名
// for (let entry of colors.keys()) {
//     console.log(entry, 'colors')
// }
// for (let entry of tracking.keys()) {
//     console.log(entry, 'tracking')
// }

// for (let entry of data.keys()) {
//     console.log(entry, 'data')
// }

// 不同集合类型的默认迭代器
// 每个集合类型都有一个默认的迭代器，for-of循环中如果没有现式指定，则使用默认迭代器。数组和Set集合默认迭代器是vlaues()
// Map集合默认迭代器是entries()方法

// 默认colors.values()
// for (let entry of colors) {
//     console.log(entry, 'colors')
// }
// // 默认tracking.values()
// for (let entry of tracking) {
//     console.log(entry, 'tracking')
// }
// 默认data.entries()
// for (let entry of data) {
//     console.log(entry, 'data')
// }

// 解构for-of
// for (let [key, value] of data) {
//     console.log(key, value, 'data')
// }

// 字符串迭代器
// var message = 'A 吉 B'
// for (let i = 0; i < message.length; i++) {
//     console.log(message[i], 'message')
// }
// console.log(message.length)
// for (let m of message) {
//     console.log(m, 'message')
// }

// 数组扁平化
// function flatFun (arr, newArr) {
//     for (let value of arr) {
//         if (value instanceof Array) {
//             flatFun(value, newArr)

//         } else {

//             newArr.push(value)
//         }

//     }

//     return newArr

// }

// let newArr = []
// const list = [[23, 1], 1, 2, 3, 4, [91, [24, [222, [4292, [1, 2, 3, 4, 5, [98, 92, [222]]]], 54], 9]]]

// console.log(flatFun(list, newArr), 'gg1')
// console.log(list.flat(7), 'gg2')

// 给迭代器传参数
function* createIterator() {
  let first = yield 1
  let second = yield first + 2
  console.log(first, second)
  yield second + 3
}
let iterator = createIterator()
console.log(iterator.next()) // {value: 1, done: false}
console.log(iterator.next(4)) // {value: 6, done: false}
console.log(iterator.next(5)) // {value: 8, done: false}
