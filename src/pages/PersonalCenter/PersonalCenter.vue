<template>
  <div>
    <list-header></list-header>
    <self></self>
    <history></history>
  </div>
</template>

<script>
import ListHeader from './components/PersonHeader'
import Self from './components/Self'
import History from './components/History'
export default {
  name: 'EachList',
  components: {
    ListHeader,
    Self,
    History
  }
}
</script>

<style scoped>
</style>
