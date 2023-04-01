// var obj = {};

// var proxy = new Proxy(obj, {
//   get(target, key, receiver) {
//     return Reflect.get(target, key, receiver);
//   },
//   set(target, key, value, receiver) {
//     console.log(target, key, value, receiver)
//     return Reflect.set(target, key, value, receiver);
//   }
// });

function observe(data) {
  let q = [data]
  let current = null
  let key

  while ((current = q.pop())) {
    // console.log(current)
    console.log(key)
    for (key in current) {
      q.push(current[key])
    }
  }
}

const proxy = observe({ a: { b: 1 }, c: { d: 2 } })
// console.log(proxy)
