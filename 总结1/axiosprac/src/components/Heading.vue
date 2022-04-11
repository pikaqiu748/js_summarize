<script>
import Test from '@/components/Test'
export default {
  name: "Heading",
  render (createElement) {
    return createElement(Test, {
      props: {
        msg: 'hello,Heading'
      }
    })
  }
}
</script>

<style scoped>
</style>