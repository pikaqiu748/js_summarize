let vue = null

export function initMixin () {
  // Vue.prototype._init = function (options) {
  //   console.log('prototype function')
  vue = { name: 'li', age: 18 }
  console.log(vue)
}

export function test () {
  console.log(vue)
}

