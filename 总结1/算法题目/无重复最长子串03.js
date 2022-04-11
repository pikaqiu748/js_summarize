var maxLength = function (s) {
  const strSet = new Set();
  let rk = -1, ans = 0, len = s.length;
  for (let i = 0; i < len; i++) {
    if (i !== 0) {
      strSet.delete(s.charAt(i))
    }
    while (rk + 1 < len && !strSet.has(s.charAt(rk + 1))) {
      strSet.add(s.charAt(rk + 1));
      rk++;
    }
    ans = Math.max(ans, rk - i + 1);
  }
  return ans;
}

console.log(maxLength('asdfasd'))