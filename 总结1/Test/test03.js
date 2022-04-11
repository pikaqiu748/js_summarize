const adventurer = {
  name: 'Alice',
  cat: {
    name: 'Dinah'
  },
 
};

// 可选链操作符
const dogName = adventurer.dog
console.log(dogName);
// expected output: undefined

 
console.log(adventurer.someNonExistentMethod?.());
// expected output: undefined



// 空值合并操作符
let a = undefined;
let b = null;
let c = 123
console.log(a ?? 'ewq')
console.log(b ?? 'ewq')
console.log(c ?? 'ewq')
console.log(void 0 ?? 'ewq')
console.log(false ?? 'ewq')

console.log(adventurer['dog'])