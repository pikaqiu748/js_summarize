// reduce
let arr = [1, [2, [3, [4, [5, [6, [7, [[[[[[8, ['ha']]]]]]]]]]]]]];

function flatten_reduce (arr) {
  return arr.reduce((prev, curr) => {
    return prev.concat(Array.isArray(curr) ? flatten_reduce(curr) : curr)
  }, [])
}

function flatten_concat (arr) {
  let res = [];
  arr.forEach(val => {
    res = res.concat(Array.isArray(val) ? flatten_concat(val) : val)
  })
  return res;
}

function flatten_toString (arr) {
  return arr.toString().split(',').map(val => +val)
}


console.log(flatten_concat(arr))
console.log(flatten_reduce(arr))
console.log(flatten_toString(arr))
console.log(arr.flat(Infinity))
