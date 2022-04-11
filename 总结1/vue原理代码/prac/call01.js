var person = {
  fullName: function () {
    return this.firstName + " " + this.lastName;
  }
}

var person1 = {
  firstName: "Bill",
  lastName: "Gates"
}

var person2 = {
  firstName: "Steve",
  lastName: "Jobs"
}

// call函数改变this作用域
// var x = person.fullName.call(person1);
// var y = person.fullName.call(person2);
// console.log(x)
// console.log(y)

// 把一个对象的方法应用到另外一个对象,用法和apply有所区别
//  obj.doSth.apply(bar, ["hello", "world"])
// obj.doSth.call(foo, "hello", "world"); 不用放在一个数组里面
class Test {

}

// Test.target='tom'
// console.log(Test.target)

// console.log(typeof [1,2,3]==='object')

// var watchers = {}
// var _computedWatchers = {}
// // const _computedWatchers

// watchers = _computedWatchers = Object.create(null)

// console.log(watchers)

// watchers['test'] = 100
// console.log(watchers)
// console.log(_computedWatchers)

function Vue (options) {
  if (process.env.NODE_ENV !== 'production' && !(this instanceof Vue)) {
    console.log("Vue is a construactor,please use 'New' keyword")
  } else {
    console.log(options)
  }
  // return this
}

// Vue({ name: 'tom' })
const test = new Vue({ name: 'tom' })
console.log(test.__proto__)
console.log(Vue.__proto__)