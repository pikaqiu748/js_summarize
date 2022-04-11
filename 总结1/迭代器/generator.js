// 生成器是一种返回迭代器的函数，通过function关键字后的星号(*)来表示，函数中会用到新的关键字yield。星号可以紧挨着function关键字，也可以在中间添加一个空格
function* flatten2 (a) {
  var length = a.length;
  for (var i = 0; i < length; i++) {
    var item = a[i];
    if (typeof item !== 'number') {
      yield* flatten2(item);
    } else {
      yield item;
    }
  }
}


const numbers = flatten2([1, [[2], 3, 4], 5])
console.log(numbers.next().value)// => 1
console.log(numbers.next().value)// => 2
console.log(numbers.next().value)// => 3
console.log(numbers.next().value)// => 4
console.log(numbers.next().value)// => 5

console.log('---------------------------')
// 生成器
function* createIterator () {
  yield 1;
  yield 2;
  yield 3;
}
// 生成器能像正规函数那样被调用，但会返回一个迭代器
let iterator = createIterator();
console.log(iterator.next().value); // 1
console.log(iterator.next().value); // 2
console.log(iterator.next().value); // 3
