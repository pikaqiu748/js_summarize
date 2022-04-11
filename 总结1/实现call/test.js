const a = { 0: { x: 10 }, 1: 20, 2: 30, length: 3 }
console.log(Array.prototype.slice.call(a))
console.log(...Array.from(a))

console.log([...[1, 2, 3], ...[4, 5, 6]])