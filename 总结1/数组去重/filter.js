const unique4 = arr => {
  return arr.filter((item, index) => {
    // arr.index(item)只会找到第一个item出现的索引
    return arr.indexOf(item) === index;
  });
}


let arr = [1, 2, 3, 4, 3, 5, 1]

console.log(unique4(arr))