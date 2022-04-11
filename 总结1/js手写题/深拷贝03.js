var deepClone = function (target) {
  if (typeof target !== 'object') {
    return {};
  }
  let res = Array.isArray(target) ? [] : {};
  for (let key in target) {
    if (target.hasOwnProperty(key)) {
      target[key] = typeof res[key] === "object" ? deepClone(target[key]) : target[key];
    }
  }
  return res;
}

// 递归
// object.parse
// obj.assign
// lodash._deepClone
// $.extend()  jquery