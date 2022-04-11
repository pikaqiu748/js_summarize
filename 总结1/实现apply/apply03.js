Function.prototype.myApply = function () {
  const args = [...arguments];
  const obj = args.shift();
  console.log(obj, args)
  return () => {
    this.apply(obj, args)
  }
}

const obj = { name: 'li' }

function test (age) {
  this.age = age;
}


let fn = test.myApply(obj, 20)
fn()
console.log(obj)