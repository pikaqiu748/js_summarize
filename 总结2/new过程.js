function _new () {
  // 1. 创建一个对象
  let target = {}
  let [constructor, ...args] = [...arguments];     // 第一个参数是构造函数

  // 2. 原型链连接
  target.__proto__ = constructor.prototype

  // 3. 将构造函数的属性和方法添加到这个新的空对象上
  let result = constructor.apply(target, args)
  if (result && (typeof result == 'object' || typeof result == 'function')) {
    // 如果构造函数返回的结果是一个对象，就返回这个对象
    return result
  }
  // 如果构造函数返回的不是一个对象，就返回创建的新对象。
  return target
}


function Person (name) {
  this.name = name
}

let p2 = _new(Person, "小花")

console.log(p2.name)               // 小花

console.log(p2 instanceof Person) // true