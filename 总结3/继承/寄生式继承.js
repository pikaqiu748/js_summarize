function objectCopy (obj) {
  function Fun () { };
  Fun.prototype = obj;
  return new Fun();
}

function createAnother (original) {
  //除了使用原型式继承对一个目标对象进行浅复制，还增强这个浅复制的能力
  // 在原型式继承，这里的clone直接是子类对象了
  let clone = objectCopy(original);
  // 增强
  clone.getName = function () {
    console.log(this.name);
  };
  return clone;
}

let person = {
  name: "yhd",
  friends: ["rose", "tom", "jack"]
}

let person1 = createAnother(person);
person1.friends.push("lily");
console.log(person1.friends);
person1.getName(); // yhd

let person2 = createAnother(person);
console.log(person2.friends); // ["rose", "tom", "jack", "lily"]
