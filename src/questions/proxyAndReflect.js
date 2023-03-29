// Proxy
// let target = {
//     name: 'target'
//   }
//   let proxy = new Proxy(target, {
//     set (trapTarget, key, value, receiver) {
//       if (!trapTarget.hasOwnProperty(key)) {
//         if (isNaN(value)) {
//           console.log(value)
//           throw new TypeError('属性必须是数字')
//         }
//       }
//       return Reflect.set(trapTarget, key, value, receiver)
//     }
//   })
//   proxy.count = 1
//   proxy.count1 = 'name' // 会抛出异常，因为count1是不存在的属性，给不存在的属性赋值必须满足条件属性必须是数字
//   console.log(proxy.count, proxy.count1, 'count')

// getPrototypeOf和setPrototypeOf拦截
// const target = {}
// let proxy = new Proxy(target, {
//     getPrototypeOf (trapTarget) {
//         return null
//     },
//     setPrototypeOf (trapTarget, proto) {
//         return false
//     }
// })

// let targetProto = Object.getPrototypeOf(target)
// let proxyProto = Object.getPrototypeOf(proxy)
// console.log(targetProto, proxyProto) // {constructor:f,__diefineGetter:f,...} null
// console.log(targetProto === Object.prototype)
// // 写入成功
// Object.setPrototypeOf(target, {})
// // 抛出错误
// // Object.setPrototypeOf(proxy, {}) //因为proxy代理中被setPrototypeOf改写了

// 使用etPrototypeOf和setPrototypeOf这两个陷阱的默认行为
// let target = {}
// let proxy = new Proxy(target, {
//     getPrototypeOf (trapTarget) {
//         return Reflect.getPrototypeOf(trapTarget)
//     },
//     setPrototypeOf (trapTarget, proto) {
//         return Reflect.setPrototypeOf(trapTarget, proto)
//     }
// })
// let targetProto = Object.getPrototypeOf(target)
// let proxyProto = Object.getPrototypeOf(proxy)
// console.log(targetProto, proxyProto)
// console.log(targetProto === proxyProto)
// console.log(targetProto === Object.prototype)
