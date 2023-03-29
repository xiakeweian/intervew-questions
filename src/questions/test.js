// 1.原型链继承
// 原型链继承继承了父类的属性和方法，
// 缺点1.父类原型上的方法没发继承；2.不能向父类传参数;3.父类的引用类型也被继承了，子类其中一个实例的引用类型修改之后，另一个实例也被修改
// function Parent (name) {
//     this.name = name || 'parent'
//     this.arr = [1]
//     this.drink = function () {
//         console.log('我喝水')
//     }
// }
// function Child (like) {
//     this.like = like
//     this.play = function () {
//         console.log('我喜欢' + this.like)
//     }
// }
// Child.prototype = new Parent()
// Child.prototype.constructor = Child
// console.log(Child, Child.prototype, 'ssss')
// const child1 = new Child('乒乓球')
// child1.play()
// child1.drink()
// const child2 = new Child('足球')
// child2.play()
// child2.drink()
// console.log(child1.name, child2.name)
// child1.arr.push(2)
// console.log(child1.arr, child2.arr)
// 2.构造函数继承
// 可以向父类传参，子类实例之间相互独立，可实现多继承，
// 缺点：1.⽗类的⽅法不能复⽤;2.子类实例无法继承父类原型上的的方法
// function Parent (name) {
//     this.name = name || 'parent'
//     this.arr = [1]
//     this.drink = function () {
//         console.log('我喝水')
//     }
// }
// Parent.prototype.sayHello = function () {
//     console.log('hello,everybody!')
// }
// function Child (name, like) {
//     // Parent.call(this, name)

//     Parent.apply(this, [name]) // 拷⻉了⽗类的实例属性和⽅法
//     this.like = like
//     this.play = function () {
//         console.log('我是' + name + '，我喜欢' + this.like)
//     }
// }
// // Child.prototype = new Parent()
// // Child.prototype.constructor = Child
// const child1 = new Child('张三', '乒乓球')
// child1.play()
// child1.drink()
// const child2 = new Child('小明', '足球')
// child2.play()
// child2.drink()
// console.log(child1.name, child2.name)
// child1.arr.push(2)
// console.log(child1.arr, child2.arr)
// console.log(child1)
// 3.组合继承
// 优点 1.可以向父类传参，2.子类实例之间相互独立；3.可以继承父类原型上的方法；4.父类原型上的方法 可以复用
// 缺点 调用两次父类构造函数，造成资源浪费

// function Parent (name) {
//     this.name = name || 'parent'
//     this.arr = [1]
//     this.drink = function () {
//         console.log('我喝水')
//     }
// }
// Parent.prototype.sayHello = function () {
//     console.log('hello,everybody!')
// }
// function Child (name, like) {
//     // Parent.call(this, name)
//     Parent.apply(this, [name])
//     this.like = like
//     this.play = function () {
//         console.log('我是' + name + '，我喜欢' + this.like)
//     }
// }
// Child.prototype = new Parent()
// Child.prototype.constructor = Child
// const child1 = new Child('张三', '乒乓球')
// child1.play()
// child1.drink()
// const child2 = new Child('小明', '足球')
// child2.play()
// child2.drink()
// console.log(child1.name, child2.name)
// child1.arr.push(2)
// console.log(child1.arr, child2.arr)
// console.log(child1)

// 4.组合继承优化1

// function Parent (name) {
//     this.name = name || 'parent'
//     this.arr = [1]
//     this.drink = function () {
//         console.log('我喝水')
//     }
// }
// Parent.prototype.sayHello = function () {
//     console.log('hello,everybody!')
// }
// function Child (name, like) {
//     // Parent.call(this, name)
//     Parent.apply(this, [name])
//     this.like = like
//     this.play = function () {
//         console.log('我是' + name + '，我喜欢' + this.like)
//     }
// }
// Child.prototype = Parent.prototype
// Child.prototype.constructor = Child
// const child1 = new Child('张三', '乒乓球')
// child1.play()
// child1.drink()
// const child2 = new Child('小明', '足球')
// child2.play()
// child2.drink()
// console.log(child1.name, child2.name)
// child1.arr.push(2)
// console.log(child1.arr, child2.arr)
// console.log(child1)

// 5.组合继承优化2

function Parent(name) {
  this.name = name || 'parent'
  this.arr = [1]
  this.drink = function () {
    console.log('我喝水')
  }
}
Parent.prototype.sayHello = function () {
  console.log('hello,everybody!')
}
function Child(name, like) {
  // Parent.call(this, name)
  Parent.apply(this, [name])
  this.like = like
  this.play = function () {
    console.log('我是' + name + '，我喜欢' + this.like)
  }
}
Child.prototype = Object.create(Parent.prototype)
Child.prototype.constructor = Child
const child1 = new Child('张三', '乒乓球')
child1.play()
child1.drink()
const child2 = new Child('小明', '足球')
child2.play()
child2.drink()
console.log(child1.name, child2.name)
child1.arr.push(2)
console.log(child1.arr, child2.arr)
console.log(child1)

// Object.is()用法
console.log(NaN === NaN, 'NaN') // false
console.log(Object.is(NaN, NaN), 'sss') // true
console.log(+0 === -0, '===0') // true
console.log(Object.is(+0, -0), '000') // false
console.log(5 == '5') // true
console.log(5 === '5') // false
console.log(5 == 5) // true
console.log(5 == 5) // true
console.log(Object.is(5, '5')) // false
console.log(Object.is(5, 5)) // true

// Object.setPrototypeOf() 可任意修改指定对象的原型
let person = {
  getGreeting() {
    return 'friend,hello'
  },
}
let dog = {
  getGreeting() {
    return 'dog,woof'
  },
}
// 以person为原型对象
let friend = Object.create(person)
console.log(friend.getGreeting()) // friend,hello
console.log(Object.getPrototypeOf(friend) === person, 'getPrototypeOf') // true 证明此时friend的原型是person

// 将原型改为dog
Object.setPrototypeOf(friend, dog)
console.log(friend.getGreeting()) // dog,woof
console.log(Object.getPrototypeOf(friend) === dog) // true 此时friend的原型以及修改为dog了

// Array.of() 无论传入单个数据还是多个数据，length长度都和传入数据的个数相等
let items = Array.of(1, 2)
console.log(items.length, items[0], items[1], 'kkkkss1')
items = Array.of(2)
console.log(items.length, items[0], items[1], 'kkkkss2')

// 对比使用new Array创建数组
// 如果Array中传入单个number的数字,那么数组length长度就是此数字的值
let arr = new Array(2)
console.log(arr.length, arr[0], arr[1], 'arr') // 2 undefined undefined
// 如果 Array中传入单个string的数字，那么数组length长度就是1
let arr1 = new Array('2')
console.log(arr1.length, arr1[0], arr1[1], 'arr1') // 1 undefined undefined
// 如果Array传入多个值，那么数组的length就是多个值的个数
let arr2 = new Array('2', 1)
console.log(arr2.length, arr2[0], arr2[1], 'arr2') // 2  '2' 1

// fill()
let numbers = [1, 2, 3, 4]
// 只填一个参数，代表数据全部填充为1
numbers.fill(1)
console.log(numbers)
// 只填充两个值，代表从索引2开发填充0，一直到结尾
numbers.fill(1, 2)
console.log(numbers)
numbers.fill(0, 1, 3) // 代表 所索引1开始，到索引3用0填充
console.log(numbers)

function foo() {
  console.log('你好')
}
console.log(foo.toString())
// function foo() {
// console.log('你好');
// }
