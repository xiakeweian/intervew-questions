class A {
  constructor(name, gender, age) {
    this.name = name
    this.gender = gender
    this.age = age
  }
  sayHello() {
    console.log(
      'Hi, everybody,my name is ' + this.name + ',I`m ' + this.gender + ',I`m ' + this.age
    )
  }
}

const a = new A('小明', '男', '12')
a.sayHello()
