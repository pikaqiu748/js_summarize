const arrayProto = Array.prototype

const arrayMethods = Object.create(arrayProto)

Object.defineProperty(arrayMethods, 'push', {
  value (...args) {
    console.log('push')
    return arrayProto.push.apply(this, args)
  },
  enumerable: true,
  writable: true,
  configurable: true
})



var test = [1, 2, 3]
test.__proto__ = arrayMethods

console.log(test.push(1))