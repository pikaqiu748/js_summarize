function test (n) {
  if (n > 1) {
    return n * test(n - 1);
  } else {
    return n;
  }
}

console.log(test(10))
