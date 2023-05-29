// HJ1 字符串最后一个单词的长度
// 方法一：主要考察字符串转数组，然后获取数组最后一项，最后计算最后一项的长度，
// const line = 'hello nowcoder'
// let arr = line.trim().split(' ')
// let res = arr[arr.length - 1]
// console.log(res.length)
// 方法二：使用数组的pop()方法并返回最后一项
// const line = 'hello nowcoder'
// let arr = line.trim().split(' ')
// const last = arr.pop()
// console.log(last.length)


// HJ1 计算某字符出现次数,不区分大小写 
// 将字符串str全部转成小些，然后将需要比对的字符char也转成小些，然后获取字符串中该字符的个数
// const str = 'ABCabc'
// const char = 'A'

// const newStr = str.toLowerCase()
// let sum = 0
// for (let i = 0; i < newStr.length; i++) {
//     if (newStr[i] === char.toLowerCase()) {
//         sum += 1
//     }
// }
// console.log(sum, 'kk')



// let line = 'abc'
// function fn (line) {
//     if (line.length < 8) {
//         console.log(line.padEnd(8, '0'), 'jjj')

//     } else if (line.length >= 8) {

//         let ceilLineLen = Math.ceil(line.length / 8)
//         line = line.padEnd(ceilLineLen * 8, '0')

//         for (let i = 0; i < line.length / 8; i++) {
//             console.log(line.slice(i * 8, (i + 1) * 8), 'kkk')

//         }
//     }
// }

// console.log(fn('skdjfjlsjusshhe3232455'))


// 十六进制转十进制 0xAA -> 170
// function fn2 (line) {
//     let obj = {
//         0: 0,
//         1: 1,
//         2: 2,
//         3: 3,
//         4: 4,
//         5: 5,
//         6: 6,
//         7: 7,
//         8: 8,
//         9: 9,
//         a: 10,
//         b: 11,
//         c: 12,
//         d: 13,
//         e: 14,
//         f: 15
//     }
//     let newLine = line.toLowerCase()
//     if (line.indexOf('0x') > -1) {
//         newLine = newLine.slice(2)
//     } else if (line.slice(-2) == '16') {

//         newLine = newLine.slice(0, line.length - 2)
//     }
//     let len = newLine.length
//     let sum = 0
//     for (let i = 0; i < len; i++) {

//         sum += obj[newLine[i]] * Math.pow(16, len - i - 1)

//     }
//     return sum
// }
// const a = fn2('2BAD16')

// // 十六进制转十进制方法2
// function fn (str) {
//     let newStr = "";
//     if (str.slice(-2) == "16") {
//         newStr = "0x" + str.slice(0, -2);
//     } else if (str.slice(0, 2) !== "0x") {
//         newStr = "0x" + str;
//     } else {
//         newStr = str
//     }
//     return parseInt(newStr, 16).toString(10);
// }
// const a2 = fn('2BAD16')
// console.log(a2, 'ssssss')


// function check(line) {
//     const num = parseInt(line);
//     const result = [];
//     let current = num;
//     while(current > 1) {
//         for(let i = 2; i <= current; i++) {
//             if(current % i === 0) {
//                 current /= i;
//                 result.push(i);
//                 break;
//             }
//         }
//     }
//     return result.join(" ");
// }
// console.log(check(line));

// HJ6 质数因子
// while ((line = await readline())) {
//     let i = 2; // 变量2
//     let res = [];
//     let n = line;// 变量1
//     while (n > 2) {
//         if (n % i == 0) {
//             res.push(i);
//             n = n / i;
//             i = 2;
//         } else {
//             i++;
//         }
//     }
//     console.log(res.join(" "));

// }


// const rl = require("readline").createInterface({ input: process.stdin });
// var iter = rl[Symbol.asyncIterator]();
// const readline = async () => (await iter.next()).value;

// void async function () {
//     const line1 = await readline()

//     let arr = []
//     for (let i = 0; i < line1; i++) {
//         const line = await readline()
//         if (!arr.includes(line)) {
//             arr.push(line)
//         }
//     }
//     arr.sort((a, b) => a - b)
//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i])
//     }
// }()


// const line = 9876673
// const data = line.toString().split('').reverse()
// let newData = []
// for (let i = 0; i < data.length; i++) {

//     if (!newData.includes(data[i])) {
//         newData.push(data[i])
//     }

// }
// const res = newData.join('')
// console.log(res)

// HJ17 坐标移动
// 坐标移动，首先要判断是否符合一个字母，1-2个数字，筛选出符合条件的，如果没有返回0，0，如果有，遍历筛选出来的坐标，
// slice截取字母和数字，根据字母和数字决定决定x,y大小，字母A是x方向上减小，字母D是x方向上增大，字母W是y方向增加，字母S是y方向上减小
// const line = 'A10;S20;W10;D30;X;A1A;B10A11;;A10;'
// let newData = line.split(';')
// let wordExp = /^[A-Z]{1}\d{1,2}$/
// var x = 0, y = 0;
// newData = newData.filter((item) => {
//     return wordExp.test(item)
// })
// if (!newData.length) {
//     console.log(`${x},${y}`)
//     return
// }

// for (let i = 0; i < newData.length; i++) {
//     let w = newData[i].slice(0, 1)
//     let num = Number(newData[i].slice(1))
//     if (w === 'A') {
//         x -= num
//     } else if (w === 'D') {
//         x += num
//     } else if (w === 'W') {
//         y += num
//     } else if (w === 'S') {
//         y -= num
//     }

// }
// console.log(`${x},${y}`)


// // 字母排序
// // 字母排序直接用sort
// let arr = [
//     'cap', 'to',
//     'cat', 'card',
//     'two', 'too',
//     'up', 'boat',
// ]
// arr.sort() 
// 结果：[
//   'boat', 'boot',
//   'cap',  'card',
//   'cat',  'to',
//   'too',  'two',
//   'up'
// ]

// HJ20 密码验证合格程序
// 密码要求:

// 1.长度超过8位

// 2.包括大小写字母.数字.其它符号,以上四种至少三种

// 3.不能有长度大于2的包含公共元素的子串重复 （注：其他符号不含空格或换行）

