// console.log(new Array([1, 2, 3]))

let swap = (arr, i, j) => {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

let arr = Array.from(Array(10), (_, k) => k)
console.log(arr)
swap(arr, 1, 3)
console.log(arr)


// 交换数组两个元素
let a = [8, 12, 234, 23, 12];

[a[3], a[4]] = [a[4], a[3]]
console.log(a)

let b = [1, 2, 3]
let c = []
c.push(Array.from(b))
b[0] = 2
console.log(c)
console.log(b)