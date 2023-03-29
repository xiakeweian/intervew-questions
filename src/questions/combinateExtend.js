// ⽅式3、组合继承
// 核⼼：通过调⽤⽗类构造函数，继承⽗类的属性并保留传参的优点；然后通过将⽗类实例作为
// ⼦类原型，实现函数复⽤。
// 优点：
// 保留构造函数的优点：创建⼦类实例，可以向⽗类构造函数传参数。
// 保留原型链的优点：⽗类的⽅法定义在⽗类的原型对象上，可以实现⽅法复⽤。
// 不共享⽗类的引⽤属性。⽐如arr属性
// 缺点：
// 由于调⽤了2次⽗类的构造⽅法，会存在⼀份多余的⽗类实例属性，具体原因⻅⽂末。
// 注意：'组合继承'这种⽅式，要记得修复Child.prototype.constructor指向
// 第⼀次Parent.call(this);从⽗类拷⻉⼀份⽗类实例属性，作为⼦类的实例属性，第⼆次
// Child.prototype = new Parent();创建⽗类实例作为⼦类原型，Child.protype中的⽗类属性和⽅法
// 会被第⼀次拷⻉来的实例属性屏蔽掉，所以多余。

function Parent(name) {
  this.name = name // 实例基本属性 (该属性，强调私有，不共享)
  this.arr = [1] // (该属性，强调私有)
}
Parent.prototype.say = function () {
  // --- 将需要复⽤、共享的⽅法定义在⽗类原型上
  console.log('hello')
}
function Child(name, like) {
  Parent.call(this, name, like) // 核⼼ 第⼆次
  this.like = like
}
Child.prototype = new Parent() // 核⼼ 第⼀次
Child.prototype.constructor = Child // 修正constructor指向
let boy1 = new Child('⼩红', 'apple')
let boy2 = new Child('⼩明', 'orange')
// 优点1：可以向⽗类构造函数传参数
console.log(boy1.name, boy1.like) // ⼩红，apple
// 优点2：可复⽤⽗类原型上的⽅法
console.log(boy1.say === boy2.say) // true
// 优点3：不共享⽗类的引⽤属性，如arr属性
boy1.arr.push(2)
console.log(boy1.arr, boy2.arr) // [1,2] [1] 可以看出没有共享arr属性。
// 缺点1：由于调⽤了2次⽗类的构造⽅法，会存在⼀份多余的⽗类实例属性
console.log(boy1.hasOwnProperty('arr'))

function Function(value) {
  this.value = value
  this.match = function () {
    console.log(this.value)
  }
}
// 实例
const fun = new Function(30)
console.log(
  fun.__proto__,
  Function.prototype,
  fun.__proto__ === Function.prototype,
  Object.__proto__,
  'fun'
)
