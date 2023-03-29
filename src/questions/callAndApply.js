// 使用apply
// function Parent (name, age) {

//     this.name = name;
//     this.age = age;
//     console.log(this, 'ddd');
// }
// function Student (name, age, grade) {
//     //this的上下文是Student,Parent.apply()中传入this,
//     //Student将会拥有Parent的方法和属性,Parent对象中的this是Student
//     console.log(this)
//     Parent.apply(this, arguments);
//     console.log(arguments);
//     this.grade = grade;
// }
// let student = new Student('zhangsan', 18, '大一');
// console.log(student);

// 使用call

function Parent (name, age) {
    this.name = name
    this.age = age
    console.log(this, 'Parentthis')
}
function Student (name, age, grade) {
    // this的上下文是Student,Parent.call()传如this,
    // Student将会有Parent的属性和方法
    Parent.call(this, name, age, grade)
    this.grade = grade
    console.log(this, 'Studentthis')
}
let student = new Student('zhangsan', 18, '大一')
console.log(student.__proto__ === Student.prototype)
