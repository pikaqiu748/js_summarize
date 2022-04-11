let arr = [1, 1, 2, 3, 4, 4, 5, 5]

// 第一种
console.log([...new Set(arr)])


// 第二种
var test01 = function (arr) {
  return arr.reduce((prev, curr) => {
    prev.indexOf(curr) === -1 && prev.push(curr)
    return prev;
  }, [])
}


console.log(test01(arr))

// 第三种
