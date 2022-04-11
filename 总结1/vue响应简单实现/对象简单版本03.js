const data = {
  a: {
    b: 1,
  }
}

const dep = [];
function walk (data) {
  for (let key in data) {
    const dep = [];
    let val = data[key];
    const nativeString = Object.prototype.toString.call(val);
    if (nativeString === "[object Object]") {
      walk(val);
    }
    Object.defineProperty(data, key, {
      set (newVal) {
        if (newVal === val) return;
        val = newVal;
        dep.forEach(fn => fn());
      },
      get () {
        console.log('get')
        dep.push(Target)
        return val;
      }
    })
  }
}


function $watch (exp, fn) {
  Target = fn;
  let pathArr, obj = data;
  if (/\./.test(exp)) {
    pathArr = exp.split('.');
    pathArr.forEach(p => {
      obj = obj[p];
    })
    return;
  }
  data[exp];
}


walk(data);

$watch("a.b", () => {
  console.log("b被修改了")
})


data.a.b = 12

console.log(data)