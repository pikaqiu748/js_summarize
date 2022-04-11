var maxLength = function (s) {
  const charSet = new Set();
  let len = s.length;
  let rk = -1, ans = 0;
  for (let i = 0; i < len; i++) {
    if (i != 0) {
      charSet.delete(s.charAt(i - 1));
    }
    while (rk + 1 < len && !charSet.has(s.charAt(rk + 1))) {
      charSet.add(s.charAt(rk + 1))
      rk++;
    }
    ans = Math.max(ans, rk - i + 1);
  }
  return ans;
}

console.log(maxLength('asdasd'))