function deepClone (obj) {
  let objClone = Array.isArray(obj) ? [] : {};
  if (obj && typeof obj === 'object') {
    for (let ket in obj) {
      if (obj[key] && typeof obj[key] === "object") {
        objClone[key] = deepClone(obj[key])
      } else {
        objClone[key] = obj[key];
      }
    }
  }
  return objClone;
}



function deepClone02 (obj) {
  let objClone = JSON.stringify(obj);
  return JSON.parse(objClone);
}


let test = { a: 1, b: 2 }
let c = deepClone02(test)
// console.log(c)
c.a = 10
console.log(test)
console.log(c)