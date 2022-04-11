// 要拦截的数组变异方法
const mutationMethods = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
]


// arrayMethods.__proto__=Array.prototype
const arrayMethods = Object.create(Array.prototype);
const arrayProto = Array.prototype;

mutationMethods.forEach(method => {
  arrayMethods[method] = function (...args) {
    // 调用缓存的原型方法
    const res = arrayProto[method].apply(this, args)
    console.log(`执行了代理原型的${method}方法`)
    return res;
  }
})

const arr = []
arr.__proto__ = arrayMethods

arr.push(1)
console.log(arr)
