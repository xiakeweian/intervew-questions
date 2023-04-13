
function run (): void {
    console.log("nihao");
}
run()
interface Fun {
    username: string;
    gender: string;
    age: number;
}
let xiaoming: Fun = {
    username: "xiaoming",
    gender: "男",
    age: 12,
};

let xiaozhang = {
    username: "xiaozhang",
    gender: "男",
    age: 13,
};
console.log(xiaoming)

class Student {
    fullName: string;
    constructor(
        public firstName: string,
        public middleInitial: string,
        public lastName: string
    ) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter (person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user = new Student("Jane", "M.", "User");
console.log(greeter(user), "pppp");

// document.body.innerHTML = greeter(user);