// 数据范围：输入的字符串长度满足 1≤n≤100 
// function passwordCheck (line) {
//     if (line.length <= 8 || line.length > 8 && checkMut(line)) {
//         console.log('NG')
//     } else {
//         let lower = /[a-z]/
//         let upper = /[A-Z]/
//         let num = /\d+/
//         let arr = line.split('')
//         let obj = {
//             lower: false,
//             upper: false,
//             num: false,
//             other: false
//         }
//         arr.map((item) => {
//             if (lower.test(item)) {
//                 obj['lower'] = true
//             } else if (upper.test(item)) {
//                 obj['upper'] = true
//             } else if (num.test(item)) {
//                 obj['num'] = true
//             } else if (!lower.test(item) && !upper.test(item) && !num.test(item)) {
//                 obj['other'] = true

//             }

//         })
//         let data = Object.values(obj).filter((item) => item === true)
//         if (data.length >= 3) {
//             console.log('OK')
//         } else {
//             console.log('NG')
//         }

//     }


// }
// function checkMut (line) {

//     let obj = {}, flag = false
//     for (let i = 0; i < line.length; i++) {
//         const str = line.slice(i, (i + 1) * 3).slice(0, 3)
//         if (!obj[str]) {
//             obj[str] = 1

//         } else {
//             flag = true
//             obj[str] += 1
//         }

//     }

//     return flag

// }

// passwordCheck('021$bc9000')

// HJ21 简单密码

// const obj = {
//     1: 1,
//     2: 'abc',
//     3: 'def',
//     4: 'ghi',
//     5: 'jkl',
//     6: 'mno',
//     7: 'pqrs',
//     8: 'tuv',
//     9: 'wxyz'
// }
// let upper = /[A-Z]/
// let lower = /[a-z]/
// function matchStr (line) {
//     let arr = line.split('')
//     arr.map((item, ind) => {

//         if (lower.test(item)) {
//             for (let key in obj) {
//                 if (obj[key].toString().indexOf(item) > -1) {
//                     arr[ind] = key
//                 }
//             }
//         } else if (upper.test(item)) {

//             for (let key in obj) {
//                 let str = obj[key].toString()
//                 if (str.indexOf(item.toLowerCase()) > -1) {

//                     const index = str.indexOf(item.toLowerCase())
//                     if (str.slice(index + 1, index + 2) && str.indexOf(str.slice(index + 1, index + 2)) > -1) {
//                         arr[ind] = str.slice(index + 1, index + 2)
//                     } else {
//                         let newKey = Number(key)
//                         if (newKey + 1 === 10) {
//                             arr[ind] = obj[2].toString().slice(0, 1)

//                         } else if (obj[newKey + 1] !== 1) {
//                             arr[ind] = obj[newKey + 1].toString().slice(0, 1)
//                         } else {
//                             console.log(item, 'ss')
//                             arr[ind] = obj[newKey + 2].slice(0, 1)
//                         }
//                     }




//                 }
//             }
//         }
//     })
//     console.log(arr.join(''))


// }

// matchStr('7Lsu52')

// HJ22 汽水瓶
// 能喝多少瓶汽水，每三个空瓶子可以换取一瓶汽水，Math.floor(n / 2)

// function switchDrink (n) {

//     let current = Math.floor(n / 2)
//     console.log(current)

// }



// switchDrink(0)

// HJ23 删除字符串中出现次数最少的字符
// 可以用对象存储每个字符出现的次数，然后获取对象的values，再排序

// function deleteChar (str) {
//     let obj = {}

//     for (let i = 0; i < str.length; i++) {

//         if (!obj[str.charAt(i)]) {
//             obj[str.charAt(i)] = 1
//         } else {
//             obj[str.charAt(i)] += 1
//         }
//     }
//     // 找出出现次数最少的

//     let data = Object.values(obj).sort((a, b) => a - b)
//     let littleTime = data[0]
//     let newStr = ''
//     for (let i = 0; i < str.length; i++) {
//         if (obj[str.charAt(i)] !== littleTime) {
//             newStr += str.charAt(i)
//         }
//     }

// }
// deleteChar('aabcddd')


// 合唱队
// 字符串排序
// const line = 'A Famous Saying: Much Ado About Nothing (2012/8).'
// let sorted = new Array(26).fill(""),
//     aCode = "a".charCodeAt(0),
//     ACode = "A".charCodeAt(0)
// // console.log(aCode, ACode, 'lll')
// for (let s of line) {

//     const sCode = s.charCodeAt(0)
//     // console.log(s,sCode)
//     if (/[a-z]/.test(s)) {
//         // console.log(s, sCode - aCode, 'ss')
//         sorted[sCode - aCode] += s
//     } else if (/[A-Z]/.test(s)) {
//         // console.log(s, sCode - sCode, 'lll')
//         sorted[sCode - ACode] += s
//     }
// }
// console.log(sorted)
// sorted = sorted.join("").split("");
// for (let i = 0; i < line.length; i++) {
//     if (/[^a-zA-Z]+/.test(line[i])) {
//         console.log(line[i], 'ssss')
//         sorted.splice(i, 0, line[i]);
//     }
// }
// console.log(sorted.join(""));


// const line = '3 abc bca cab abc 1'
// // const line = '6 cab ad abcd cba abc bca abc 1'
// const data = line.split(' ')
// const n = data[0] // 自己和兄弟元素和非兄弟元素的列表个数
// const k = data[data.length - 1] // 兄弟元素中的第几位
// const x = data[data.length - 2] // 自己
// let list = data.slice(1, Number(n) + 1) // 自己和兄弟元素和非兄弟元素的列表
// let newArr = []

// for (let i = 0; i < list.length; i++) {

//     if (list[i].length === x.length && list[i].split('').sort().join('') === x.split('').sort().join('')) {

//         newArr.push(list[i])
//     }

// }
// newArr.sort()
// const sliblings = newArr.filter((item) => item !== x)
// console.log(sliblings.length)
// if (sliblings.length >= k) {
//     console.log(sliblings[k - 1])
// }

