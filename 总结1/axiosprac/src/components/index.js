import HBbutton from './h-button.vue'
import HInput from './h-input.vue'

const components = [
  HBbutton,
  HInput
]
const HelloWorld = {

  test () {
    console.log('test..')
  }
}

function install (Vue) {
  console.log('hahah')
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

export default { HelloWorld, install };