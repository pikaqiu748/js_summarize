var test = function (n) {
  if (n <= 1) {
    return 1;
  }
  const res = [];
  res[0] = 1;
  res[1] = 1;
  for (let i = 2; i < n; i++) {
    res[i] = res[i - 1] + res[i - 2]
  }
  return res;
}

console.log(test(2))