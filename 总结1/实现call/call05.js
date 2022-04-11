Function.prototype.myCall = function () {
  const args = [...arguments];
  const obj = args.shift();
  obj.fn = this;
  const res = obj.fn(...args)
  delete obj.fn;
  return res;
}


function test (age) {
  this.age = age;
}

var obj = { name: 'li' };

test.myCall(obj, 18)
console.log(obj)