var myComponent = function () {
}
myComponent.prototype.data = {
  a: 1,
  b: 2,
}

var c1 = new myComponent()
var c2 = new myComponent()
console.log(c1.data === c2.data)

c1.data.a = 100
console.log(c2.data.a)   //也会变成100

// -------------------------------------------------------------------
// 将data改为函数，并返回一个对象,每个实例化对象就是独立的 一份
myComponent.prototype.data = function () {
  return {
    a: 1,
    b: 2,
  }
}

Array.prototype.haha = 'test'
var test = [1, 2, 3, 4]

for (let i in test) {
  console.log(i)   //会遍历原型对象的属性
}


for (let i of test) {
  console.log(i)
}
