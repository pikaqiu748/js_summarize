// // 第一种方式
let arr = [1, [2], [3, [4, [5]]]]
// function flat (arr) {
//   return arr.toString().split(',').map(val => +val) // +是为了将字符串转为数字
// }
// console.log(flat(arr))
// console.log(arr.toString().split(',').map(val=>+val))

// 第二种方式
function flatten (arr) {
  return arr.reduce((flat, toFlat) => {
    return flat.concat(Array.isArray(toFlat) ? flatten(toFlat) : toFlat)
  }, [])
}

console.log(flatten(arr))
