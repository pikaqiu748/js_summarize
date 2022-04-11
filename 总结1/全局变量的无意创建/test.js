function foo () {
  b = 2;
  console.log(b);
}
if (1) {
  c = 3
}

foo(); // 2

console.log(b); // 2
console.log(3)  //3