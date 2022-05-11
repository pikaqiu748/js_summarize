String.prototype.myIndexOf = function (data) {
  let str = this;
  let flag;
  for (let i = 0; i < str.length; i++) {
    if (data.charAt(0) === str.charAt(i)) {
      flag = i;
      let t = 1, j = i + 1;
      while (t < data.length) {
        if (data.charAt(t) !== str.charAt(j)) {
          flag = null;
          break;
        } else {
          flag = i;
        }
        t++;
        j++;
      }
      if (flag) return flag;
    }
  }
  return -1;
}

console.log('asdasde'.myIndexOf('da'))

console.log('asdasde'.charAt(6))