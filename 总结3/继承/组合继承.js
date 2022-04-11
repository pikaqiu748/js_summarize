// 组合继承是 构造函数继承和原型链继承两种方式的结合

function Person (name) {
  this.name = name;
  this.say = function () {
    console.log(this.name)
  }
}

Person.prototype.eat = function () {       //使用构造函数继承时，子类实例无法继承父类原型属性。
  console.log('eat')
}



function Child (name, age) {
  Person.call(this, name)    //加入构造函数继承
  this.age = age
}

// 加入原型链继承
//此时 Child.prototype 中的 constructor 被重写了，会导致 c1.constructor === Person
Child.prototype = new Person();
// 将构造函数重新改过来，指向父类构造函数Child
Child.prototype.constructor = Child;


// 经过以上步骤，结合了两者的优点。

let c1 = new Child('li', 20)
let c2 = new Child('tom', 20)
c1.eat();  //继承父类原型属性
c1.say(); //利用父类构造函数





