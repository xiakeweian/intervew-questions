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

export default function observable(data) {
  if (data !== null && typeof data === 'object') {
    Object.keys(data).forEach((key) => {
      let value = data[key]
      let dep = new Dep()

      observable(value)

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
          if (newValue !== value) {
            value = newValue
            dep.notify()
            observable(value)
          }
        },
      })
    })
  }
}
