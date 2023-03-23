// 使用class实现继承

class Person {
  constructor(name) {
    this.name = name
  }
  drink() {
    console.log('我是' + this.name + '，我渴了要喝水')
  }
}

class Student extends Person {
  constructor(name, score) {
    super(name) // 继承自Person的name
    this.score = score
  }
  answer() {
    console.log(`我叫${this.name}，我考了${this.score}分。`)
  }
}
const student = new Student('张三', 80)
console.log('student', student)
student.answer()
student.drink()
class Teacher extends Person {
  constructor(name, subject) {
    super(name)
    this.subject = subject
  }
  teach() {
    console.log(`我叫${this.name}，我教${this.subject}`)
  }
}
const teacher = new Teacher('朗朗', '音乐')
teacher.drink()
console.log('teacher', teacher)
teacher.teach()

// 类的prototype就等于实例的__proto__

console.log(Student.prototype, student.__proto__, Student.prototype === student.__proto__, 'kkk')
console.log(
  student.hasOwnProperty('name'),
  teacher instanceof Teacher,
  teacher instanceof Person,
  teacher instanceof Object
)
