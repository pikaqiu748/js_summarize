Function.prototype.myCall = function () {
  const args = Array.prototype.slice.call(arguments)
  const firstArg = args.shift()
  const self = this
  firstArg.fn = self
  firstArg.fn(...args)
  delete firstArg.fn
  console.log(firstArg)
}


function test (a, b, c) {
  console.log(a, b, c)
  console.log(this)
}


// test.myCall({ name: 'li' }, 1, 2, 3)

function test01 () {
  console.log(arguments)
  console.log(...arguments)
}
test01(1, 2, 3)