// const n = 4
// const str = '2 5 6 13'
// const list = str.split(' ').map(Number)
// const newArr = []
// for (let i = 0; i < list.length; i++) {
//     for (let j = 1; j < list.length; j++) {
//         if (!newArr.includes(list[i] + list[j]) && list[i] != list[j]) {
//             newArr.push(list[i] + list[j])
//         }
//     }
// }
// const sushu = []
// newArr.map((item) => {
//     if (isPrime(item)) {
//         sushu.push(item)
//     }
// })
// function isPrime (num) {
//     if (!num) return false;
//     if (Number(num) == 1 ) return false;
//     for (i = 2; i < num; i++) {
//         if (num % i == 0) {
//             return false
//         }
//     }
//     return true
// }
// 减少遍历次数
// function isPrime(num) {
//     if(!num || Number(num) === 1) return false
//     if(num <= 3) return num >=2
//     let miMax = Math.sqrt(num)
//     for(let i = 2;i < miMax;i++) {
//         if(num % i == 0) {
//             return false
//         }
//     }
//     return true

// }

// console.log(sushu)




// function switchPassword (line, isPos) {

//     let lower = /[a-z]/
//     const upper = /[A-Z]/
//     const number = /\d+/
//     let newData = []
//     for (let i = 0; i < line.length; i++) {
//         if (lower.test(line[i])) {
//             if (isPos) {
//                 if (line[i].charCodeAt(0) == 'z'.charCodeAt(0)) {
//                     newData.push('A')
//                 } else {
//                     newData.push(String.fromCharCode(line[i].charCodeAt(0) + 1).toUpperCase())
//                 }
//             } else {
//                 if (line[i].charCodeAt(0) == 'a'.charCodeAt(0)) {
//                     newData.push('Z')
//                 } else {
//                     newData.push(String.fromCharCode(line[i].charCodeAt(0) - 1).toUpperCase())
//                 }
//             }

//         } else if (upper.test(line[i])) {
//             if (isPos) {
//                 if (line[i].charCodeAt(0) == 'Z'.charCodeAt(0)) {
//                     newData.push('a')
//                 } else {
//                     newData.push(String.fromCharCode(line[i].charCodeAt(0) + 1).toLowerCase())
//                 }
//             } else {
//                 if (line[i].charCodeAt(0) == 'A'.charCodeAt(0)) {
//                     newData.push('z')
//                 } else {
//                     newData.push(String.fromCharCode(line[i].charCodeAt(0) - 1).toLowerCase())
//                 }
//             }


//         } else if (number.test(line[i])) {
//             if (isPos) {
//                 if (line[i] == 9) {
//                     newData.push(0)
//                 } else {
//                     newData.push(Number(line[i]) + 1)
//                 }
//             } else {
//                 if (line[i] == 0) {
//                     newData.push(9)
//                 } else {
//                     newData.push(Number(line[i]) - 1)
//                 }

//             }

//         }


//     }

//     console.log(newData.join(''))

// }
// const line = 'BCD22456269EFwewHzZ'
// switchPassword(line, false)


// const line = 'I am a student'
// const line = '$bo*y gi!r#l'

// const aCode = 'a'.charCodeAt(0)
// const ACode = 'A'.charCodeAt(0)
// const zCode = 'z'.charCodeAt(0)
// const ZCode = 'Z'.charCodeAt(0)
// let newData = []
// for (let i = 0; i < line.length; i++) {
//     if ((line[i].charCodeAt(0) >= aCode && line[i].charCodeAt(0) <= zCode ||
//         line[i].charCodeAt(0) >= ACode && line[i].charCodeAt(0) <= ZCode)

//     ) {
//         newData.push(line[i])
//     } else {
//         newData.push(' ')
//     }

// }
// console.log(newData.join('').split(' ').reverse().join(' '))

// 32密码截取，主要考回文子串
// const line = 'AB'
// const line = 'ABBBA'
// const line = '12HHHHA'
// const line = 'cvhuocqtmstfisgzwhutwoscfomfocfktliktumejbfkugpmhlckljrjbczojzoxwpskkxfbkignmlnejujxwwpsiovuvkflhjdqjtvddloqxdjsvntygvsyqvmwioqgtuqmlpdnvxmjkenrltmenvhcqdrptwerthumwezrcidrzehwyskmovsjkhkitpbemujveknxhscjokkdivssoodxswcoqebouckkhyiwrbydyh'
// const line = 'AHHHA'
// 第一种方法计算时间复杂度太高
// const lineArr = line.split('')
// function passwordSub (line) {
//     let num = 0
//     const arr = [], arr2 = []
//     for (let j = 0; j < line.length; j++) {
//         num = j
//         for (let i = num + 1; i < line.length + 1; i++) {
//             if (!arr.includes(line.substring(num, i))) {
//                 arr.push(line.substring(num, i))
//             }
//         }
//     }

//     return arr
// }
// const reverseLine = lineArr.reverse().join('')
// const positiveData = passwordSub(line)
// const negativeData = passwordSub(reverseLine)
// console.log(positiveData, negativeData, 'sss')

// let commonData = [], max = 0
// positiveData.map((item) => {
//     if (negativeData.includes(item) && !commonData.includes(item)) {

//         commonData.push(item)
//         if (item.length > max) {
//             max = item.length
//         }

//     }
// })

// console.log(max)
// 方法2,利用substring截取字符串
// let max = 0
// for (let i = 0; i < line.length - 2; i++) {
//     let s1 = solution(i, i + 1) // 偶数
//     let s2 = solution(i, i + 2) // 奇数
//     max = Math.max(s1.length, s2.length, max)
// }
// console.log(max)

// function solution (l, r, s = line) {
//     let res = s.substring(l, r + 1)
//     while (l >= 0 && r < s.length && s[l] === s[r]) {
//         res = s.substring(l, r + 1)
//         l--
//         r++
//     }
//     return res
// }

// 方法3，利用substr截取字符串，
// let res = ''
// for (let i = 0; i < line.length; i++) {
//     // 奇数情况ABA，以中间字符为中心，判断两侧字符是否相等
//     let l = i - 1, r = i + 1

//     while (l >= 0 && r < line.length && line[l] === line[r]) {

//         l--
//         r++
//         if (res.length < r - l - 1) {
//             res = line.substr(l + 1, r - l - 1)
//         }
//     }

//     // 偶数情况ABBA
//     l = i, r = i + 1
//     while (l >= 0 && r < line.length && line[l] === line[r]) {
//         l--
//         r++
//         if (res.length < r - l - 1) {
//             res = line.substr(l + 1, r - l - 1)
//         }
//     }
// }
// console.log(res.length)



// HJ33 整数与IP地址间的转换

