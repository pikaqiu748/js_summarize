var test='hello,world'


f1()


// 通过var定义的变量，在定义语句之前就可以直接访问到
function f1(){
  console.log(test)
  var test='f1()'
}

