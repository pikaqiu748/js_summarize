const obj = {
  _vm: {
    name: 'li',
    age: 18,
  }
}

function proxy (proxy, key) {
  Object.defineProperty(proxy, key, {
    configurable: true,
    enumerable: true,
    get: function () {
      return proxy._vm[key];
    },
    set: function (value) {
      proxy._vm[key] = value
    }
  })
}


Object.keys(obj._vm).forEach(key => proxy(obj, key))

console.log(obj.name)
console.log(obj.age)
console.log(obj)