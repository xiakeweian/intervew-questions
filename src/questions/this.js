let obj = {
    a: 2,
    fn: function () {
        console.log(this.a, '111') // 2
    },
    fn2: function () {
        setTimeout(function () {
            console.log(this.a, '222') // undefined
        }, 0)
    },
    fn3: function () {
        setTimeout(() => {
            console.log(this.a, '333') // 2
        }, 0)
    },
    fn4: function () {
        'use strict'
        console.log(this.a, '444') // 2
    },
    fn5: () => {
        console.log(this.a, this, '555') // undefined,箭头函数中的this指向定义它的时候所在环境上下文中的this,
    },
}
obj.fn()
// obj.fn2()
// obj.fn3()
// obj.fn4()
// obj.fn5()
// let fn6 = obj.fn4 // 严格模式下，使用函数别名，函数中的this指向window
// fn6() // 
let obj2 = {
    a: 5,
}
obj.fn.call(obj2) // 5
obj.fn2.call(obj2) // undefined
obj.fn3.call(obj2) // 5
obj.fn4.call(obj2) // 5
obj.fn5.call(obj2) // undefined