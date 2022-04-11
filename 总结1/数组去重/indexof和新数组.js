let arr = [1, 1, 'true', 'true', true, true, 15, 15, false, false, undefined, undefined, null, null, NaN, NaN, 'NaN', 'NaN', 0, 0, 'a', 'a', {}, {}];

function distinct (arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (newArr.indexOf(arr[i]) === -1) {
      newArr.push(arr[i])
    }
  }
  return newArr;
}

console.log(distinct(arr))   //缺点：不能过滤掉 NaN、Object