let arr = [1, [2, [3, [4, [5, [6, [7, [[[[[[8, ['ha']]]]]]]]]]]]]];

function flatten (arr) {
  let res = [];
  arr.forEach(item => {
    if (Array.isArray(item)) {
      // 是数组的话，递归调用
      res = res.concat(flatten(item));
    } else {
      // 不是数组的话push
      res.push(item);
    }
  });
  return res;
}

function flatten01 (arr) {
  let res = [];
  arr.forEach(item => {
    res = res.concat(Array.isArray(item) ? flatten01(item) : item)
  })
  return res;
}
console.log(flatten01(arr))