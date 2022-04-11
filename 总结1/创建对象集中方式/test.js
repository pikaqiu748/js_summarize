// new 
var obj1 = new Object()
obj1.name = 'li'
obj1.age = 18
console.log(obj1)

// 字面量
var obj2 = {
  name: 'li',
  age: 18,
}
console.log(obj2)

// 工厂模式
function createPerson (name, age, family) {
  var o = new Object();
  o.name = name;
  o.age = age;
  o.family = family;
  o.say = function () {
    console.log(this.name);
  }
  return o;
}

var obj3 = createPerson('li', 18, ['wang', 25])
console.log(obj3.say())


// 构造函数形式
function Person (name, age, family) {
  this.name = name;
  this.age = age;
  this.family = family;
  this.say = function () {
    console.log(this.name);
  }
}

var obj4 = new Person('li', 18, ['a', 'b'])
obj4.say()

// 原型模式
function Person () {
}

Person.prototype.name = "lisi";
Person.prototype.age = 21;
Person.prototype.family = ["lida", "lier", "wangwu"];
Person.prototype.say = function () {
  console.log(this.name);
};
console.log(Person.prototype);   //Object{name: 'lisi', age: 21, family: Array[3]}

var person1 = new Person();        //创建一个实例person1
console.log(person1.name);        //lisi

var person2 = new Person();        //创建实例person2
person2.name = "wangwu";
person2.family = ["lida", "lier", "lisi"];
console.log(person2);            //Person {name: "wangwu", family: Array[3]}
// console.log(person2.prototype.name);         //报错
console.log(person2.age);              //21


// new 构造函数    工厂模式   原型 字面量  