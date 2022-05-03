const _toString = Object.prototype.toString

function toRawType (value) {
  console.log(_toString.call(value))
  return _toString.call(value).slice(8, -1)
}

// console.log(toRawType(null))

// ---------------------------------------------
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}
// console.log(isPlainObject([1, 2]))

// --------------------------------------------
// 缓存一个函数的执行结果，避免性能较差的函数多次执行
function cached (fn) {
  const cache = Object.create(null)
  return (function cachedFn (str) {
    const hit = cache[str]
    // console.log(cache)
    return hit || (cache[str] = fn(str))
  })
}

// let cacheFunc = cached(isPlainObject)
// console.log(cacheFunc([1, 2, 3]))
// 下面直接返回缓存的结果
// console.log(cacheFunc([1, 2, 3]))
// console.log(cacheFunc)

// ----------------------链接字符转驼峰------------------------
const camelizeRE = /-(\w)/g
const camelize = cached((str) => {
  return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : '')
})

console.log(camelize('a-b'))