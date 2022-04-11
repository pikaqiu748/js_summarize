function SuperType (name) {
  this.name = name;
  this.colors = ["red", "yellow", "bule"];
}
SuperType.prototype.sayName = function () {
  console.log(this.name)
}
function SubType (name, age) {
  SuperType.call(this, name);
  this.age = age;
}

SubType.prototype = new SuperType();
SubType.prototype.constructor = SubType;

SubType.prototype.sayAge = function () {
  console.log(this.age);
}

let instancel = new SubType("jackson", 22);
instancel.colors.push("pink");
instancel.sayName(); // "jackson"
instancel.sayAge();//22
console.log(instancel.colors);// ["red", "yellow", "bule", "pink"]

let instance2 = new SubType("bear", 20);
console.log(instance2.colors); // ["red", "yellow", "bule"]
instance2.sayName(); // "bear";
instance2.sayAge(); // 20
