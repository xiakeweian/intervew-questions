// 5.组合继承优化2 ⼜称 寄⽣组合继承 --- 完美⽅式
function Parent(name) {
  this.name = name // 实例基本属性 (该属性，强调私有，不共享)
  this.arr = [1] // (该属性，强调私有)
}
Parent.prototype.say = function () {
  // --- 将需要复⽤、共享的⽅法定义在⽗类原型上
  console.log('hello')
}
function Child(name, like) {
  Parent.call(this, name, like) // 核⼼
  this.like = like
}
// 核⼼ 通过创建中间对象，⼦类原型和⽗类原型，就会隔离开。不是同⼀个啦，有效避免了⽅式4的缺点。
Child.prototype = Object.create(Parent.prototype)
// 这⾥是修复构造函数指向的代码
Child.prototype.constructor = Child
let boy1 = new Child('⼩红', 'apple')
let boy2 = new Child('⼩明', 'orange')
let p1 = new Parent('⼩爸爸')
// 注意：这种⽅法也要修复构造函数的
// 修复代码：Child.prototype.constructor = Child
