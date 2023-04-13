// 已知数组
const list = [1, 2, 4, 4, 2, 3, 5, 2, 3, 5, 2, 7, 8, 2, 1, 6]
// 方法1 reduce+includes
function uniq (data) {
    if (!data || !data.length) return []
    const newArr = data.reduce((prev, cur) => {
        !prev.includes(cur) && prev.push(cur)
        return prev
    }, [])
    return newArr || []

}

const newList = uniq(list)
console.log(newList, '111')
// 方法2 new Set
function uniq2 (data) {
    if (!data || !data.length) return []
    return [...new Set(data)]
}
const newList2 = uniq2(list)
console.log(newList2, '222')

// 方法3 遍历
function uniq3 (data) {
    let obj = {}
    let newArr = []
    if (!data || !data.length) return []
    data.map((item) => {

        if (!obj[item]) {
            newArr.push(item)
            obj[item] = true
        }

    })
    return newArr
}
const newList3 = uniq3(list)
console.log(newList3, '3333')

// 方法四 filter
function uniq4 (data) {
    if (!data || !data.length) return []
    let newArr = data.filter((item, index, self) => { return self.indexOf(item) === index })
    return newArr
}
const newList4 = uniq4(list)
console.log(newList4, '4444')

let arr = []
let obj = {}
let fun = function () { }
const a = Object.prototype.toString.call(arr)
console.log(a, 'sssaa')
console.log(Object.prototype.toString.call({}),)
console.log(Object.is(obj), 'obj')
console.log(Object.is(fun), 'fun')
console.log(Array.isArray(arr), 'arr')

const b = Symbol()
console.log(b, typeof b, 'sss')

