export default function setAttribute(dom, name, value) {
  if (name === 'className') {
    name = 'class'
  }

  if (name.indexOf('on') === 0) {
    name = name.toLowerCase()
    dom[name] = value || ''
  } else if (name === 'style') {
    if (!value || typeof value === 'string') {
      dom.style.cssText = value || ''
    } else if (value && typeof value === 'object') {
      for (let k in value) {
        const v = value[k]
        dom.style[k] = typeof v === 'number' ? v + 'px' : v
      }
    }
  } else {
    if (dom[name] && dom[name] !== value) {
      dom[name] = value || ''
    }

    if (value) {
      dom.setAttribute(name, value)
    } else {
      dom.setAttribute(name, value)
    }
  }
}
