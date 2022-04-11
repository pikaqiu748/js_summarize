
<script>
export default {
  name: "Render",
  props: {
    tag: String
  },
  data () {
    return {
      people: ['hello', 'world', 'vue']
    }
  },
  render (h) {
    return h(this.tag, {}, this.people.map(item => h('li', {
      attrs: { class: 'test' }, on: {
        click: () => {
          console.log('li click')
        }
      }
    },
      `${item}`)))
  },
}
</script>

<style scoped>
.test {
  color: pink;
}
</style>