
// 使用Object.defineProperty() 定义对象属性时，如已设置 set 或 get, 就不能设置 writable 和 value 中的任何一个了
Object.defineProperty(globalThis, 'a', {
  enumerable: true,
  writable: false,
  value: 2,
})

console.log(a)

a = 12

console.log(a)  //还是2