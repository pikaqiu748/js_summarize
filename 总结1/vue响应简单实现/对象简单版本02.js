const data = {
  a: 1,
  b: 2,
}


let Target = null;

for (const key in data) {
  const dep = [];
  let val = data[key];
  Object.defineProperty(data, key, {
    set (newVal) {
      if (newVal === val) return;
      val = newVal;
      dep.forEach(fn => fn())
    },
    get () {
      dep.push(Target);
      return val;
    }
  })
}

console.log(data.a)
console.log(data.b)