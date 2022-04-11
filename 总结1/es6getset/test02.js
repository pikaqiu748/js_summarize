let arr = [1, 2, 3, 4, 5, 6, 7]
console.log(arr.slice(1, 4))
console.log(arr)


console.log(arr.splice(1, 1, 66, 77, 88))  //开始索引，删除个数，添加的元素
console.log(arr)