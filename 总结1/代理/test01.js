function proxy (vm, key) {
  Object.defineProperty(vm, key, {
    configurable: true,
    enumerable: true,
    get: function proxyGetter () {
      return vm._data[key]
    },
    set: function proxySetter (val) {
      vm._data[key] = val
      console.log(val)
    }
  })
}

var test = {
  _data: {
    name: 'li',
    age: 18
  }
}

Object.keys(test._data).forEach(key => proxy(test, key))
console.log(test)
console.log(test.name)
test.name='hahha'
console.log(test)