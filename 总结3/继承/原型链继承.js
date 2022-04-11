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
  this.age = age
}

Child.prototype = new Person();

let c1 = new Child('li', 20);
let c2 = new Child('li', 20);

c1.eat()
c2.eat()
// c1修改原型的属性，会导致其他实例的属性都会被更改
c1.__proto__.eat = function () {
  console.log('被c1改变了')
}

c1.eat()
c2.eat()