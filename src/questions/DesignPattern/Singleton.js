// 单例模式
class Singleton {
  constructor(name) {
    this.name = name
  }
  getName() {
    console.log(this.name)
  }
}
// 此静态方法是获取本类实例的唯一访问点
Singleton.getInstance = (function () {
  let instance
  return function (name) {
    // 若实例不存在，则new一个新实例，否则返回已有实例
    if (!instance) {
      instance = new Singleton(name)
    }
    return instance
  }
})()

// 比较两次实例化后对象的结果是实例相同
let A = Singleton.getInstance('A')
let B = Singleton.getInstance('B')

console.log(A === B) // true
console.log(A.getName()) // 'A'
console.log(B.getName()) // 'A'
