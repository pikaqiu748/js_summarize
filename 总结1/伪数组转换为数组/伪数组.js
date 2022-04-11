var fakeArray = {
  "0": "first",
  "1": "second",
  "2": "third",
  length: 3
};

console.log(Object.prototype.toString.call(fakeArray))  //[object Object]

for (let i = 0; i < fakeArray.length; i++) {
  console.log(fakeArray[i]);
}


// 改为数组
console.log(Array.prototype.slice.call(fakeArray))
console.log([].slice.call(fakeArray))
console.log(Array.from(fakeArray))
console.log(Array.prototype.concat.apply([], fakeArray))


