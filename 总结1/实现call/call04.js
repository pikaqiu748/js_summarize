Function.prototype.myCall = function () {
  const args = [...arguments];
  const obj = args.shift()
  obj.fn = this;
  // console.log(args)
  var res = obj.fn(...args);
  delete obj.fn;
  return res;
}


function test (name) {
  this.name = name;
  return this;
}

var obj = { age: 18 };
console.log(test.myCall(obj, 'li'))