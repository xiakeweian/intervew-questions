import Watcher from './watcher'
const reg = /\{\{(.*)\}\}/

export default class Compile {
  constructor(el, vm) {
    this.vm = vm
    this.el = document.querySelector(el)
    this.fragment = null

    this.init(this.el)
  }

  init(el) {
    if (el) {
      this.fragment = this.nodeToFragment(el)
      this.compileElement(el)
      this.el.appendChild(this.fragment)
    }
  }

  nodeToFragment(el) {
    const fragment = document.createDocumentFragment()
    let childNode = el.firstChild

    while (childNode) {
      fragment.appendChild(childNode)
      childNode = childNode.firstChild
    }

    return fragment
  }

  compileElement(el) {
    const childNodes = [].slice.call(el.childNodes)
    const len = childNodes.length

    for (let i = 0; i < len; i++) {
      const node = childNodes[i]
      const text = node.textContent

      if (this.isElementNode(node)) {
        this.compile(node)
      }

      if (this.isTextNode(node) && reg.test(text)) {
        this.compileText(node, reg.exec(text)[1])
      }

      if (node.childNodes && node.childNodes.length) {
        this.compileElement(node)
      }
    }
  }

  compile(node) {
    var nodeAttrs = node.attributes

    Array.prototype.forEach.call(nodeAttrs, (attr) => {
      var attrName = attr.name
      if (this.isDirective(attrName)) {
        var exp = attr.value
        var dir = attrName.substring(2)

        if (this.isEventDirective(dir)) {
          //on:eventType 事件指令

          this.compileEvent(node, exp, dir)
        } else {
          // v-model 指令

          this.compileModel(node, exp, dir)
        }
        node.removeAttribute(attrName)
      }
    })
  }

  compileText(node, exp) {
    const initText = this.vm.data[exp]
    this.textUpdator(node, initText)

    new Watcher(this.vm, exp, (newText) => {
      this.textUpdator(node, newText)
    })
  }

  compileEvent(node, exp, dir) {
    const eventType = dir.split(':')[1]
    const cb = this.vm.methods && this.vm.methods[exp]

    if ((eventType, cb)) {
      node.addEventListener(eventType, cb.bind(this.vm))
    }
  }

  compileModel(node, exp, dir) {
    let value = this.vm.data[exp]
    this.modelUpdater(node, value)

    new Watcher(this.vm, exp, (newValue) => {
      this.modelUpdater(node, newValue)
      value = newValue
    })

    node.addEventListener('input', (e) => {
      const newValue = e.target.value

      if (value !== newValue) {
        this.vm.data[exp] = newValue
      }

      value = newValue
    })
  }

  textUpdator(node, text) {
    node.textContent = typeof text === 'undefined' ? '' : text
  }

  modelUpdater(node, text) {
    node.value = typeof text === 'undefined' ? '' : text
  }

  isElementNode(node) {
    return node.nodeType == 1
  }

  isTextNode(node) {
    return node.nodeType == 3
  }

  isDirective(attr) {
    return attr.indexOf('v-') == 0
  }

  isEventDirective(dir) {
    return dir.indexOf('on:') === 0
  }
}
