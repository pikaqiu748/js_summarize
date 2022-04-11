const array = [1, 2, 3, 4, 5]

const newArray = array.map(item => item * 2).filter(num => num > 5).reduce((countValue, firstValue) => {
  return countValue + firstValue
}, 0)
// console.log(newArray)
let names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice', 'Alice', 'Alice'];
let namesCount = names.reduce((prev, cur) => {
  if (cur in prev) {
    prev[cur]++
  } else {
    prev[cur] = 1
  }
  return prev
}, {})
// console.log(namesCount)
var result = [
  {
    subject: 'math',
    score: 10
  },
  {
    subject: 'chinese',
    score: 20
  },
  {
    subject: 'english',
    score: 30
  }
]

const sum = result.reduce((prev, curv) => {
  return prev + curv.score
}, 0)
// console.log(sum)
let arr = [[0, 1], [2, 3], [4, [5, 6, 7]]]
const newArr = function (arr) {
  return arr.reduce((prev, cur) => prev.concat(Array.isArray(cur) ? newArr(cur) : cur), [])
}
// console.log(newArr(arr))
let arr1 = [[0, 1, 2, 3, 4], [2, 3], [4, 5]]
// console.log(arr1.reduce((prev,cur)=>prev.concat(cur),[]))

let nums = [1, 2, 3]
