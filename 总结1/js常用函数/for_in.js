var a = [78, 56, 87]
for (let i in a) {
  console.log(i)
}

// for in 是索引
for (let i of a) {
  console.log(i)
}

//for in 可以遍历对象，for of 不可以,如果想用可以和Object.keys()一起連用

var c = { name: 'li', age: 19 }
for (let i in c) {
  console.log(i)
}

