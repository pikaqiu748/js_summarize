var maxStr = function (s) {
  let ans;
  let currLen = maxLen = 0;
  const charSet = new Set();
  const len = s.length;
  let r = -1; //指针移动
  let maxLeft, maxRight;
  for (let i = 0; i < len; i++) {
    if (i != 0) {
      charSet.delete(s.charAt(i - 1))
    }
    while (r + 1 < len && !charSet.has(s.charAt(r + 1))) {
      charSet.add(s.charAt(r + 1));
      r++;
    }
    maxLen = Math.max(maxLen, r - i + 1)
    if (maxLen > currLen) {
      maxLeft = i;
      maxRight = r;
      currLen = maxLen;
    }
  }
  console.log(maxLen, s.substring(maxLeft, maxRight + 1))
}

maxStr('abcdefaaaa')