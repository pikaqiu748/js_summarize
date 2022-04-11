// 只考虑对象类型。
function shallowCopy (obj) {
  if (typeof obj !== 'object') return

  let newObj = obj instanceof Array ? [] : {}
  for (let key in obj) {
    // 该方法会忽略掉那些从原型链上继承到的属性。
    if (obj.hasOwnProperty(key)) {
      newObj[key] = obj[key]
    }
  }
  return newObj
}
