function show () {
  console.log('test01被调用')
}

let count = 3;

module.exports = {
  show,
  count
}

// 第二种
// module.show = show;
// module.count = count;
console.log(this)