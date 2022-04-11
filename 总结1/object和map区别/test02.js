// Map可以直接拿到长度，而Object不行。
let m1 = new Map()
m1.set(['username'], 'jack')//数组作为键
m1.set(true, 1)//boolean类型作为键

console.log(m1.size)//3

// -------------------------map的key值按照填入的方式有序排列
let m = new Map()
m.set(['username'], 'jack')//数组作为键
m.set(true, 1)//boolean类型作为键
//可以保持原有顺序打印
for (let [key, value] of m) {
  console.log(key)

}

let obj = new Object()
obj['jack'] = 1
obj[0] = 2
obj[5] = 3
obj['tom'] = 4
//填入Object的元素key是自动按照字符串排序的，数字排在前面
for (let k in obj) {
  console.log(k) // 0 5 jack tom
}


// 
let m2 = new Map()
m2.set({ a: 1 }, 'hello,world')//dom对象作为键
m2.set(['username'], 'jack')//数组作为键
m2.set(true, 1)//boolean类型作为键

console.log([...m2])//可以展开为二维数组

let obj1 = new Object()
obj1['jack'] = 1
obj1[0] = 2
obj1[5] = 3
obj1['tom'] = 4
console.log([...obj1])//TypeError: obj is not iterable