console.log('1')

// setTimeout1
setTimeout(() => {
    console.log('2')
    new Promise(resolve => {
        console.log('3')
        resolve()
    }).then(() => {
        console.log('4')
    })
}, 0)

new Promise(resolve => {
    console.log('5')
    resolve()
}).then(() => {
    console.log('6')
    setTimeout(() => {
        console.log(14)
    }, 0)
})
// setTimeout2
setTimeout(() => {
    console.log('7')
}, 0)
// setTimeout3
setTimeout(() => {
    console.log('8')
    new Promise(resolve => {
        console.log('9')
        resolve()
    }).then(() => {
        console.log('10')
    })
}, 0)

new Promise(resolve => {
    console.log('11')
    resolve()
}).then(() => {
    console.log('12')
})
console.log('13')

// 首先要把同步任务和异步任务找出来
// 从上到下 同步任务：1，5，11，13
// 微任务：6，12
// 宏任务：setTimeout1,setTimeout2,setTimeout3
// setTimeout1中区分同步和异步：
// 同步任务 2，3 微任务4
// setTimeout2中区分同步和异步：
// 同步任务 7
// setTimeout3中区分同步和异步：
// 同步任务：8，9 微任务 10

// 所以执行任务顺序，1>5>11>13>6>12>2>3>4>7>8>9>10>14
