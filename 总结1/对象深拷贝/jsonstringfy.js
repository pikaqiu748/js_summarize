// -----------------------------stringfy-------------------------------
// 测试数据
var test = { name: "test" };
var data1 = {
  a: "123",
  b: 123,
  c: true,
  d: [43, 2],
  e: undefined,
  f: null,
  g: function () { console.log("g"); },
  h: new Set([3, 2, null]),
  i: Symbol("fsd"),
  j: test,
  k: new Map([["name", "张三"], ["title", "Author"]])
};


// 它在处理这种嵌套的对象或者是属性值是对另一个对象的引用时，都能很好的进行字符串化，不会出现丢失数据，所以这是这种方式的一个优点。
// 缺点：其中undefined、function、symbol这三种类型的值就是非安全的（包括该对象的属性循环赋值该对象），所以格式化后，就被过滤掉了，而set、map这种数据格式的对象，也并没有被正确处理，而是处理成了一个空对象。
// var obj1 = JSON.stringify(data1)
// console.log(JSON.parse(obj1))

// ----------------------------------assign--------------------------
var data2 = {
  a: "123",
  b: 123,
  c: true,
  d: [43, 2],
  e: undefined,
  f: null,
  g: function () { console.log("g"); },
  h: new Set([3, 2, null]),
  i: Symbol("fsd"),
  k: new Map([["name", "张三"], ["title", "Author"]])
};

// -------------------缺点只能复制一层----------------
var newData = Object.assign({}, data2)
console.log(newData)




let a = {
  name: 19,
  test: {
    age: 20,
  }
}

let b = Object.assign({}, a)

console.log(b)     //20
a.test.age = 11111
console.log(b)  //11111
b.test.age = 123
console.log(a)
