
var fn1 = function () {
  console.log('welcome to baidu');
}

var fn1, fn2, fn3;

function fn2 () {     //属于变量声明，变量声明不会覆盖变量表达式，但是赋值会覆盖
  console.log('welcome to baidu-2');
}

var fn3 = 'welcome to baidu-3';

console.log(fn1, fn2, fn3);
