Function.prototype.myCall = function () {
  // console.log(arguments)
  const args = [...arguments]
  // console.log(args)
  const obj = args.shift()
  // console.log(args)
  // console.log(obj)
  obj.fn = this
  const res = obj.fn(...args)
  delete obj.fn;
  return res;
}


function test (a, b) {
  console.log(a, b);
  return 'hello';
}


var obj = { name: 'li', age: 18 };


var res = test.myCall(obj, '1', '2');

console.log(res)


