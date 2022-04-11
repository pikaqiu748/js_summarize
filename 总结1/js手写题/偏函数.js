// 所谓偏函数，就是固定一个函数的一个或者多个参数，返回一个新的函数，这个函数用于接受剩余的参数。
function partial (fn, fixedParams) {
  return function (leftParms) {
    return fn(fixedParams, leftParms)
  }
}

// 假如test函数每次传入的第一个参数都一样，那么可以使用偏函数封装一下
function test (a, b) {
  return a + b
}

let haha = partial(test, 1)

console.log(haha(10))
console.log(haha(11))
console.log(haha(12))

