function test01 () {
  {
    let a = 1
  }
  console.log(a)  //undefined
}


// test01()

function test02 () {
  var a = 1
  var a = 1  //var可以重复声明
  // let a = 1 //报错
  // const a = 1 //报错
}




a = 1
global.b = 2
var c = 3  //这种方式在node环境中没有挂载到全局对象里面，但是在web端挂载到window上了
// console.log(global)


{
  var d = 1 //var不感知块级作用域
}

{
  let e = 2
}

console.log(d)  //1

console.log(e) //undefined

function test02 () {
  var f = 100
}