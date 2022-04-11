var obj = { name: 'li', age: 18 }

Object.defineProperty(obj, 'name', {
  enumerable: true,
  configurable: true,
  writable: false,
  set: function () {
    console.log('setsetste')
  }
})

Object.defineProperty(obj, 'age', {
  enumerable: true,
  configurable: false,   //该属性是否可以被删除，false表示不可以
})

console.log(obj)
obj.name = 'li'
console.log(obj)

// delete obj.age
// console.log(obj)