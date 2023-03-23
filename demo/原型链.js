function Function() {}
console.log(Function) //Function()
console.log(Function.prototype.constructor) //Function()
console.log(Function.prototype)
console.log(Function.prototype.__proto__) //Object.prototype
console.log(Function.prototype.__proto__.__proto__) //NULL
console.log(Function.prototype.__proto__.constructor) //Object()
console.log(Function.prototype.__proto__ === Object.prototype) //true
console.log(Object.__proto__ === Function.prototype) //true
console.log(Object.__proto__.__proto__ === Object.prototype) //true
console.log(Function.prototype.__proto__ === Object.prototype) //true
// Object.prototype是所有原型链的终点

function doSomething() {}
doSomething.prototype.foo = 'bar' // add a property onto the prototype
var doSomeInstancing = new doSomething()
doSomeInstancing.prop = 'some value' // add a property onto the object
console.log(doSomeInstancing)
