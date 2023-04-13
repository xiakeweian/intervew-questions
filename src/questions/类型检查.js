// 基础数据类型 Number，String,Boolean,Undefined,Null,Symbol
const num = 2
const str = 'aaa'
const boolean = false
const symbol = Symbol()
console.log(typeof num)
console.log(typeof str)
console.log(typeof boolean)
console.log(typeof m)
console.log(typeof null)
console.log(typeof symbol)
console.log(Object.prototype.toString.call([]), 'ss')
console.log(Object.prototype.toString.call({}), 'jj')
console.log(Object.prototype.toString.call(function () { }), 'jj')
console.log(Object.prototype.toString.call(2), '22')
console.log(Object.prototype.toString.call('string'), 'string')