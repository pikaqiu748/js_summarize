var lengthOfLongestSubstring = function (s) {
  const charSet = new Set();
  const len = s.length;
  let maxLength = 0, right = -1;

  for (let i = 0; i < len; i++) {
    if (i != 0) {
      charSet.delete(s.charAt(i - 1));
    }
    while (right + 1 < len && !charSet.has(s.charAt(right + 1))) {
      charSet.add(s.charAt(++right));
    }
    maxLength = Math.max(maxLength, right - i + 1);
  }
  return maxLength;
}


console.log(lengthOfLongestSubstring('aaaaaaaaaaa'))
console.log(lengthOfLongestSubstring('abcnfgaaaa'))