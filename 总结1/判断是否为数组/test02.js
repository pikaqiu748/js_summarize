let arr = [1, 2, 3]
console.log(Array.isArray(arr))
console.log(arr.constructor === Array)
console.log(Object.prototype.toString.call(arr) === '[object Array]')
console.log(arr.__proto__ == Array.prototype)