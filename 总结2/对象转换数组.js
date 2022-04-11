let obj = { '未完成': 5, '已完成': 8, '待确认': 4, '已取消': 6 };


var arr = []
for (let i in obj) {
  let o = {};
  o[i] = obj[i];
  arr.push(o)
}

console.log(arr);


console.log(Array.from('dwefwerf'))
console.log(Array.from([1, 2, 3, 4]))
console.log(Array.from({ '0': 10, '1': 234, length: 2 }))   //类数组才可以
