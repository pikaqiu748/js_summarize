// 怎样顺序执行数组中的函数，即在前一个数组中的Promise resolve之后才执行下一个函数？

function generatePromiseFunc (index) {
  return function () {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(index)
      }, 1000)
    })
  }
}

const list = []

for (let i = 0; i < 5; i++) {
  list.push(generatePromiseFunc(i)())
}


// 递归
function promise_queue01 (list, index) {
  if (index >= 0 && index < list.length) {
    list[index].then((value) => {
      console.log(value)
      promise_queue01(list, index + 1)
    })
  }
}

// promise_queue01(list, 0)


// async await
async function promise_queue02 (list) {
  let index = 0;
  while (index >= 0 && index < list.length - 1) {
    console.log(await list[index])
    index += 1
  }
}

// promise_queue02(list)



// promise

// 使用Promise.resolve()
function promise_queue03 (list) {
  var sequence = Promise.resolve()
  list.forEach((item) => {
    // sequence = sequence.then(item.then(value=>console.log(value)))
  })
  console.log(sequence)
}
// 这个需要解释下，遍历数组，每次都把数组包在一个Promise.then()中，相当于list[0]().then(list[1]().then(list[2]().then(...))),
// 这样内层Promise依赖外层Promise的状态改变，从而实现逐个顺序执行的效果
promise_queue03(list)