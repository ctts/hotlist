<template>
  <div>
    <list-header></list-header>
    <list-body :webname="webname"></list-body>
  </div>
</template>

<script>
import ListHeader from './componemts/ListHeader'
import ListBody from './componemts/ListBody'
export default {
  name: 'HotList',
  components: {
    ListHeader,
    ListBody
  },
  data () {
    return {
      webname: null
    }
  },
  created: function () {
    // 通过路由获取传递来的数据，并传递给子组件
    this.webname = this.$route.params.name
  }
}
</script>

<style scoped>
</style>
