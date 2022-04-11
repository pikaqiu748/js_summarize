function test (a, b, c) {
  console.log(a, b, c)
  console.log(this.name)
}


Function.prototype.myCall = function () {
  const args = [...arguments]
  const first = args.shift()
  first.fn = this
  first.fn(...args)
  delete first.fn
}

test.myCall({ name: 'li' }, 1, 2, 3)