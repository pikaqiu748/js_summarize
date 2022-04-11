function cat () {
}

cat.prototype = {
  food: "fish",
  say: function () {
    console.log("I love " + this.food);
  }
}

var balckCat = new cat()
// cat.prototype.say()
// balckCat.say()

const whiteDog = {
  food: 'bone'
}

// balckCat.__proto__.say.call(whiteDog)
// cat.prototype.say.call(whiteDog)
console.log(balckCat.__proto__)
console.log(cat.prototype.__proto__ === Object.prototype)
