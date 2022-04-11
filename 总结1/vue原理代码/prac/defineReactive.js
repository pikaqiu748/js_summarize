// 对象劫持
function defineReactive (data, key, val) {
  observe(val); // 对象有可能有多级，递归劫持

  // Object.defineProperty()的作用就是直接在一个对象上定义一个新属性，或者修改一个已经存在的属性
  Object.defineProperty(data, key, {
    enumerable: true,
    configurable: false,
    get: function () {
      return val;
    },
    set: function (newVal) {
      val = newVal;
      console.log('属性' + key + '已经被监听了，现在值为：“' + newVal.toString() + '”');
    }
  });
}

// 对象劫持
function observe (data) {
  // console.log(data)
  if (!data || typeof data !== 'object') {
    return;
  }
  Object.keys(data).forEach(function (key) {
    defineReactive(data, key, data[key]);
  });
};

var library = {
  book1: {
    name: '',
    author: ''
  },
  book2: ''
};
observe(library);

// library.book1.name = 'vue权威指南'; // 属性name已经被监听了，现在值为：“vue权威指南”
// library.book2 = '没有此书籍';  // 属性book2已经被监听了，现在值为：“没有此书籍”
// library.book1.author = 'haha'


function defineReactive01 (object, key, data) {

  observe01(object[key])

  if (arguments.length == 2) {
    data = object.key
  }

  Object.defineProperty(object, key, {
    configurable: true,
    enumerable: true,
    get: function () {
      console.log('got it')
      return data
    },
    set: function (newVal) {
      console.log('set it')
      data = newVal
    }
  })

}

let test1 = { name: 'tom', age: 18 }
// defineReactive01(test1, 'name', 'tom')

// console.log(test1.name)    //
// test1.name = 'haha'
// console.log(test1['name'])
// Object.keys(test1).forEach((key) => {
//   defineReactive01(test1, key, test1[key])
// })

// test1.name = 'xixi'

function observe01 (test) {
  if (!test || typeof test !== 'object') {
    return;
  }
  Object.keys(test).forEach((key) => {
    defineReactive01(test, key, test[key])
  })
}

observe01(test1)

test1.name = 'xiix'