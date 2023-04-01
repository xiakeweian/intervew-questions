import { Dep } from './observer'

export default class Watcher {
  constructor(vm, exp, cb) {
    this.vm = vm
    this.exp = exp
    this.cb = cb
    this.value = this.get()
  }

  run() {
    const value = this.vm.data[this.exp]
    const oldValue = this.value

    if (oldValue !== value) {
      this.value = value
      this.cb.call(this.vm, value, oldValue)
    }
  }

  update() {
    this.run()
  }

  get() {
    Dep.target = this
    const value = this.vm.data[this.exp]
    Dep.target = null
    return value
  }
}
