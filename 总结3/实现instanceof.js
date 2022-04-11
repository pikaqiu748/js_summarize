function myInstanceOf (obj, target) {
  if (typeof obj !== 'object') return false;
  let pro = obj.__proto__;
  while (true) {
    if (pro === null) return false;
    if (pro === target.prototype) return true;
    pro = pro.__proto__;
  }
}

function Test () { }
let t1 = new Test();

console.log(myInstanceOf(t1, Test))