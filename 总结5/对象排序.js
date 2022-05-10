// 根据里面每个对象的id进行排序
let a = [{ id: 3 }, { id: 1 }, { id: 5 }, { id: 4 }, { id: 0 }]
a.sort((a, b) => a.id - b.id)
console.log(a)