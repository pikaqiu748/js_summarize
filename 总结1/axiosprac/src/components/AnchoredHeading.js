export default {
  props: {
    level: Number
  },
  render (h) {
    return h('h' + this.level, this.$slots.default)
  },
}