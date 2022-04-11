Function.prototype.myApply = function () {
  const args = [...arguments];
  const obj = args.shift();
  obj.fn = this;
  const res = obj.fn(...args);
  delete obj.fn;
  return obj;
}

var obj = { name: 'li' }

function test (age) {
  this.age = age;
}

test.myApply(obj, 18)
console.log(obj)