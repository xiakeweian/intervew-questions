import obserable from './observable'
import autorun from './autorun'

var data = { a: { b: { c: 0, d: 'd' } } }

obserable(data)

autorun(() => {
  // console.log(data.a.b.c);
  console.log(data.a.b.d)
})

data.a.b.d = 1
data.a.b.c = 2
data.a.b.c = 3
