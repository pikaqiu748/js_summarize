Function.prototype.myCall = function () {
  const args = [...arguments]
  const obj = args.shift();
  obj.fn = this;
  let res = obj.fn(...args)
  delete obj.fn;
  return res;
}


function test (age) {
  this.age = age;
}

let obj = { name: 'li' }

test.myCall(obj, 20)

console.log(obj)

