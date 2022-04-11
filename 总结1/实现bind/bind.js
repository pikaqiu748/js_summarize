
Function.prototype.myBind = function () {
  const args = Array.prototype.slice.call(arguments)
  const firstArg = args.shift()
  // console.log(args)
  // 保存调用myBind的函数
  const self = this
  // console.log(self)
  return function () {
    return self.apply(firstArg, args)
  }
}


function test (a, b, c) {
  console.log(a, b, c)
  console.log('this:', this)
  return 'hello,bind'
}

const res1 = test(1, 2, 3)

const boundTest = test.myBind({ name: 'li' }, 5, 6, 7)

const boundRes = boundTest()
console.log(test.__proto__)

// console.log('res1:', res1)
// console.log('boundRes:', boundRes)