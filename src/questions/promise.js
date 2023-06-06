// new Promise((resolve, reject) => {
//     resolve(1);
// })
//     .then(
//         (value) => {
//             console.log("onResolved1", value);
//         },
//         (reason) => {
//             console.log("onRejected1", reason);
//         }
//     )
//     .then(
//         (value) => {
//             console.log("onResolved2", value);
//         },
//         (reason) => {
//             console.log("onRejected2", reason);
//         }
//     );
// var p1 = new Promise(function (resolve, reject) {
//     resolve("Success");
//   });

//   p1.then(function (value) {
//     console.log(value); // "Success!"
//     throw "oh, no!";
//   })
//     .catch(function (e) {
//       console.log(e); // "oh, no!"
//     })
//     .then(
//       function () {
//         console.log("after a catch the chain is restored");
//       },
//       function () {
//         console.log("Not fired due to the catch");
//       }
//     );

// const p1 = Promise.resolve(2); //如果是一般值，p1 成功，value 就是这个值
// const p2 = Promise.resolve(Promise.resolve(3)); //如果是成功的 promise，p2 成功，value 就是这个值
// const p3 = Promise.resolve(Promise.reject(4)); //如果是失败的 promise，p3 失败，reason 就是这个值
// p1.then((value) => console.log("p1", value));
// p2.then((value) => console.log("p2", value));
// p3.catch((reason) => console.log("p3", reason));
// const p4 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(5);
//         // reject(6);
//     }, 1000);
// })
//     .then(
//         (value) => {
//             console.log("onResolved1", value);
//         },
//         (reason) => {
//             console.log("onRejected1", reason);
//             return new Promise((resolve, reject) => {
//                 reject(5);
//             });
//         }
//     )
//     .catch((err) => {
//         console.log(err, "pppp");
//     });

// Promise.all([p1, p2, p4]).then(
//     (value) => {
//         console.log(value, "values");
//     },
//     (reason) => {
//         console.log(reason, "reason");
//     }
// );

const promise = new Promise(function (resolve, reject) {
  console.log('promise')
  window.setTimeout(function () {
    if (false) {
      resolve('huangbiao')
    } else {
      // debugger
      reject('error1')
    }
  }, 1000)
})
  .then(function () {
    console.log('success')
  })
  .catch(function (err) {
    console.log('catch', err)
  })
  .finally(function () {
    console.log('finally')
  })

const pErr = new Promise((resolve, reject) => {
  reject('失败')
})

const pSlow = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, '最终完成')
})

const pFast = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, '很快完成')
})

Promise.any([pErr, pSlow, pFast]).then((value) => {
  console.log(value)
  // pFast fulfils first
})(function (window) {
  const PENDING = 'pending'
  const RESOLVED = 'resolved'
  const REJECTED = 'rejected'
  function Promise(excutor) {
    let self = this
    self.status = PENDING
    self.data = undefined
    self.callbacks = []
    function resolve(value) {
      if (self.status !== PENDING) return
      self.status = RESOLVED
      self.data = value
      if (self.callbacks.length > 0) {
        setTimeout(() => {
          self.callbacks.forEach((callbackObj) => {
            callbackObj.onResolved(value)
          })
        })
      }
    }

    function reject(reason) {
      if (self.status !== PENDING) return

      // 将状态改为resolved
      self.status = REJECTED
      // 保存value数据
      self.data = reason
      // 如果有待执行callback函数，立即异步执行回调函数
      if (self.callbacks.length > 0) {
        setTimeout(() => {
          // 放入队列中执行所有成功的回调
          self.callbacks.forEach((callbacksObj) => {
            callbacksObj.onRejected(reason)
          })
        })
      }

      try {
        excutor(resolve, reject)
      } catch (err) {
        reject(err)
      }
    }
  }

  Promise.prototype.then = function (onResolved, onRejected) {
    onResolved = typeof onResolved === 'function' ? onResolved : (value) => value
    onRejected = typeof onRejected === 'function' ? onRejected : (reason) => throw reason
    let self = this
    return new Promise((resolve, reject) => {
      function handle(callback) {
        try {
          const result = callback(self.data)
        } catch (err) {}
      }
    })
  }
  Promise.prototype.catch = function (onRejected) {
    let self = this
    return this.then(undefined, onRejected)
  }
})()
