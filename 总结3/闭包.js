function closure () {
  let a = 1;
  return function () {
    return a++;
  }
}

var add = closure();
console.log(add())
console.log(add())
console.log(add())
console.log(add())