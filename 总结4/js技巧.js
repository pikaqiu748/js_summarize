console.log(+'345')
console.log(+'345.78')
// -----------------------------
function test01 () {
  console.log('test01')
}

function test02 () {
  console.log('test01')
}

function test03 () {
  console.log('test01')
}

var data = {
  1: test01,
  2: test02,
  3: test03,
}

data[1] && data[1]()
// -----------------------------
const data01 = [{
  type: 'test1',
  name: 'abc'
},
{
  type: 'test2',
  name: 'cde'
},
{
  type: 'test1',
  name: 'fgh'
},]

let res = data01.find(item => item.type === 'test1' && item.name === "fgh")

console.log(res)
// -----------------------------
console.log('haha'.repeat(3))
console.log('haha\n'.repeat(3))


// ------------------------------
function findRes (x) {
  if (['abc', 'def', 'ghi', 'jkl'].includes(x)) {
    return true;
  }
  return false;
}

console.log(findRes('abc'))