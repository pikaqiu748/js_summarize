const pairs = new Map([
  [')', '('],
  [']', '['],
  ['}', '{']
]);


console.log(pairs)

console.log(pairs.has(')'))

const str = 'dqwdf'

for (let item of str) {
  console.log(item)
}

let arr=[1,2,3,4];
arr[10]=100
console.log(arr)