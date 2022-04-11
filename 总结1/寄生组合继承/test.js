function Parent () {
  this.name = 'parent';
}

function Child () {
  Parent.call(this);
  this.type = 'child';
}

Child.prototype = Object.create(Parent.prototype)
Child.prototype.constructor = Child;

console.log(new Child().__proto__ === Child.prototype)