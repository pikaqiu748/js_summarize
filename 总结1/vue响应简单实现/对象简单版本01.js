var data = {
  a: 1,
};


const dep = [];
let target = null;

Object.defineProperty(data, 'a', {
  set: function () {
    console.log('设置了a属性')
    dep.forEach(fn => fn())
  },
  get: function () {
    console.log("读取a属性")
    dep.push(target)
  }
})

function $watch (exp, fn) {
  target = fn;
  //读取字段值，触发 get 函数
  data[exp]
}

$watch('a', () => {
  console.log("第一个依赖")
})

$watch('a', () => {
  console.log("第二个依赖")
})

data.a='dqw'