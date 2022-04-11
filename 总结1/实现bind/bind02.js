function test (a, b, c) {
  console.log(a, b, c)
  console.log(this.name)
}

Function.prototype.myBind = function () {
  const args = [...arguments]
  const firstArg = args.shift()
  const self = this
  return function () {
    self.apply(firstArg, args)
  }
}

const test01 = test.myBind({ name: 'tom' }, 1, 2, 3)
test01()