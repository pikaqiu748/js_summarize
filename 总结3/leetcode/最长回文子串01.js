/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  const len = s.length;
  if (len < 2) {
    return s;
  }
  let maxLen = 1;
  let begin = 0;
  let dp = new Array(len).fill().map(() => Array(len));
  for (let i = 0; i < len; i++) {
    dp[i][i] = true;
  }
  // 依次尝试子串的长度
  for (let l = 2; l <= len; l++) {
    // 每一次长度尝试，从左边index=0开始
    for (i = 0; i < len; i++) {
      let j = l + i - 1;
      if (j >= len) {
        break;
      }
      if (s[i] != s[j]) {
        dp[i][j] = false;
      } else {
        if (j - i < 3) {
          dp[i][j] = true;
        } else {
          dp[i][j] = dp[i + 1][j - 1]
        }
      }  //else结束
      if (dp[i][j] && j - i + 1 > maxLen) {
        maxLen = j - i + 1;
        begin = i;
      } //if结束
    }//里面for结束  
  } //外面for结束
  return s.substring(begin, begin + maxLen)
};


console.log(longestPalindrome('babad'))