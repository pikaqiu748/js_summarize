function test01 () {
  console.log(this)
}
test01()

const obj = {
  name: 'l',
  fn: test01
}

console.log('------------------')

obj.fn()


import {initMixin,test} from './test02.mjs'
test()
initMixin()
test()
