var longestCommonPrefix = function (strArr) {
  if (strArr.length === 0) {
    return "";
  }
  let ans = strArr[0];
  let len = strArr.length;
  for (let i = 0; i < len; i++) {
    let j = 0;
    for (; j < ans.length; j++) {
      if (ans[j] !== strArr[i][j]) {
        break;
      }
    }
    ans = ans.substr(0, j);
    if (ans === "") {
      return "";
    }
  }
  return ans;
}


console.log(longestCommonPrefix(["flower", "flow", "floight"]))