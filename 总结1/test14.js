var str = 'asdafafascsc';

var mostStr = function (s) {

  let temp = [...s].reduce((prev, curr) => {
    prev[curr] ? prev[curr] = prev[curr] + 1 : prev[curr] = 1
    return prev;
  }, {})

  let max = 0;
  for (let key in temp) {
    if (temp[key] > max) {
      max = temp[key]
    }
  }
  return max;
}

console.log(mostStr('erwgrgrggr'))



