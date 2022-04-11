var longestCommonPrefix = function (strs) {
  let len = strs.length;
  if (len == 0) return '';
  let ans;
  let common = strs[0];
  for (let i = 1; i < len; i++) {
    let j = 0
    for (; j < strs[i].length; j++) {
      if (strs[i][j] === common[j]) continue;
      else {
        break;
      }
    }
    common = common.substring(0, j);
    if (common === '') return common;
  }
  return common;
}


console.log(longestCommonPrefix(['ab', 'a']))