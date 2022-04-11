// class Person {
//   constructor (name) {
//        this.name = name;
//   }
//   greet () {
//        console.log(`Hi, my name is ${this.name}`);
//   }
//   greetDelay (time) {
//        setTimeout(() => {
//             console.log(`Hi, my name is ${this.name}`);
//        }, time);
//   }
// }




function Person (name) {
  this.name = name
  Person.prototype.greet = function () {
    console.log("Hi, my name is " + this.name);
  }
  Person.prototype.greetDelay = function (time) {
    var self = this
    setTimeout(function () {
      console.log("Hi, my name is " + self.name);
    }, time);
  }
}

var p1 = new Person("li")

p1.greetDelay(1000)