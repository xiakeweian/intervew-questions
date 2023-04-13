// /* 工厂类 */
// class Factory {
//     static getInstance (type) {
//         switch (type) {
//             case 'Product1':
//                 return new Product1()
//             case 'Product2':
//                 return new Product2()
//             default:
//                 throw new Error('当前没有这个产品')
//         }
//     }
// }

// /* 产品类1 */
// class Product1 {
//     constructor() { this.type = 'Product1' }
//     operate () { console.log(this.type) }
// }

// /* 产品类2 */
// class Product2 {
//     constructor() { this.type = 'Product2' }
//     operate () { console.log(this.type) }
// }

// const prod1 = Factory.getInstance('Product1')
// prod1.operate()  // 输出: Product1
// const prod2 = Factory.getInstance('Product2')
// prod2.operate()  // 输出: Product2


// Factory就是一个简单工厂。当我们调用工厂函数时，只需要传递career就可以获取到包含用户工作内容的实例对象。
function Factory (career) {
    function User (career, work) {
        this.career = career
        this.work = work
    }
    let work
    switch (career) {
        case 'coder':
            work = ['写代码', '修Bug']
            return new User(career, work)
            break
        case 'hr':
            work = ['招聘', '员工信息管理']
            return new User(career, work)
            break
        case 'driver':
            work = ['开车']
            return new User(career, work)
            break
        case 'boss':
            work = ['喝茶', '开会', '审批文件']
            return new User(career, work)
            break
    }
}
let coder = new Factory('coder')
console.log(coder)
let boss = new Factory('boss')
console.log(boss)
