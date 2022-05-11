console.log(Array.from(new Set([1, 2, 2, 3, 44, 44, 4, 4, 5])))   //还保证了元素的顺序

console.log([...new Set([1, 2, 2, 3, 44, 44, 4, 4, 5])])

console.log({ ...{ a: 1, b: 2 } })