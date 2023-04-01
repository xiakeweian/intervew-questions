import { Dep } from './observable'

export default class Watcher {
  constructor(cb) {
    this.cb = cb
    this.get()
  }

  get() {
    Dep.target = this
    this.cb()
    Dep.target = null
  }

  update() {
    this.cb()
  }
}
