// map解决了同名碰撞问题，并且key值可以使任何类型，比如可以使dom对象
let m = new Map()
m.set({}, 1)
m.set({}, 2)
m.set({}, 3) //每一次都是开辟新的堆内存作为键
console.log(m) //Map { {} => 1, {} => 2, {} => 3 }

let o = {}
o['a'] = 1
o['a'] = 2
o['a'] = 3

console.log(o) //{ a: 3 }