// let line = '10.0.3.193'
// const data = line.split('.').map((item) => parseInt(item).toString(2)).map((item) => item.padStart(8, '0')).join('')
// console.log(data, parseInt(data, 2).toString(10))
// let sum = 0
// for (let i = 0; i < data.length; i++) {
//     sum += parseInt(data[i]) * Math.pow(2, data.length - i - 1)
// }
// console.log(sum)



// HJ34 图片整理
// let line = 'Ihave1nose2hands10fingers'
// let newArr = []

// const list = line.split('').sort()
// console.log(list.join(''))
// HJ35 蛇形矩阵
// const line = 4

// let arr = new Array(line).fill(1)
// arr.map((item, i) => {
//     if (i !== 0) {
//         arr[i] = arr[i - 1] + i + 1
//     }
// })
// console.log(arr, 'ssarr')
// let res = ''
// let count = line
// while (count > 0) {
//     for (let i = 0; i < count; i++) {
//         res += i === count - 1 ? `${arr[i]}\n` : `${arr[i]} `
//         arr[i] = arr[i + 1] - 1
//     }
//     count--
// }
// console.log(res)

// HJ36 字符串加密
// 密钥和字符表合成一个新的字母串newword，并去重，去重之后的长度和word长度一样，看下要加密的字符串str在旧的字母串中位置是什么字母
// const key = 'nihao'
// const str = 'ni'
// let word = 'abcdefghijklmnopqrstuvwxyz'
// let obj = {}
// const newWord = key + word
// const list = [...new Set(newWord)]
// let newStr = ''
// let inds = []
// for (let i = 0; i < str.length; i++) {
//     inds.push(list[word.indexOf(str[i])])
// }
// console.log(inds.join(''))



// HJ80 整型数组合并
// const line = '3'
// const str1 = '1 2 5'
// const line1 = '4'
// const str2 = '-1 0 3 2'
// let list1 = str1.split(' ')
// let list2 = str2.split(' ')
// let newData = [...new Set([...list1.concat(list2)])]
// newData.sort((a, b) => a - b)
// console.log(newData.join(''))


// const line = '5 2'
// const line2 = '1 3 5 7 2'
// const arr = line.split(' ')
// const k = arr[1]
// const list = line2.split(' ').sort((a, b) => a - b)
// console.log(list.slice(0, k).join(' '))

// HJ108 求最小公倍数
// const line = '5 7'
// const arr = line.split(' ')
// const num1 = arr[0], num2 = arr[1]
// // 最小公倍数一定在num1 * num2之间，且大于等于num1和num2中最大的数，遍历，遇到符合条件的就跳出
// function fn (num1, num2) {
//     const max = Math.max(num1, num2)
//     let res = 1
//     for (let i = max; i <= num1 * num2; i++) {
//         if (i % num1 === 0 && i % num2 === 0) {
//             res = i
//             break
//         }
//     }
//     return res

// }
// console.log(fn(num1, num2))

// HJ106 字符逆序
// const line = 'I am a student'
// const list = line.split(' ')
// let newList = list.map((item) => item.split('').reverse().join(''))
// console.log(newList.reverse().join(' '))

// 表达式计算

// 使用eval

// HJ56 完全数计算

// const line = '1000'
// let count = 0
// for (let i = 1; i < Number(line); i++) {
//     let all = 0
//     for (j = 1; j < i; j++) {
//         if (i % j === 0) {
//             all += j
//         }
//     }
//     if (all == i) count++
// }
// console.log(count)

// HJ72 百钱买百鸡问题
// const line = 1
// let x = 0, y = 0, z = 0
// const newLine = Number(line) * 100
// for (x = 0; x < 20; x++) {
//     for (y = 0; y < 33; y++) {
//         for (z = 0; z < 100; z++) {
//             if (x + y + z === 100 && 5 * x + 3 * y + z / 3 === 100) {
//                 console.log(x, y, z)
//             }
//         }
//     }
// }


// leetcode 12整数转罗马字

// 1,4,5,9,10,50,40,90,100,400,500,900,1000
// function fn(num) {
//     let values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
// let reps = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
// let res = ''
// for(let i = 0; i < 13;i++) {
//     while(num >= values[i]) {
//         num-=values[i]
//         res+=reps[i]
//     }
// }
// return res
// }

// leetcode 罗马数字转数字
// 将罗马数字种的CM,CD,XC,XL,IX,IV分别转成一个字符a,b,c,d,e,f
// function fn (s) {
//     s = s.replace('CM', 'a')
//     s = s.replace('CD', 'b')
//     s = s.replace('XC', 'c')
//     s = s.replace('XL', 'd')
//     s = s.replace('IX', 'e')
//     s = s.replace('IV', 'f')
//     const obj = {
//         M: 1000,
//         D: 500,
//         C: 100,
//         L: 50,
//         X: 10,
//         V: 5,
//         I: 1,
//         a: 900,
//         b: 400,
//         c: 90,
//         d:40,
//         e:9,
//         f:4
//     }
//     let res = 0
//     for(let i = 0; i<s.length;i++) {
//         res+= obj[s.charAt(i)] ? obj[s.charAt(i)] : 0
//     }
//     return res

// }



// HJ60 查找组成一个偶数最接近的两个素数
// let num = Number(22)
// let res = []

// for (let i = 2; i < num; i++) {
//     let x = i, y = i, cha = num
//     while (x >= 2 && y >= 2 && y < num && x + y === num) {

//         if (x === y && x === 2 && y === 2) {
//             res.push(2, 2)
//         }

//         if (x !== 2 && x % 2 !== 0 && y % 2 !== 0 && isPrime(x) && isPrime(y)) {

//             if (cha > y - x) {
//                 cha = y - x
//                 res.push(x, y)
//             }
//         }
//         x--
//         y++

//     }
// }
// console.log(res.join('\n'))
// function isPrime (num) {
//     if (!num) return false
//     if (Number(num) == 1) return false
//     for (i = 2; i < num; i++) {
//         if (num % i == 0) {
//             return false
//         }
//     }
//     return true
// }


