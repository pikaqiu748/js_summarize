let arr = [1, [2, [3, [4, [5, [6, [7, [[[[[[8, ['ha']]]]]]]]]]]]]];

console.log(arr.toString().split(',').map(val => +val))
console.log(arr.toString())