Function.prototype.myBind = function () {
  const args = [...arguments];
  const obj = args.shift();
  const self = this;
  return function () {
    return self.apply(obj, args);
  }
}

function test (name) {
  this.name = name;
  return this;
}

var obj = { age: 18 };
console.log(test.myBind(obj, 'li')())