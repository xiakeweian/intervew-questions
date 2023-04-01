import Observer from './observer'
import Compile from './compile'

export default class Vue {
  constructor(options) {
    this.data = options.data
    this.methods = options.methods

    new Observer(this.data)
    new Compile(options.el, this)

    options.mounted.call(this)
  }
}
