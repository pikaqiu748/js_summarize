const bar = { a: 1, b: 2 }
const baz = { ...bar }
// console.log(baz)

// console.log({ ...bar,...{  b: 4, c: 5 }})


let obj1 = { a: 1, b: 2 };
let obj2 = { ...obj1, b: '2-edited' };
console.log(obj1); // {a: 1, b: 2}
console.log(obj2); //  {a: 1, b: "2-edited"}
obj2.b = 'haha'
console.log(obj1); // {a: 1, b: 2}
console.log(obj2);


// 上面这个例子扩展运算符拷贝的对象是基础数据类型，因此对obj2的修改并不会影响obj1，如果改成这样
obj1 = { a: 1, b: 2, c: { nickName: 'd' } };
obj2 = { ...obj1 };
obj2.c.nickName = 'd-edited';
console.log(obj1); // {a: 1, b: 2, c: {nickName: 'd-edited'}}
console.log(obj2); // {a: 1, b: 2, c: {nickName: 'd-edited'}}
console.log({ ...{ name: 'li' } })
console.log(...[1, 2, 3])

const obj3 = {
  name: 'li', age: 25, test: {
    gender: 'male'
  }
}
const obj4 = { ...obj3 }
obj4.name = 'hahha'
obj4.test.gender = 'female'
console.log(obj3)
//单向数据流：在子组件中华不能直接修改props，而是触发事件，有父组件修改数据，然后再传递给子组件
//v-model其实是v-bind:value和v-on:input的语法糖
