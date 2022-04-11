
let arr = [1, 1, 'true', 'true', true, true, 15, 15, false, false, undefined, undefined, null, null, NaN, NaN, 'NaN', 'NaN', 0, 0, 'a', 'a', {}, {}];

function distinct (arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] === arr[i]) {
        arr.splice(j, 1);
        j--;
      }
    }
  }
}

distinct(arr)
console.log(arr)   //缺点：不能过滤掉 NaN、Object