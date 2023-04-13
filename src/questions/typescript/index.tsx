// import  './test1'
console.log('nihao')
//1.string类型
// let string: string = "nihao ts";
// let string2: string = "hello world typescript";
//2.number类型
// let num: number = 20;
// //3.boolean类型
// let bool:boolean = false;
// //4.数组类型array
// let arr1: number[] = [1, 2, 3, 4, 5];
// console.log(arr1, "ssssss");
// let arr2: Array<number> = [1, 3, 5, 5, 62, 3];
// let arr3: Array<string> = ["javascript", "react", "css", "html"];
// console.log(arr2, arr3);

// //5.元组类型
// let arr4: [string, number, boolean] = ["string", 2, false];
// //6.枚举类型 给枚举值赋值，返回的是枚举值，如果没有给枚举值赋值，返回的是枚举的索引
// enum Flag {
//     Success = 1,
//     Error = -1,
// }
// let flag: Flag = Flag.Success;
// console.log(flag, "返回1");
// enum Color {
//     blue,
//     orange,
//     red,
// }
// let color: Color = Color.blue;
// console.log(color, "返回0");
// //7.任意类型array，定义any类型，可以是任意 类型，没有限制
// let all: any = "mihao";
// all = ["3", 22, false];
// //8.null,undefined,
// let all1: null | undefined | number; //表示all1既可以是null，也可以是undefined,也可以是number
// all1 = null;
// all1 = undefined;
// all1 = 4;
// //9.void类型，一般给没有返回值的函数方法定义，如果函数有返回值就可以用返回值的类型定义
// function run (): void {
//     console.log("我是void类型定义的函数");
// }
// function run2 (): number {
//     //有返回值的时候，返回值是什么类型，就定义什么类型
//     return 43;
// }
// //10.never类型，不可能有的类型
// // let fun: never;
// // fun: (() => {
// //   throw new Error("我是一个自执行函数");
// // })();
// //11.ts中的函数写法
// // 11.1 具名函数
// function getInfo1 (name: string): string {
//     return "我叫" + name;
// }
// // 11.2 匿名函数
// var getInfo2 = function (age: number): string {
//     return "我的年龄是" + age;
// };
// // 11.3 有可选参数的函数,
// // es5中形参有实参没有传递不会报错
// // function getInfo3(name, age) {
// //   if (age) {
// //     return "我叫" + name + ",我的年龄是" + age;
// //   } else {
// //     return "我叫" + name;
// //   }
// // }
// // console.log(getInfo3("小明"));
// // ts中实参和形参必须一致，如果形参中有实参中没有传，将会报错
// function getInfo3 (name: string, age: number): string {
//     if (age) {
//         return "我叫" + name + ",我的年龄是" + age;
//     } else {
//         return "我叫" + name;
//     }
// }
// // console.log(getInfo3("小明"));//会报错
// console.log(getInfo3("小明", 12));
// //可选参数就是在形参后面加？代表不确定有没有这个参数
// function getInfo4 (name: string, age?: number) {
//     if (age) {
//         return "我叫" + name + ",我的年龄是" + age;
//     } else {
//         return "我叫" + name;
//     }
// }
// console.log(getInfo4("小明")); //不会报错

// // 11.4 有默认参数的函数,默认给形参赋值，es中的写法

// function getInfo5 (name: string, age: number = 20) {
//     if (age) {
//         return "我叫" + name + ",我的年龄是" + age;
//     } else {
//         return "我叫" + name;
//     }
// }
// console.log(getInfo4("小张"));

// // 11.5 剩余参数
// function getInfo6 (
//     a: number,
//     b: number,
//     c: number,
//     d: number,
//     e: number
// ): number {
//     return a + b + c + d + e;
// }
// console.log(getInfo6(1, 2, 3, 4, 5));
// //写法1
// function getInfo7 (...result: number[]): number {
//     var sum = 0;
//     for (let i = 0; i < result.length; i++) {
//         sum += result[i];
//     }
//     return sum;
// }
// console.log(getInfo7(1, 2, 3, 4, 5), "<getInfo7");
// //写法2:
// function getInfo8 (a: number, b: number, ...result: number[]) {
//     var sum = a + b;
//     for (let i = 0; i < result.length; i++) {
//         sum += result[i];
//     }
//     return sum;
// }
// console.log(getInfo8(1, 2, 3, 4, 5), "<getInfo8");

// // 11.6 函数重载

// function getInfo9 (name: string): string;
// function getInfo9 (age: number): string;
// function getInfo9 (str: any): any {
//     if (typeof str === "string") {
//         return "我叫" + str;
//     } else {
//         return "我的年龄" + str;
//     }
// }
// console.log(getInfo9("汪汪"));
// console.log(getInfo9(80));

// function ObjFun (labelInfo: { label: string }): void {
//     console.log("label", labelInfo);
// }

// ObjFun({ label: "nihao" });

// interface Obj {
//     firstName: string;
//     lastName: string;
// }

// function printName (nameInfo: Obj): void {
//     console.log(`我姓${nameInfo.lastName},我叫${nameInfo.firstName}`);
// }
// var obj = {
//     firstName: "莉莉",
//     lastName: "张",
//     age: 45,
// };
// printName(obj);

// //interface定义ajax接口

// interface Config {
//     method: string;
//     url: string;
//     data?: string;
//     dataType: string;
// }

// function Ajax (config: Config) {

//     var xhr = new XMLHttpRequest();
//     xhr.open(config.method, config.url, true)
//     xhr.send(config.data)
//     xhr.onreadystatechange = function () {
//         if (xhr.readyState === 4) {
//             if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
//               console.log(xhr.responseText)
//             }
//           }
//   }

// }

