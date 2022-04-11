const promiseA = Promise.resolve('a')

promiseA.then((res) => {
  console.log(res)
}).then((res) => {
  console.log(res)
})

const promiseB = Promise.resolve('b')

promiseB.then((res) => {
  console.log(res)
})

promiseB.then((res) => {
  console.log(res)
})