// HJ59 找出字符串中第一个只出现一次的字符
// const line = 'asdfsddfdsfdsgewwrwerwegbqapb'
// let obj = {}
// for (let i = 0; i < line.length; i++) {
//     if (!obj[line.charAt(i)]) {
//         obj[line.charAt(i)] = 1
//     } else {
//         obj[line.charAt(i)] += 1
//     }
// }
// let s = ''
// let values = Object.values(obj)
// let keys = Object.keys(obj)
// for (let i = 0; i < values.length; i++) {
//     if (values[i] === 1) {
//         s = keys[i]
//         break
//     } else {
//         s = -1
//     }
// }
// console.log(s)


// HJ61 放苹果 主要看m分成n个数相加，有多少种情况
// 如果有1个苹果或1个盘子，就只有一种情况
// 如果0个盘子，则为0
// 如果n > m，盘子数多于苹果数，
// 如果每个盘子都有至少一个苹果，那么就是m > n,剩下m - n个苹果放到n个盘子里
// 如果有一个盘子为空，那么问题转换为m个苹果放到n - 1个盘子里
// const line = '6 3'
// const [m, n] = line.split(' ')

// function fn (m, n) {
//     if (m === 1 || n === 1) {
//         return 1
//     } else if (m < 0 || n <= 0) {
//         return 0

//     } else {
//         return fn(m, n - 1) + fn(m - n, n)
//     }
// }
// console.log(fn(m, n))


// HJ62 查找输入整数二进制中1的个数,十进制转二进制
// const line = 5
// let num = parseInt(line).toString(2)
// let res = 0
// for (let i = 0; i < num.length; i++) {
//     if (num.charAt(i) == 1) {
//         res += 1
//     }
// }
// console.log(res)
// console.log(parseInt('2BAD16', 16).toString)

// HJ73 计算日期到天数转换
// const line = '2012 11 30'
// const [year, month, day] = line.split(' ')
// // 1.要判断月份是否是1，如果是直接返回day
// // 2.遍历每月的时间，获取总数
// // 然后判断下是否是闰年，如果是闰年，2月份多加1天
// // 是否是闰年
// function isfullyear (year) {
//     if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
//         return true
//     }
// }
// const monthDay = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

// let sum = Number(day)
// if (month == 1) {
//     console.log(sum)
// } else {
//     for (let i = 0; i < Number(month) - 1; i++) {
//         sum += monthDay[i]
//     }
//     if (isfullyear(year) && month > 2) {
//         sum++
//     }
//     console.log(sum)
// }
// HJ81 字符串字符匹配
// const line = 'okekwgktczxeposiirjmquypjbohexyinlktaunjyhkjw'
// const str = 'yjynxoawaobtbpyxhbqpzdqjehydzfistxtlzrqzdotglpcunfmpvaparnxkmsybwo'
// // 数组的every方法，当短字符串中的每一项都被包含在长字符串中返回true，反之返回false
// let arr = line.split('')
// let str_list = str.split('')

// const flag = arr.every((item) => str_list.includes(item))
// console.log(flag, 'kk')


// HJ84 统计大写字母个数

// let line = 'A 1a0M1N1150175017(&^%&$vabovbaoadd 123#$%#%#O'
// const upperExp = /[A-Z]+/
// let sum = 0
// for (let i = 0; i < line.length; i++) {
//     if (upperExp.test(line.charAt(i))) {
//         sum += 1
//     }
// }
// console.log(sum)


// HJ100 等差数列
// 2 5 8 11 14
// 1 2 3 4  5
// 等差数列共识An = A1 + (n - 1) * 3
// 等差数列前n项和公式
// Sn = n * (A1 + An) / 2
// const n = 2
// const A1 = 2
// const An = A1 + (n - 1) * 3

// let sum = n * (A1 + An) / 2

// console.log(sum)

// HJ99 自守数
// 范围 1≤n≤10000 
// const line = '10000'
// let sum = 0
// for (let i = 0; i < Number(line) + 1; i++) {
//     let mi = Math.pow(i, 2)

//     if (i === 10000) {
//         let str = mi.toString()
//         let five = str.substring(str.length - 5)
//         let four = str.substring(str.length - 4)
//         let three = str.substring(str.length - 3)
//         let two = str.substring(str.length - 2)
//         let one = str.substring(str.length - 1)

//         if (i == five || i == four || i == three || i == two || i == one) {
//             sum += 1
//         }

//     } else if (parseInt(i / 1000) >= 1) {
//         let str = mi.toString()

//         let four = str.substring(str.length - 4)
//         let three = str.substring(str.length - 3)
//         let two = str.substring(str.length - 2)
//         let one = str.substring(str.length - 1)

//         if (i == four || i == three || i == two || i == one) {
//             sum += 1
//         }

//     } else if (parseInt(i / 100) >= 1) {
//         let str = mi.toString()

//         let three = str.substring(str.length - 3)
//         let two = str.substring(str.length - 2)
//         let one = str.substring(str.length - 1)

//         if (i == three || i == two || i == one) {
//             sum += 1
//         }

//     } else if (parseInt(i / 10) >= 1) {
//         let str = mi.toString()

//         let two = str.substring(str.length - 2)
//         let one = str.substring(str.length - 1)

//         if (i == two || i == one) {
//             sum += 1
//         }

//     } else {
//         let str = mi.toString()
//         let one = str.substring(str.length - 1)
//         if (i == one) {
//             sum += 1
//         }

//     }

// }
// console.log(sum)

// HJ96 表示数字



// const line = 'Jkdi234klowe90a3'
// 方法1 replacee方法
// line = line.replace(/\d+/g, (val) => '*' + val + '*')
// console.log(line)
// 方法2

// const lines = line.split('')
// var array = []
// if (parseInt(lines[0]) >= 0) {
//     array.push('*')
// }
// for (i = 0; i < lines.length; i++) {
//     array.push(lines[i])
//     if (parseInt(line[i]) >= 0) {
//         if (isNaN(parseInt(lines[i + 1]))) {
//             array.push('*')
//         }
//     } else {
//         if (parseInt(lines[i + 1]) >= 0) {
//             array.push('*')
//         }
//     }
// }
// console.log(array.join(''))


// HJ85 最长回文子串
// const line = 'cdabbacc'
// let str = ''
// for (let i = 0; i < line.length; i++) {
//     // 回文子串为奇数
//     let l = i - 1, r = i + 1
//     while (l >= 0 && r < line.length && line[l] === line[r]) {
//         l--
//         r++
//         if (str.length < r - l - 1) {
//             str = line.substr(l + 1, r - l - 1)
//         }
//     }
//     // 回文子串为偶数
//     l = i, r = i + 1
//     while (l >= 0 && r < line.length && line[l] === line[r]) {
//         l--
//         r++
//         if (str.length < r - l - 1) {
//             str = line.substr(l + 1, r - l - 1)
//         }
//     }
// }
// console.log(str)


