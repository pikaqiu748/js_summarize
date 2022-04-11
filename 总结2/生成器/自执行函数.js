// 协程 callback版本
var timeout = (time) => {
  return (callbck) => {
    setTimeout(() => {
      console.log('time', time)
      callbck()
    }, time)
  }
}



// Generator 遍历器生成函数
function* callbackGenerator () {
  var res = yield timeout(2000) // 使得 yield 的value 是一个callback 自执行递归 使下一次的next在callback里面执行
  var res1 = yield timeout(2000)
}



// callback版本  版本自执行函数
function run (Generator) {
  var hw = Generator(); //获得迭代器
  const next = () => {
    const aa = hw.next()  //返回的aa是函数,参数接受一个函数,并在2秒后执行。
    console.log(aa)
    if (!aa.done) {
      aa.value(next)  //吧回调函数本身传入
    } else {
      return true
    }
  }
  next()
}



run(callbackGenerator)