// ⽅式4、组合继承优化1
// 核⼼：
// 通过这种⽅式，砍掉⽗类的实例属性，这样在调⽤⽗类的构造函数的时候，就不会初始化两次实
// 例，避免组合继承的缺点。
// 优点：
// 只调⽤⼀次⽗类构造函数。
// 保留构造函数的优点：创建⼦类实例，可以向⽗类构造函数传参数。
// 保留原型链的优点：⽗类的实例⽅法定义在⽗类的原型对象上，可以实现⽅法复⽤。
// 缺点：
// 修正构造函数的指向之后，⽗类实例的构造函数指向，同时也发⽣变化(这是我们不希望的)
// 注意：'组合继承优化1'这种⽅式，要记得修复Child.prototype.constructor指向
// 原因是：不能判断⼦类实例的直接构造函数，到底是⼦类构造函数还是⽗类构造函数。

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
Child.prototype = Parent.prototype // 核⼼ ⼦类原型和⽗类原型，实质上是同⼀个
Child.prototype.constructor = Child // 这⾥是修复构造函数constructor指向的代码
console.log(Child.prototype, Parent.prototype, 'gg')

let boy1 = new Child('⼩红', 'apple')
let boy2 = new Child('⼩明', 'orange')
let p1 = new Parent('⼩爸爸')
// 优点1：可以向⽗类构造函数传参数
console.log(boy1.name, boy1.like) // ⼩红，apple
// 优点2：可复⽤⽗类原型上的⽅法
console.log(boy1.say === boy2.say) // true
// 缺点1：当修复⼦类构造函数的指向后，⽗类实例的构造函数指向也会跟着变了。
// 没修复之前：console.log(boy1.constructor); // Parent
// 修复代码：Child.prototype.constructor = Child
// 修复之后：console.log(boy1.constructor); // Child
// console.log(p1.constructor);// Child 这⾥就是存在的问题(我们希望是Parent)
// 具体原因：因为是通过原型来实现继承的，Child.prototype的上⾯是没有constructor属性的，
// 就会往上找，这样就找到了Parent.prototype上⾯的constructor
const parent = new Parent()
console.log(parent.constructor, Parent.prototype, 'sssparent')
