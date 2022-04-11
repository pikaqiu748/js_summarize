// 协程 promise 版本
var timeout = (time) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('time', time)
      resolve(time + 2000)
    }, time)
  })
}



// Generator 遍历起器生成函数
function* callbackGenerator () {
  var res = yield timeout(2000) // 使得 yield 的value是promise 自执行时把下一次的next在then里面执行
  console.log('res', res)
  var res1 = yield timeout(res)
}



// promise版本 版本自执行函数
function run (Generator) {
  var hw = Generator();   //获得迭代器,通过next()获得其中的value为promise对象。
  const next = (query) => {
    console.log(query)
    var aa = hw.next(query)   //注意这一步，只要生成器没有执行完成，则不会往下执行。
    console.log(aa)
    if (!aa.done) {
      aa.value.then(next)
    } else {
      return true
    }
  }
  next()
}



run(callbackGenerator)