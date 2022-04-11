class Observer {
  constructor(options) {
    observe(options)
  }
}

function observe (data) {
  for (let key in data) {
    // console.log(key)
    defineReactive(data, key, data[key])
  }
}

function defineReactive (data, key, value) {
  let dep = new Dep()
  // console.log(value)
  Object.defineProperty(data, key, {
    get: function () {
      // console.log(key)
      if (Dep.target) {
        // console.log('get')
        // console.log(Dep.target)
        Dep.target.depend(dep)
        // console.log(dep.subs)
      }
      if (typeof value === 'object') {
        new Observer(value)
        new Watcher(value)
      }
      return value
    },

    set: function (newValue) {
      if (value == newValue) return;
      value = newValue
      dep.notify(key)
    }
  })
}

class Dep {
  constructor() {
    this.subs = []

    this.notify = function (key) {
      for (let watcher of this.subs) {
        watcher.update(key)
      }
    }

    this.addSubs = function (watcher) {
      this.subs.push(watcher)
    }

  }
}

Dep.target = null


class Watcher {
  constructor(data) {

    this.depend = function (dep) {
      dep.addSubs(this)
    }

    this.update = function (params) {
      console.log(params + '  updated')
    }

    Dep.target = this

    for (let key in data) {
      data[key]
    }

    Dep.target = null

  }
}


// // 数组原型劫持
// const arrayProto = Array.prototype
// // console.log(arrayProto['push'])
// const arrayMethods = Object.create(arrayProto)
// // console.log(arrayMethods)

// ['push', 'pop', 'shift', 'unshift', 'splice'].forEach(function (item) {
//   const original = arrayProto[item]
//   defineReactive(arrayMethods, item, {
//     value: function () {
//       let i = arguments.length
//       const args = new Array(i)
//       while (i--) {
//         args[i] = arguments[i]
//       }
//       const result = original.call(this, args)
//       return result
//     }
//   })
// })

var obj = { name: 'li', age: 18, stu: [1, 2, 3] }

new Observer(obj)
new Watcher(obj)

obj.name = 'haha'
obj.age = 19
obj.stu[0] = 10


