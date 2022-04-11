let arr = [1, 2, 3]

// console.log(Array.isArray(arr))
// console.log(arr instanceof Array)
// console.log(arr.constructor === Array)
// console.log(Object.prototype.toString.call(arr) === '[object Array]')
// console.log(arr.__proto__ === Array.prototype)
// console.log(Object.getPrototypeOf(arr) === Array.prototype)
// console.log(Array.prototype.isPrototypeOf(arr))

console.log(arr.constructor === Array)
console.log(Array.isArray(arr))
console.log(arr instanceof Array)
console.log(Object.prototype.toString.call(arr) === '[object Array]')
console.log(arr.__proto__ === Array.prototype)
console.log(Array.prototype.isPrototypeOf(arr))
console.log(Object.getPrototypeOf(arr) === Array.prototype)
