<template>
  <div>
    <list-header></list-header>
    <list-body></list-body>
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
  }
}
</script>

<style scoped>
</style>
