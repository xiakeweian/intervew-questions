// 基础数据类型 Number，String,Boolean,Undefined,Null,Symbol
// 引用数据类型  Array,Object,Function,Set,Map
const num = 2
const str = 'aaa'
const boolean = false
const symbol = Symbol()
let obj = {}
let arr = []
let set = new Set()
let map = new Map()
function fn () { }
console.log(typeof num, 'number')
console.log(typeof str, 'string')
console.log(typeof boolean, 'boolean')
console.log(typeof undefined, 'undefined')
console.log(typeof null, 'object')
console.log(typeof symbol, 'symbol')
console.log(obj instanceof Object, 'true')
console.log(arr instanceof Array, 'true')
console.log(fn instanceof Function, 'true')
console.log(set instanceof Set, 'true')
console.log(map instanceof Map, 'true')
console.log(Object.prototype.toString.call(arr), '[object Array]')
console.log(Object.prototype.toString.call(obj), '[object Object]')
console.log(Object.prototype.toString.call(fn), '[object Function]')
console.log(Object.prototype.toString.call(2), '[object Number]')
console.log(Object.prototype.toString.call('string'), '[object String]')
console.log(Object.prototype.toString.call(undefined), '[object Undefined]')
console.log(Object.prototype.toString.call(null), '[object Null]')
console.log(Object.prototype.toString.call(true), '[object Boolean]')
console.log(Object.prototype.toString.call(Symbol()), '[object Symbol]')
console.log(Object.prototype.toString.call(set), '[object Set]')
console.log(Object.prototype.toString.call(map), '[object Map]')