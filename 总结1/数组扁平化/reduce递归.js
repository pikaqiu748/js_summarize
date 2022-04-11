let arr = [1, [2, [3, [4, [5, [6, [7, [[[[[[8, ['ha']]]]]]]]]]]]]];

function flatten (arr) {
  return arr.reduce((prev, curr) => {
    return prev.concat(Array.isArray(curr) ? flatten(curr) : curr)
  }, [])
}

// console.log(flatten(arr))

var a = []

// console.log(a.concat([1,1,2],[1,2,3]))