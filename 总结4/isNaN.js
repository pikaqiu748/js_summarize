// isNaN()函数正好会进行数据的类型转换，它在处理的时候会去判断传入的变量值能否转换为数字，如果能转换成数字则会返回“false”，如果无法转换则会返回“true”。
console.log(isNaN(123))  //false  
console.log(isNaN('231'))  //转换为数字为231 false
console.log(isNaN('a'))   //true
console.log(isNaN(undefined)) //true
console.log(isNaN('NaN'))//true
console.log(isNaN(NaN)) //true

console.log(!!'abc')


// 与上面的函数不同
console.log(Number.isNaN('ea'))   //false,Number.isNaN()  es6专门判断是否为NaN



console.log([NaN].indexOf(NaN)) //indexOf找不到NaN

console.log([NaN].includes(NaN))  //includes可以找到NaN