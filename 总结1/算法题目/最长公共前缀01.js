var longestCommonPrefix = function (arrStr) {
  if (arrStr.length === 0) return "";
  let ans = arrStr[0], len = ans.length;
  for (let i = 1; i < arrStr.length; i++) {
    let j = 0;
    for (; j < len && j < arrStr[i].length; j++) {
      if (ans[j] !== arrStr[i][j]) {
        break;
      }
    }
    ans = ans.substr(0, j);
    if (ans === '') return ans;
  }
  return ans;
}

console.log(longestCommonPrefix(["flower", "flow", "flight"]))