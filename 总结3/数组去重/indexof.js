function unique (arr) {
  let newArr = [];
  for (let num of arr) {
    if (!newArr.includes(num)) newArr.push(num)
  }
  return newArr;
}

console.log(unique([1, 1, 2, 2, 3, 4, 5, 6, 6]))