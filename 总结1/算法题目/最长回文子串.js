var longestPalindrome = function (s) {
  let len = s.length;
  if (len < 2) return s;
  let maxLen = 1;
  let begin = 0;

  const dp = new Array(len).fill().map(() => new Array(n))
  for (let i = 0; i < len; i++) {
    dp[i][i] = true;
  }
  const charArray = [...s];

  // 枚举子串长度
  for (let l = 2; l <= len; l++) {
    // 左边界
    for (let i = 0; i < len; i++) {
      // 根据左边界和长度求出有边界
      let j = l + i - 1;
      if (j >= len) break;

      if (charArray[i] != charArray[j]) {
        dp[i][j] = false;
      } else {
        if (j - i < 3) {
          dp[i][j] = true;
        } else {
          dp[i][j] = dp[i + 1][j - 1];
        }
      }
      if (dp[i][j] && j - i + 1 > maxLen) {
        maxLen = j - i + 1;
        begin = i;
      }
    }
  }
  return s.substr(begin, begin + maxLen);
}