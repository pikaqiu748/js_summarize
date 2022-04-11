function _new (constructor, ...args) {
  if (typeof constructor !== 'function') {
    throw new Error('构造器必须是个函数!')
  }
  let obj = {}
  obj.__proto__ = constructor.prototype
  let result = constructor.apply(obj, args)
  return typeof result === 'object' || typeof result === 'function' ? result : obj instanceof constructor ? obj : {};
}

// 构造器
function test (name) {
  this.name = name
}

console.log(_new(test, 'li') instanceof test)



