function Vue (options) {
  const self = this;
  if (options && typeof options.data === 'function') {
    this._data = options.data.apply(this);
  }

  this.mount = function () {
    new Watcher(this, this.render)
  }

  this.render = function () {
    with (self) {
      _data.text
      _data.text2
    }
  }
  observe(this._data)
}

function observe (data) {
  console.log(data)
  return new observer(data)
}

function observer (data) {
  defineReactive(data)
}

function defineReactive (data) {
  for (let key in data) {
    let val = data[key]
    const dep = new Dep()
    Object.defineProperty(data, key, {
      get: function () {
        console.log('in get')
        if (Dep.target) {
          Dep.target.addDep(dep)
        }
        return val
      },
      set (newValue) {
        console.log('in set')
        dep.notify()
        val = newValue
      },
    })
  }
}

function Dep () {
  this.target = null
  this.subs = []
  this.addSub = function (Watcher) {
    this.subs.push(Watcher)
    console.log(this.subs)
  }
  this.depend = function () {
    if (Dep.target) {
      Dep.target.addDep(this)
    }
  }
  this.notify = function () {
    for (let i = 0; i < this.subs.length; i++) {
      this.subs[i].update()
    }
  }
}

// fn是更新时的回调函数,自己手动watcher一个数据
function Watcher (vm, fn) {
  this.vm = vm
  Dep.target = this
  this.addDep = function (dep) {
    dep.addSub(this)
  }
  this.update = function () {
    console.log('更新!!')
    fn()
  }
  this.value = fn()
  Dep.target = null
}


// var test = { name: "tom" }
// new Vue(test)
// test.name = 'li'  //in set
// console.log(test.name)  //in get 返回value

var commonData = {
  text: 'hello world',
  text2: 'test'
};


var test1 = new Vue({
  data () {
    return commonData
  }
})
var test2 = new Vue({
  data () {
    return commonData
  }
})



test1.mount()
test2.mount()

test1.text
test2.text


