function myNew (constructor, ...args) {
  let newObj = {};
  newObj.__proto__ = constructor.prototype;
  let res = constructor.apply(newObj, args);
  if (typeof res === "object" || typeof res === "function") {
    return res;
  }
  return newObj instanceof constructor ? newObj : {};
}


function Test (name) {
  this.name = name;
}


let obj = myNew(Test, 'tom')

console.log(obj)