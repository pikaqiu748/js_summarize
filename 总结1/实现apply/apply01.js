Function.prototype.myApply = function () {
  const args = [...arguments];
  const obj = args.shift();
  obj.fn = this;
  const res = obj.fn(...args[0]);
  delete obj.fn;
  return res;
}


function test (name) {
  this.name = name;
  return this;
}

var obj = { age: 18 };
console.log(test.myApply(obj, ['name']))