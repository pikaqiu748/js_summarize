var kmp = function (s) {
  const next = [];
  next[0] = 0;
  let commonLen = 0;
  const len = s.length;
  for (let i = 0; i < len; i++) {
    if (commonLen > 0 && s[i] != s[commonLen]) {
      commonLen = next[commonLen - 1];
    }
    if (s[i] === s[commonLen]) {
      commonLen++;
    }
    next[i] = commonLen;
  }
  console.log(next)
}


kmp('aaaaa')
