/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var findDiagonalOrder = function (nums) {
  let len = nums.length
  let ans = []
  for (let i = 0; i < len; i++) {
    //     上一行
    let j = i - 1
    ans.push(nums[i][0])
    //     上一行从1开始，上一行从2开始...,以此类推
    let index = 1
    let prev_row = i - 1


    while (prev_row > -1) {
      if (nums[prev_row][index]) {
        ans.push(nums[prev_row][index])
      }
      // 上一行index递加
      index++;
      prev_row--;
    }
    //  最后一行
    if (i === len - 1) {
      let curr_index = 1
      index = 1
      while (curr_index < nums[i].length) {
        if (nums[i][curr_index]) {
          ans.push(nums[i][curr_index])
          index++
          prev_row = i - 1
          while (prev_row > -1) {
            if (nums[prev_row][index]) {
              ans.push(nums[prev_row][index])
              index++
              prev_row--
            } else {
              break
            }

          }
        }
        curr_index++
      }
    }
  }
  console.log(ans)
  return ans
};


findDiagonalOrder([[1, 2, 3, 4, 5, 6], [7, 8, 9]])