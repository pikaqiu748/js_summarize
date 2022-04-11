function test (age) {
  this.age = age;
}

let obj = { name: 'li' }

Function.prototype.myBind = function () {
  const args = [...arguments];
  const obj = args.shift();
  obj.fn = this;
  let res = obj.fn(...args[0]);
  delete obj.fn;
  return res;
}

test.myBind(obj, [18])

console.log(obj)

