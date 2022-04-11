function test () {
  // 打印出调用者
  console.log(test.caller)
}

function test02 (a, b) {
  // 打印出形参的个数
  console.log(arguments.callee.length)

  // 打印实际传入的参数的个数
  console.log(arguments.length)

  // 打印出此函数
  console.log(arguments.callee)
}

function a () {
  test()
}

a()

test02(1, 2, 3)


console.log(typeof test02)
console.log(typeof Function)

console.log(11/4)