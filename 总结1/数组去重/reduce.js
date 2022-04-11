let arr = [1, 1, 2, 2, 3, 34, 5, 6, 6]
console.log(arr.reduce((prev, curr) => {
  if (prev.indexOf(curr) === -1) {
    prev.push(curr)
  }
  return prev;
}, []))

console.log(arr.reduce((prev, curr) => Math.max(prev, curr)))
console.log(arr.reduce((prev, curr) => prev + curr))

// 翻转字符串
console.log([...'addw'].reduce((a, v) => v + a))