// HJ87 密码强度等级


// 一、密码长度:
// 5 分: 小于等于4 个字符, 10 分: 5 到7 字符 ,25 分: 大于等于8 个字符

// function checkLen (str) {

//     let score = 0
//     if (str.length <= 4) {
//         score = 5
//     } else if (str.length >= 5 && str.length <= 7) {
//         score = 10
//     } else if (str.length >= 8) {
//         score = 25
//     }
//     return score

// }
// // 二、字母:
// // 0 分: 没有字母,10 分: 密码里的字母全都是小（大）写字母, 20 分: 密码里的字母符合”大小写混合“

// function checkletter (str) {

//     const upperExp = /[A-Z]/
//     const lowerExp = /[a-z]/
//     let score = 0
//     let array = str.split('')
//     let upperSum = 0, lowerSum = 0
//     array.forEach((item) => {
//         if (upperExp.test(item)) {
//             upperSum++
//         } else if (lowerExp.test(item)) {
//             lowerSum++
//         }
//     })
//     if (upperSum === 0 && lowerSum === 0) {
//         score = 0
//     } else if (upperSum >= 1 && lowerSum >= 1) {
//         score = 20
//     } else {
//         score = 10
//     }
//     return score

// }
// // 三、数字:
// // 0 分: 没有数字;10 分: 1 个数字; 20 分: 大于1 个数字

// function checkNumber (str) {
//     const numExp = /\d+/
//     let score = 0, sum = 0
//     let array = str.split('')

//     array.forEach((item) => {
//         if (numExp.test(item)) {
//             sum++
//         }
//     })
//     if (sum === 0) {
//         score = 0
//     } else if (sum === 1) {
//         score = 10
//     } else {
//         score = 20
//     }
//     return score

// }
// // 四、符号:
// // 0 分: 没有符号;10 分: 1 个符号;25 分: 大于1 个符号
// function checkMark (str) {
//     const upperExp = /[A-Z]/
//     const lowerExp = /[a-z]/
//     const numExp = /\d+/

//     let array = str.split('')
//     let numberSum = 0, upperSum = 0, lowerSum = 0

//     array.forEach((item) => {
//         if (numExp.test(item)) {
//             numberSum++
//         } else if (upperExp.test(item)) {
//             upperSum++
//         } else if (lowerExp.test(item)) {
//             lowerSum++
//         }
//     })
//     if (numberSum + upperSum + lowerSum === array.length) {
//         score = 0
//     } else if (array.length - (numberSum + upperSum + lowerSum) === 1) {
//         score = 10
//     } else {
//         score = 25
//     }
//     return score

// }
// // 五、奖励（只能选符合最多的那一种奖励）:
// // 2 分: 字母和数字;3 分: 字母、数字和符号;5 分: 大小写字母、数字和符号
// function checkReward (str) {

//     let score = 0

//     if (checkletter(str) >= 20 && checkNumber(str) > 0 && checkMark(str) > 0) {
//         score = 5
//     } else if (checkletter(str) === 10 && checkNumber(str) > 0 && checkMark(str) > 0) {
//         score = 3
//     } if (checkletter(str) > 0 && checkNumber(str) > 0 && checkMark(str) === 0) {
//         score = 2
//     }
//     return score
// }
// // const line = '8$@NoNoN'
// const line = 'Aa1('
// const res = checkLen(line) + checkletter(line) + checkNumber(line) + checkMark(line) + checkReward(line)

// const arr = [90, 80, 70, 60, 50, 25, 0]
// const arr1 = ['VERY_SECURE', 'SECURE', 'VERY_STRONG', 'STRONG', 'AVERAGE', 'WEAK', 'VERY_WEAK']

// console.log(checkLen(line), checkletter(line), checkNumber(line), checkMark(line), checkReward(line))
// let result = ''
// for (let i = 0; i < arr.length; i++) {
//     if (res >= Number(arr[i])) {
//         result = arr1[i]
//         break
//     }
// }
// console.log(result)

// HJ86 求最大连续bit数
// const line = 5100
// const str = parseInt(line).toString(2)
// let sum = 0
// let res = 0
// const array = str.split('0').map(Number)

// const max = Math.max(...array)

// console.log(max.toString().length)


// HJ94 记票统计
// const n = 4
// const names = 'A B C D'
// const num = '8'
// const tickets = 'A D E CF A GG A B'
// const n = 3
// const names = 'LQKAEDIDUI VJG NRXJE'
// const num = 33
// const tickets = 'VJG NRXJE VJG LQKAEDIDUI NRXJE NRXJE R LQKAEDIDUI VJG NRXJE R R NRXJE R NRXJE R LQKAEDIDUI R R R LQKAEDIDUI NRXJE LQKAEDIDUI VJG VJG LQKAEDIDUI LQKAEDIDUI LQKAEDIDUI LQKAEDIDUI VJG LQKAEDIDUI R LQKAEDIDUI'

// const namesArr = names.split(' ')
// const ticketsArr = tickets.split(' ')
// const res = {}
// for (let key of namesArr) {
//     res[key] = 0
// }
// res['Invalid'] = 0

// ticketsArr.map((item) => {
//     if (namesArr.includes(item)) {
//         // console.log(item)
//         if (!res[item]) {
//             res[item] = 1
//         } else {
//             res[item] += 1
//         }

//     } else {
//         res['Invalid'] += 1
//     }

// })
// for (let key in res) {
//     console.log(`${key} : ${res[key]}`)
// }

// HJ102 字符统计
// const line = 'aaddccdc'
// let obj = {}
// let result = ''
// for (let i = 0; i < line.length; i++) {
//     if (!obj[line[i]]) {
//         obj[line[i]] = 1
//     } else {
//         obj[line[i]] += 1
//     }
// }

// let map = []
// for (let i in obj) {
//     map.push({
//         letter: i,
//         count: obj[i]
//     })
// }

