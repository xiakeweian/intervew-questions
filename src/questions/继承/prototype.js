// 原型链继承
// 核心：将父类实例作为子类原型
// 优点：⽅法复⽤
// 由于⽅法定义在⽗类的原型上，复⽤了⽗类构造函数的⽅法。⽐如say⽅法。
// 缺点：
// 创建⼦类实例的时候，不能传⽗类的参数（⽐如name）。
// ⼦类实例共享了⽗类构造函数的引⽤属性，⽐如arr属性。

import { Children } from 'react'

// ⽆法实现多继承。
function Parent(name) {
  this.name = name || '父亲'
  this.arr = [1]
}
Parent.prototype.say = function () {
  console.log('hello')
}
function Child(name, age) {
  // this.name = name
  this.age = age
  this.sayHello = function () {
    console.log(`我叫${name}，今年${this.age}岁了`)
  }
}
console.log(Child.prototype, 'sss')
Child.prototype = new Parent() // 核心 本来Child.prototype原型上有constructor属性，但是这样赋值之后，Child.prototype实例上的constructor属性就消失了
Child.prototype.constructor = Child // 修正constructor指向 Child.prototype上的constructor属性重新回来了
console.log(Child.prototype)

let child1 = new Child('张三', 10)
child1.sayHello()
// 这样就拥有了Parent的属性和方法
child1.say()
let child2 = new Child('小明', 7)
child2.sayHello()
child2.say()
console.log(child1.say, child2.say, child1.say === child2.say)
console.log(child1.arr, child1.name, child2.name, child1.name === child2.name, 'ggg')
child1.name = '王五'
console.log(child1.name, child1, child1.constructor)
// 优点：共享父类构造函数的属性和方法
// 缺点1：不能向父类构造函数穿参
// 缺点2：子类实例共享了父类构造函数的引用属性,child1.arr修改了父类构造函数的引用属性，同样child2.arr也会发生变化
