var removeDuplicates = function(nums) {
  const n = nums.length;
  if (n === 0) {
      return 0;
  }
  let fast = 1, slow = 1;
  while (fast < n) {
      if (nums[fast] !== nums[fast - 1]) {
          nums[slow] = nums[fast];
          ++slow;
      }
      ++fast;
  }
  return slow;
};

// 返回去重后的长度
var a = [1, 1, 2]
console.log(removeDuplicates(a))