// map.sort((a, b) => b.count - a.count)
// console.log(map)
// let haveCount = new Set()
// let haveLetter = new Set()
// for (let temp of map) {
//     if (!haveCount.has(temp.count)) {
//         // 按顺序找到相同数量的字母
//         let saveMap = map.filter(p => p.count === temp.count)
//         // 按ASCII排序
//         saveMap.sort((a, b) => {
//             return a.letter.charCodeAt() - b.letter.charCodeAt()
//         })
//         saveMap.forEach(p => {
//             result += p.letter
//         })
//         haveCount.add(temp.count)

//     }
// }
// console.log(result)


// HJ97 记负均正
// const num = 11
// const numStr = '1 2 3 4 5 6 7 8 9 0 -1 0 -3'
// const numArr = numStr.split(' ').map(Number)
// let negNum = 0
// const posArr = []
// let zeroNum = 0
// let middle = 0
// numArr.map((item) => {
//     if (item == 0) {
//         zeroNum += 1
//     } else if (item < 0) {
//         negNum += 1
//     } else {
//         posArr.push(item)
//     }
// })
// if (posArr.length === 0) {
//     middle = 0
// } else {
//     middle = posArr.reduce((prev, cur) => prev + cur, 0) / posArr.length
// }
// console.log(negNum, middle)

// HJ105 记负均正II
// const num1 = '-13'
// const num2 = '-4'
// const num3 = '-7'
// const num1 = '12'
// const num2 = '1'
// const num3 = '1'
// let numArr = [num1, num2, num3].map(Number)


// let negNum = 0
// const posArr = []
// let zeroNum = 0
// let middle = 0
// numArr.map((item) => {
//     if (item == 0) {
//         zeroNum += 1
//     } else if (item < 0) {
//         negNum += 1
//     } else {
//         posArr.push(item)
//     }
// })
// if (posArr.length === 0) {
//     middle = 0
// } else {
//     middle = posArr.reduce((prev, cur) => prev + cur, 0) / posArr.length
// }
// const middleRes = middle === 0 ? 0 : middle.toFixed(1)
// console.log(`${negNum}\n${middleRes}`)


// HJ55 挑7
// 包含七或者是7的倍数，然后去重
// const line = 70
// let arr = []
// for (let i = 1; i < Number(line) + 1; i++) {
//     if (i % 7 === 0) {
//         arr.push(i)
//     } else if (i.toString().includes('7')) {
//         arr.push(i)
//     }


// }
// console.log(arr)

// HJ57 高精度整数加法
// const inputs = [22160864869122835, 6247778839]
// const isBig = inputs.some((item) => item.toString().length >= 16)
// let res = 0
// console.log(isBig)
// if (isBig) {
//     res = inputs.map((item) => Number(item) / 100000).reduce((prev, cur) => prev + cur, 0)
// } else {
//     res = inputs.map(Number).reduce((prev, cur) => prev + cur, 0)
// }

// console.log(res)





// 快速排序
// 最重要的点就是在递归调用quickSort的时候要变化标杆

// var quickSort = function (arr) {
//     if (arr.length <= 1) {
//         return arr
//     }
//     var pivotIndex = Math.floor(arr.length / 2)
//     var pivot = arr.splice(pivotIndex, 1)[0]
//     console.log(pivotIndex, arr.splice(pivotIndex, 1), 'kkk')
//     var left = []
//     var right = []
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] < pivot) {
//             left.push(arr[i])
//         } else {
//             right.push(arr[i])
//         }
//     }
//     return quickSort(left).concat([pivot], quickSort(right))
// }
// let arr = [1, 2, 5, 7, 3, 4, 8, 10, 7, 2799]
// console.log(quickSort(arr))




// 插入排序
// 比较当前数字current和前一个数字arr[preIndex]，如果当前数字<前一个数字，当前数字要往前排，前一个数字要往后排

// function insertionSort (arr) {

//     if (arr.length <= 1) {
//         return arr
//     }
//     let current, preIndex
//     for (let i = 1; i < arr.length; i++) {
//         preIndex = i - 1
//         // console.log(preIndex)
//         current = arr[i]
//         while (preIndex >= 0 && arr[preIndex] > current) {
//             arr[preIndex + 1] = arr[preIndex]
//             preIndex--
//         }
//         arr[preIndex + 1] = current

//     }
//     return arr

// }

// function insertionSort (arr) {
//     for (let i = 1; i < arr.length; i++) {
//         for (let j = i; j > 0; j--) {
//             if (arr[j] < arr[j - 1]) {
//                 let temp = arr[j]
//                 arr[j] = arr[j - 1]
//                 arr[j - 1] = temp
//             }
//         }
//     }
//     return arr
// }

// console.log(insertionSort(arr))

// 冒泡排序
// function bubbleSort (arr) {
//     const len = arr.length
//     for (var i = 0; i < len; i++) {
//         for (var j = 0; j < len - 1 - i; j++) {
//             console.log(i, j)
//             if (arr[j] > arr[j + 1]) {
//                 const temp = arr[j + 1]
//                 arr[j + 1] = arr[j]
//                 arr[j] = temp
//             }
//         }
//     }
//     return arr
// }

// console.log(bubbleSort(arr))

// 两数之和

// leetcode15.三数之和
// 给你一个整数数组 nums ，判断是否存在三元组 [nums[i], nums[j], nums[k]] 满足 i != j、i != k 且 j != k ，同时还满足 nums[i] + nums[j] + nums[k] == 0 。请
// 你返回所有和为 0 且不重复的三元组。
// function threePlus (nums) {
//     let result = []
//     if (!nums.length || nums.length < 3) return []
//     nums.sort((a, b) => a - b) // 先排序
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] > 0) break // 排序之后如果没一项仍然大于零，就没有满足三数之和的情况了，不用比直接跳出
//         if (i > 0 && nums[i] == nums[i - 1]) continue // 去重
//         let left = i + 1 // 左边指针
//         let right = nums.length - 1 // 右边指针
//         while (right > left) {
//             const sum = nums[i] + nums[left] + nums[right]
//             if (sum == 0) {
//                 result.push([nums[i], nums[left], nums[right]])
//  这种主要是为了排除重复值
//                 while (left < right && nums[left] == nums[left + 1]) left++
//                 while (left < right && nums[right] == nums[right - 1]) right--
//                 left++
//                 right--
//             } else if (sum > 0) {
//                 right--
//             } else if (sum < 0) {
//                 left++
//             }

