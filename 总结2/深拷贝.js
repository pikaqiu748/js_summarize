var deepClone = function (obj) {
  if (typeof obj !== "object") return {};
  const newObj = Array.isArray(obj) ? [] : {};
  for (let key in obj) {
    newObj[key] = typeof obj[key] === "object" ? deepClone(obj[key]) : obj[key];
  }
  return newObj;
}

// let a = { c: 1, d: { e: 2 } }
// let b = deepClone(a)

// console.log(b)
// console.log(a)

// b.d.e = 100

// console.log(b)
// console.log(a)
// 以上是普通对象适用

let arr1 = [1, 2, 3,{ a: 1, b: 2 }];
let arr2 = deepClone(arr1);

console.log(arr2)
arr2[3].a=100
console.log(arr1)
console.log(arr2)