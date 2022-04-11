function* gen (x) {
  console.log('start')
  const y = yield x * 2
  return y
}

const g = gen(1)
// g.next()   // start { value: 2, done: false }
// g.next(4)  // { value: 4, done: true }

console.log(g.next())
console.log(g.next(4))  //舍去上次yield返回的值