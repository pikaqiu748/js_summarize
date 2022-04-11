Function.prototype.myBind = function () {
  const args = [...arguments];
  const obj = args.shift();
  // const self = this;
  return () => {
    console.log(this)
    // console.log(args)
    this.call(obj, ...args)
  }
}


var obj = { name: 'li' };


function test (age) {
  this.age = age;
}

test.myBind(obj, 18)()

console.log(obj)