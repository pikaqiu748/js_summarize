const path = require('path')
// console.log(path)
console.log(path.resolve(__dirname, './清除浮动'))

console.log(Math.max(1, 2, 3))
console.log(Math.max(...[1, 2, 3]))

console.log(Math.pow(3, 2))
console.log(3 ** 2)

console.log(98_234_5435)

const data = [
  {
    type: 'test1',
    name: 'abc',
  },
  {
    type: 'test2',
    name: 'cde',
  },
  {
    type: 'test1',
    name: 'fgh',
  },
]

console.log(data.filter(item => item.type === 'test1' && item.name === 'fgh'))

console.log(data.find(item => item.type === 'test2' && item.name === 'cde'))

// 判断奇偶
console.log(2&1)
console.log(3&1)
// 2的1次方
console.log(4>>1)
// 除以2的三次方
console.log(16>>3)