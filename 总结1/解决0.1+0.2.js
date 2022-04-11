// 设置一个误差范围值Number.EPSILON，而这个值正等于2^-52。
// 这个值非常非常小，在底层计算机已经帮我们运算好，并且无限接近0，
// 但不等于0,这个时候我们只要判断(0.1+0.2)-0.3小于Number.EPSILON

function equal (a, b) {
  return Math.abs(a - b) < Number.EPSILON ? true : false;
}

console.log(equal((0.1 + 0.2), 0.3))