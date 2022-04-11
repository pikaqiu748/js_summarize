var findRepeatNumber = function (nums) {
  let numSet = new Set();
  let repeat = -1;
  for (let item of nums) {
    if (!(numSet.has(item))) {
      numSet.add(item);
    } else {
      repeat = item;
      break;
    }

  }
  return repeat;
};

console.log(findRepeatNumber([3, 4, 2, 0, 0, 1]))