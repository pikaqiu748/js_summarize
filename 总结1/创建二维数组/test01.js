
const arr1 = new Array(5).fill([])  //里面的每个二维数组都是引用的同一个对象
const arr2 = new Array(5).fill().map(() => new Array(5))  //通过map返回一个个独立的二维数组
arr2[0][0] = 1
// console.log(arr2)

// 判断是否为数组

console.log(typeof arr1)  //Object,无法判断

console.log(arr1 instanceof Array)  //true
console.log(Object.prototype.toString.call(arr1) === "[object Array]")  //true
console.log(arr1.__proto__ === Array.prototype) //true
console.log(arr1.constructor === Array) //true
console.log(Array.isArray(arr1))  //true
