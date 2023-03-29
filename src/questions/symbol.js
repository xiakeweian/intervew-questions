// 声明两个Symbol类型的值,声明的两个symbol是完全不同的两个值
const a = Symbol()
const b = Symbol()
console.log(a, b, a === b, 'sss') // Symbol() Aymbol() false
console.log(typeof b) // symbol
const c = Symbol('apple')
console.log(c) // Symbol(apple)
c.category = 'fruit'
console.log(c.category) // undefined 不能这么赋值
console.log(c.toString()) //  Symbol(apple)

// 作为属性名
let sy1 = Symbol('key1')
let sy2 = Symbol('key2')

// 写法1
//
// let obj = {
//     [sy1]: 'kk',
//     [sy2]: 'mm'
// }
// 写法2
// let obj = {}
// obj[sy1] = 'kk'
// obj[sy2] = 'mm'

// 写法3
let obj = {}

Object.defineProperty(obj, sy1, { value: 'kk' })
Object.defineProperty(obj, sy2, { value: 'kk' })
console.log(obj) // {Symbol(key1): 'kk', Symbol(key2): 'mm'}

// Symbol作为对象属性名时不能使用（.）运算符，要用方括号([]),因为(.)运算符后面是字符串，所以取到的是字符串sy属性，而不是Symbol值的sy属性
// let sy = Symbol()
// let syObject = {}
// syObject[sy] = 'kk'
// console.log(syObject[sy]) // "kk"
// console.log(syObject.sy)  // undefined

// Symbol值作为属性名时，该属性是公有属性不是私有属性，可以在类的外部访问，但是不会出现在for...in,for...of的循环中，也不会被Object.keys(),Object.getOwnPropertyNames() 返回
// 如果要读取到一个对象的 Symbol 属性，可以通过 Object.getOwnPropertySymbols() 和 Reflect.ownKeys() 取到

let syObject = {}
let sy = Symbol('key1')
syObject[sy] = 'kk'
console.log(syObject)

for (let i in syObject) {
  console.log(i)
} // 无输出

console.log(Object.keys(syObject)) // []
console.log(Object.getOwnPropertySymbols(syObject)) // [Symbol(key1)]
console.log(Reflect.ownKeys(syObject)) // [Symbol(key1)]

// 定义常量

// 在 ES5 使用字符串表示常量。例如：

// const COLOR_RED = "red";
// const COLOR_YELLOW = "yellow";
// const COLOR_BLUE = "blue";
// 但是用字符串不能保证常量是独特的，这样会引起一些问题：

// 但是使用 Symbol 定义常量，这样就可以保证这一组常量的值都不相等。用 Symbol 来修改上面的例子。

const COLOR_RED = Symbol('red')
const COLOR_YELLOW = Symbol('yellow')
const COLOR_BLUE = Symbol('blue')

function ColorException(message) {
  this.message = message
  this.name = 'ColorException'
}
function getConstantName(color) {
  switch (color) {
    case COLOR_RED:
      return 'COLOR_RED'
    case COLOR_YELLOW:
      return 'COLOR_YELLOW '
    case COLOR_BLUE:
      return 'COLOR_BLUE'
    default:
      throw new ColorException("Can't find this color")
  }
}

try {
  var color = 'green' // green 引发异常
  var colorName = getConstantName(color)
} catch (e) {
  var colorName = 'unknown'
  console.log(e.message, e.name) // 传递异常对象到错误处理
}
// Symbol 的值是唯一的，所以不会出现相同值得常量，即可以保证 switch 按照代码预想的方式执行。
