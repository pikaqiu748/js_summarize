function test (a, b, c) {
  console.log(a, b, c)
  console.log(this)
}

Function.prototype.myBind = function () {
  console.log(arguments)
  const args = Array.prototype.slice.call(arguments)
  // console.log(args)
  const firstArg = args.shift()
  const self = this
  // console.log(self)
  return function () {
    self.apply(firstArg, args)
  }
}

const obj = { name: 'li' }
const fuck = test.myBind(obj, 1, 2, 3)
fuck()