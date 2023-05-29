// 节流和防抖
function debounce(fn, duration) {
  let timer = null

  return function () {
    const args = arguments
    const ctx = this
    timer && clearTimeout(timer)
    timer = setTimeout(function () {
      fn.apply(ctx, args)
    }, duration)
  }
}

function throttle(fn, duration) {
  let now = 0

  return function () {
    const t = Date.now()
    if (t - now >= duration) {
      now = t
      fn.apply(this, arguments)
    }
  }
}
