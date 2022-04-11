let arr1 = [1, 2, 3, 4]
let arr2 = [...arr1]
console.log(arr2)
console.log([...arr1, 1, 2, 3])


function test (a, ...args) {
  console.log(args)
}
test(1, 2, 3, 4, 5, 6)




let obj1 = { a: 1, b: 2, c: 3 }
let obj2 = { ...obj1 }
console.log(obj2)

let len = 5
let dp = new Array(len).fill().map(() => Array(len))
console.log(dp)
dp[0][0] = 1;
console.log(dp)


console.log(Array.from(Array(len), () => new Array(len)))

let str = 'qqqq'
console.log(str[0])
console.log(str[1])

let test01 = Array(5).fill({})
test01[0].a = 1
console.log(test01)




