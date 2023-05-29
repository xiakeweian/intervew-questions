// 借用构造函数
// 核心：借用父类的构造函数来增强子类实例，等于是复制父类的实例属性给 子类
// 优点：实例之间独立；
// 创建⼦类实例，可以向⽗类构造函数传参数。
// ⼦类实例不共享⽗类构造函数的引⽤属性。如arr属性
// 可实现多继承（通过多个call或者apply继承多个⽗类）
// 缺点：
// ⽗类的⽅法不能复⽤
// 由于⽅法在⽗构造函数中定义，导致⽅法不能复⽤(因为每次创建⼦类实例都要创建⼀遍⽅法)。
// ⽐如say⽅法。(⽅法应该要复⽤、共享)
// ⼦类实例，继承不了⽗类原型上的属性。(因为没有⽤到原型)

function Parent(name) {
  this.name = name // 实例基本属性 (该属性，强调私有，不共享)
  this.arr = [1] // (该属性，强调私有)
  this.say = function () {
    // 实例引⽤属性 (该属性，强调复⽤，需要共享)
    console.log('hello')
  }
}
function Child(name, like) {
  Parent.call(this, name) // 核⼼ 拷⻉了⽗类的实例属性和⽅法
  // Parent.apply(this, arguments)
  this.like = like
}
let boy1 = new Child('⼩红', 'apple')
let boy2 = new Child('⼩明', 'orange ')
// 优点1：可向⽗类构造函数传参
console.log(boy1.name, boy2.name) // ⼩红， ⼩明
// 优点2：不共享⽗类构造函数的引⽤属性
boy1.arr.push(2)
console.log(boy1.arr, boy2.arr) // [1,2] [1]
// 缺点1：⽅法不能复⽤
console.log(boy1.say === boy2.say) // false (说明，boy1和boy2的say⽅法是独⽴，不是共享的)
// 缺点2：不能继承⽗类原型上的⽅法
Parent.prototype.walk = function () {
  // 在⽗类的原型对象上定义⼀个walk⽅法。
  console.log('我会⾛路')
}
boy1.walk // undefined (说明实例，不能获得⽗类原型上的⽅法)
