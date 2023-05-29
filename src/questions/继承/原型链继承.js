// 1. 原型链继承
// 将父类的实例作为子类的原型
// 优点：方法可复用
// 由于方法定义在父类的原型上，复用了父类的构造函数的方法，
// 缺点：创建父类实例的时候，不能传父类的参数
// 子类实例共享父类构造函数的引用属性，比如arr

// function Parent (name) {
//     this.name = name || 'parent'
//     this.arr = [1]
// }
// Parent.prototype.say = function () {
//     console.log('hello')
// }

// function Child (name, age) {
//     this.age = age
//     this.sayHello = function () {
//         console.log(`我叫${name},今年${this.age}`)
//     }
// }
// Child.prototype = new Parent()
// Child.prototype.constructor = Child
// Child.prototype.say()
// console.log(Child.prototype.constructor, 'ss')


// 2. 借用构造函数
// 借用父类构造函数来增强子类实例，
// 优点:实例之间相互独立，不共享父类的引用属性,可实现多继承
// 缺点：子类实例继承不了父类原型上的属性，父类的方法不能复用，由于方法在父类构造函数中定义，所以不能复用；


// function Parent (name) {
//     this.name = name
//     this.arr = []
//     this.say = function () {
//         console.log(`hello,${this.name}`)
//     }
// }
// function Child (name, like) {
//     Parent.call(this, name)
//     this.like = like

// }
// const child1 = new Child('小明', 'apple')
// const child2 = new Child('小黄', 'pear')

// child1.arr.push(1)
// child2.arr.push(2)

// child1.say()
// child2.say()
// console.log(child1.name, child1.arr, 'kkk')
// console.log(child2.name, child2.arr, 'lll')

// 方法3:组合继承
// 子类构造函数中调用call,然后父类的实例作为子类的原型，可以继承父类的属性和方法以及原型上的方法
// 优点：可以传参，父类原型上的方法可以复用，父类的引用属性不共享，
// 缺点： 调用两次父类方法，这样会导致多余一份父类实例属性

// function Parent (name) {
//     this.name = name
//     this.arr = []

// }
// Parent.prototype.say = function () {
//     console.log('hello')
// }
// function Child (name, like) {

//     Parent.call(this, name)
//     this.like = like

// }
// Child.prototype = new Parent()
// Child.prototype.constructor = Child
// const child1 = new Child('小明', 'apple')
// 方法4:组合继承优化
// 优点 1. 可以传参；2. 父类的引用属性不共享；3. 父类原型上的属性可复用;4.只调用一次父类构造函数
// 缺点：修正子类constructor属性的时候，同时也修改了父类的属性，说明父类的原型和子类的原型是同一个，这样会影响父类实例的使用

// function Parent (name) {
//     this.name = name
//     this.arr = []

// }
// Parent.prototype.say = function () {
//     console.log('hello')
// }
// function Child (name, like) {

//     Parent.call(this, name)
//     this.like = like
// }
// Child.prototype = Parent.prototype
// Child.prototype.constructor = Child // 修正construuctor指向
// const child1 = new Child('小明', 'apple')

// 方法5:寄生组合继承（完美继承）
// 优点：1.可以传参；2.可以调用父类原型上的方法；3. 父类原型上的方法可以复用；4. 父子之间隔离，互不影响，不会影响父类实例化
function Parent (name) {
    this.name = name
    this.arr = []

}
Parent.prototype.say = function () {
    console.log('hello')
}
function Child (name, like) {

    Parent.call(this, name)
    this.like = like
}
Child.prototype = Object.create(Parent.prototype)
Child.prototype.constructor = Child