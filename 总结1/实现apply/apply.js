Function.prototype.myApply = function () {
  const args = [...arguments]
  console.log(args)
  const firstArg = args.shift()
  firstArg.fn = this
  const res = firstArg.fn(...args[0])
  delete firstArg.fn
  return res
}
 
function test (a, b, c) {
  console.log(a, b, c)
  console.log(this.name)
}

const obj = { name: 'tom' }
test.myApply(obj, [1, 2, 3])
console.log(obj)