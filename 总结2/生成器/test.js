function* test () {
  let a = yield 1;
  let b = yield a;
  let c = yield b;
}

let iterator = test();
console.log(iterator.next())
console.log(iterator.next('a'))   //覆盖掉上次yield返回的值，使用当前括号里面的参数作为返回值
console.log(iterator.next())
console.log(iterator.next())   //函数执行结束，done为true