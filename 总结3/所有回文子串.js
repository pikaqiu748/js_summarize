var countSubstrings = function (s) {
  const n = s.length;
  const strs = [];
  let ans = 0;
  for (let i = 0; i < 2 * n - 1; ++i) {
    let l = i / 2, r = i / 2 + i % 2;
    while (l >= 0 && r < n && s.charAt(l) == s.charAt(r)) {
      strs.push(s.substring(l, r + 1))
      --l;
      ++r;
      ++ans;
    }
  }
  console.log(strs)
  return ans;
};


console.log(countSubstrings('abcba'))