//         }
//     }
//     return result
// }
// const nums = [-1, 0, 1, 2, -1, -4]

// console.log(threePlus(nums))

// HJ63 DNA序列
// let line = 'ACGT'
// let n = '2'
// let result = ''

// let gcMax = 0
// let maxStr = ''
// for (let i = 0; i <= line.length - n; i++) {
//     let str = line.slice(i, n + i)
//     let sum = 0
//     str.split('').map((item) => {
//         if (item == 'C' || item == 'G') {
//             sum++
//         }
//     })
//     if (gcMax < sum) {
//         gcMax = sum
//         maxStr = str
//     }
// }
// console.log(maxStr)


// HJ65 查找两个字符串a,b中的最长公共子串

// const line = 'abcdefghijklmnop'
// const line2 = 'abcsafjklmnopqrstuvw'

// function commonStr (longStr, shortStr) {
//     if (longStr.includes(shortStr)) return shortStr
//     // 假设最长公共子串是短的字符串长度-1
//     let len = shortStr.length - 1

//     for (let i = 0; i < shortStr.length; i++) {
//         if (len == 0) break
//         if (i + len <= shortStr.length) {
//             let str = shortStr.substring(i, len + i)
//             if (longStr.includes(str) && shortStr.includes(str)) {

//                 return str
//             }
//         } else {
//             len--
//             i = -1
//         }
//     }
// }

// if (line.length > line2.length) {
//     console.log(commonStr(line, line2))
// } else {
//     console.log(commonStr(line2, line))
// }


// HJ64 MP3光标位置
// let songNum = 10
// let command = 'UUDDDDUUUU'
// const commandArr = command.split('')
// // 特殊翻页，当页面停留在第一页且光标指向第一首歌曲时候，按下up，此时会翻到最后一页，光标指向最后一首歌
// // 一般翻页，当页面不是停留在第一页，且光标不在第一首歌曲，按下up,光标会向上移动

// // 光标位置，1 -up -> songNum ->up -> songNum - 1->up -> songNum - 2 -up -> songNum - 3
// let target = 0
// const start = 0
// const end = songNum < 4 ? songNum : 4
// let targets = new Array(songNum).fill(1).map((item, i) => item + i)
// let arr = targets.slice(start, end)
// let len = targets.length

// for (let i = 0; i < command.length; i++) {

//     if (command[i] === 'U') {
//         target--
//     }
//     else if (command[i] === 'D') {
//         target++
//     }

//     if (target === -1) {
//         arr = targets.slice(-4, len)
//         target = target + len
//     } else if (target == len) {
//         target = target - len
//         arr = targets.slice(0, 4)
//     } else {
//         const item = targets[target]
//         if (command[i] == 'U' && targets.includes(item)===false) {
//             arr = targets.slice(target, target + 4)
//         } else if (command === 'D' && arr.includes(item)===false) {
//             arr = targets.slice(target - 3, target + 1)
//         }
//     }

// }

// console.log(targets[target], arr)



// HJ71 字符串通配符
// *可以匹配0个或以上个字符
// ?匹配一个字符
// let regStr = 'te?t*.*'
// let str = 'txt12.xls'
// regStr = regStr.toLowerCase()
// str = str.toLowerCase()
// var newReg = "^"
// let len = regStr.length
// for (var i = 0; i < len; i++) {
//     if (regStr[i] == "*") {
//         newReg += "[a-zA-Z0-9]*"
//     } else if (regStr[i] == "?") {
//         newReg += "[a-zA-Z0-9]{1,1}"
//     } else {
//         newReg += regStr[i]
//     }
// }
// newReg += "$"
// console.log(new RegExp(newReg).test(str))




// leetcode 1936. 新增的最少台阶数
// var addRungs = function (rungs, dist) {
//     let n = 0
//     let num = 0
//     for (let i = 0; i < rungs.length; i++) {
//         if (rungs[i] - n > dist) {
//             num += Math.ceil((rungs[i] - n) / dist) - 1
//         }
//         n = rungs[i]
//     }
//     return num



// }
// let rungs = [1, 3, 5, 10], dist = 2
// console.log(addRungs(rungs, dist))

// leetcode 56. 合并区间
var merge = function (intervals) {

    let result = []
    intervals.sort((a, b) => a[0] - b[0])
    let start = intervals[0][0]
    let end = intervals[0][1]
    console.log(intervals)
    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] > end) {
            result.push([start, end])
            start = intervals[i][0]
            end = intervals[i][1]
        } else {
            end = Math.max(end, intervals[i][1])

        }
    }
    result.push([start, end])
    return result
}
console.log(merge([[1, 4], [0, 4]]))


// function insertionSort (arr) {
//     for (let i = 1; i < arr.length; i++) {
//         for (let j = i; j > 0; j--) {
//             if (arr[j] < arr[j - 1]) {
//                 let temp = arr[j]
//                 arr[j] = arr[j - 1]
//                 arr[j - 1] = temp
//             }
//         }
//     }
//     return arr
// }

// HJ68 成绩排序
// let scores = ['fang 90', 'yang 50', 'ning 70']
// let num = 3
// let sortNum = 0

// let newScores = []

// for (let i = 0; i < scores.length; i++) {
//     const [name, score] = scores[i].split(' ')
//     // 按照成绩排序
//     for(let j = 1;j>0;j--) {
//         const [name1, score1] = scores[j-1].split(' ')
//         const [name2, score2] = scores[j].split(' ')
//         let temp = 0
//         // 正序
//         if(score2 < score1) {
//             temp = score2
//             score2 = score1
//             score1 = temp
//         }

//     }
// }
// if (sortNum == 0) {
//     newScores.sort((a, b) => b[1] - a[1])
// } else {
//     newScores.sort((a, b) => a[1] - b[1])
// }
// for (let i = 0; i < newScores.length; i++) {
//     let temp = newScores[i]



// }



// 合并两个有序数组
function merge (A, m, B, n) {
    // let newData = new Array(m + n).fill(0)
    // newData = newData.map((item, i) => {
    //     if (i <= A.length - 1) {
    //         item = A[i]
    //     }
    //     return item
    // })
    // console.log(newData)
    A = A.concat(B)
    A.sort((a, b) => a - b)
    console.log(A)
    return A

}
merge(
    [1, 2, 3], 3, [2, 5, 6], 3)














































