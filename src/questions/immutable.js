import immutable, { isImmutable } from 'seamless-immutable'
const obj = {
  a: 1,
  b: 2,
  c: {
    d: 3,
    e: 4,
    f: {
      m: 5,
      j: [1, 2, 3, 4, 5],
    },
  },
  isFlag: false,
}
const obj2 = {
  a: '山有木兮木有枝',
  name: '张三',
  age: 20,
  gender: '男',
  family: {
    father: {
      name: '张勇',
      age: 45,
      gender: '男',
    },
    mother: {
      name: '周灵灵',
      age: 45,
      gender: '女',
    },
    sister: {
      name: '张雅雅',
      age: 10,
      gender: '女',
    },
    brother: {
      name: '张娃娃',
      age: 4,
      gender: '男',
    },
  },
}

// form
let code1 = immutable.from([1, 2, 3])
let code2 = immutable([1, 2, 3]) // 同from()
console.log(code1, 'code1') // Immutable([1, 2, 3])
console.log(code2, 'code2') // Immutable([1, 2, 3])

// isImmutable判断是不是immutable对象
console.log(isImmutable(obj)) // false
console.log(isImmutable(code1)) // true

// set(obj,key,value,type)
// setIn (obj,key,value,type)
const data1 = immutable(obj).set('a', 100).setIn(['c', 'f', 'm'], 30)
console.log(data1, 'data1')
// update(obj,key,fun,parmas)
// updateIn(obj,key,fun,parmas)
const data2 = immutable(obj)
  .update('b', (data) => data * 2)
  .updateIn(['c', 'f', 'j'], (data) => {
    return data.map((item) => item * 2)
  })
  .updateIn(['c', 'f', 'm'], (data) => data + 10)
console.log(data2, 'data2')
// without(obj,key)
const data3 = immutable(obj).without('c')
console.log(data3, 'data3')

var object = immutable({ a: 'AA', b: 'BB', c: 'CC' })
let object1 = immutable.without(object, 'b')
// let object1 = object.without('b')
console.log(object1, 'object1') // immutable({a: 'AA', c: 'CC'})

// let object2 = immutable.without(object, ['a', 'b'])
// 上下等价
let object2 = object.without(['a', 'b'])
console.log(object2, 'object2') // immutable({ c: 'CC'})

let object3 = immutable.without(object, 'a', 'b')
console.log(object3, 'object3') // immutable({ c: 'CC'})

let object4 = immutable.without(object, (value, key) => key === 'a' || value === 'BB')
console.log(object4, 'object4') // immutable({ c: 'CC'})

// getIn(ob,arr,default)
const data4 = immutable(obj).getIn(['c', 'f', 'j'])
console.log(data4, 'data4')

// merge (obj1,obj2,type)
const newData = immutable.merge(obj, { ...obj2 }, { deep: true })
const newData2 = immutable.merge(obj, { ...obj2 }, { deep: false })
console.log(newData, newData2, 'ssss')
// replace(obj1,obj2,type)
const newData3 = immutable.replace(obj, { ...obj2 }, { deep: true })
console.log(newData3, 'ssnewData3')

// flatMap(obj,fun)
var array = immutable(['AA', 'BB', 'CC'])
// let newarr = immutable.flatMap(array, str => 'hello ' + str)
// 上下等价
let newarr = array.flatMap((str) => 'hello ' + str)
console.log(newarr, 'newarr') // immutable(["hello AA", "hello BB", "hello CC"])

// asObject(obj,fun)
// obj： immutable
// fun : function
// 迭代器函数将返回两个元素的数组 - 第一个表示键，另一个表示值。然后返回由这些键和值构成的不可变对象。

var array = immutable(['aa', 'bb'])
// let newobj = immutable.asObject(array, str => {
//     return [str, str.toUpperCase()]
// })
let newobj = array.asObject((str) => {
  return [str, str.toUpperCase()]
})
console.log(newobj, 'newobj') // immutable({aa: "AA", bb: "BB"})

// Object.assign({},obj)Object.assign()方法用于对象的合并，将源对象（source）的所有可枚举属性，复制到目标对象（target）
//  如果对象的属性值是基础类型，那么Object.assign就是深拷贝，如果对象的属性值是引用类型，那么Object.assign就是浅拷贝
let qianObj = Object.assign({}, obj)
console.log(qianObj, 'qianObj')
qianObj.a = 20
console.log(qianObj, obj, 'sss') // 此时qianObj和obj的a属性值是不同的

qianObj.c.f.j = [6, 7, 8, 9, 10]
console.log(qianObj, obj, 'ss2') // 此时qianobj和obj的属性值是相同的
