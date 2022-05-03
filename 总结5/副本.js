let data = {
  name: 1
}

function test () {
  return data  //返回地址的引用
}

let t1 = test()
let t2 = test()

console.log(t1, t2)
t1.name = 'dwe'
console.log(t1, t2)


function test02 () {
  // 这样则每次返回一个独立的对象
  return {
    name: 2
  }
}

let t3 = test02()
let t4 = test02()

console.log(t3, t4)

t3.name = 'lid'

console.log(t3, t4)

