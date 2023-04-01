// import './svue';
// import './reg';
// // import './smobx';
// import './sreact';
import './es6'

Function.prototype.throttle = function (duration) {
  var fn = this
  var t = 0
  var n

  return function () {
    n = Date.now()

    if (n - t >= duration) {
      t = n
      fn.apply(this, arguments)
    }
  }
}

function log() {
  console.log('log')
}

const _log = log.throttle(3000)

// setInterval(function(){
//   _log()
// },1000)
