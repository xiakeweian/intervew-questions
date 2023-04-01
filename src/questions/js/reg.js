// var str = 'cat bat fat';

// var s = str.replace(/.at/g,function(a,b,c) {
//   console.log(a,b,c)
//   console.log(RegExp.$1)
//   return '';
// });

// console.log(s)

function F() {}

class N extends F {}

var f = new F()
var n = new N()

// console.log(F)
// console.log(F.prototype.constructor)
// console.log(f.__proto__)
// console.log(F instanceof Function)
// console.log(F.__proto__.__proto__.__proto__)
// console.log(f.__proto__.constructor)

// console.log(n.__proto__.__proto__.__proto__.__proto__)

console.log(f.__proto__.__proto__.constructor)
console.log(n.__proto__.__proto__.__proto__.constructor)
