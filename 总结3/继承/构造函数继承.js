function Person (name) {
  this.name = name;
  this.say = function () {
    console.log(this.name)
  }
}

Person.prototype.eat = function () {
  console.log('eat')
}

function Child (name, age) {
  Person.call(this, name)
  this.age = age
}

//缺点是不能使用父类构造函数原型的属性,每个新实例都有父类构造函数的副本，臃肿。
let c1 = new Child('li', 18)
console.log(c1)
c1.say();
c1.eat()//不能继承父类原型属性


