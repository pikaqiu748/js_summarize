// 满足三个数之和为0的所有元组，不能有重复。
var threeSum = function (nums) {
  let len = nums.length;
  if (len < 3) return [];
  const res = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < len; i++) {
    if (nums[i] > 0) return res;
    if (i > 0 && nums[i] == nums[i - 1]) continue;

    let left = i + 1, right = len - 1;
    while (left < right) {
      if (nums[left] + nums[right] > -nums[i]) right--;
      else if (nums[left] + nums[right] < -nums[i]) left++;
      else {
        res.push([nums[i], nums[left], nums[right]]);
        left++;
        right--;
        while (left < right && nums[left] == nums[left - 1]) left++;
        while (left < right && nums[right] == nums[right + 1]) right--;
      }
    }
  }
  return res;
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]))