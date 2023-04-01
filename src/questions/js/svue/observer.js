export default class Observer {
  constructor(data) {
    this.data = data
    this.walk(data)
  }

  walk(data) {
    if (data !== null && typeof data === 'object') {
      Object.keys(data).forEach((key) => {
        this.defineReactive(data, key, data[key])
      })
    }
  }

  defineReactive(data, key, value) {
    this.walk(value)
    const dep = new Dep()

    Object.defineProperty(data, key, {
      enumerable: true,
      configurable: true,
      get() {
        if (Dep.target) {
          dep.addSub(Dep.target)
        }
        return value
      },
      set(newValue) {
        if (value !== newValue) {
          value = newValue
          dep.notify()
        }
      },
    })
  }
}

export class Dep {
  constructor() {
    this.subs = []
  }

  addSub(sub) {
    this.subs.push(sub)
  }

  notify() {
    this.subs.forEach((sub) => {
      sub.update()
    })
  }
}

Dep.target = null
