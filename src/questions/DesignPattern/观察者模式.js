class Subject {
  constructor() {
    this.state = 0
    this.observers = []
  }
  getState() {
    return this.state
  }
  setState(state) {
    this.state = state
    this.notifyAllObservers()
  }
  attach(observer) {
    this.observers.push(observer)
  }
  notifyAllObservers() {
    this.observers.forEach((observer) => observer.update())
  }
}
class Observer {
  constructor(name, subject) {
    this.name = name
    this.subject = subject
    this.subject.attach(this)
  }
  update() {
    console.log(`${this.name}收到state改变为${this.subject.getState()}的消息`)
  }
}
let s = new Subject()
let o1 = new Observer('张三', s)
let o2 = new Observer('李四', s)
let o3 = new Observer('王二', s)
s.setState(1)
s.setState(2)
s.setState(3)

// 发布订阅模式
// 发布者s更新状态state，然后通知所有订阅者，所有订阅者知道状态(state)该表之后，作出反应update
