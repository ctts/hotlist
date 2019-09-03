<template>
  <div>
    <list-header></list-header>
    <list-body></list-body>
  </div>
</template>

<script>
import ListHeader from './components/Header'
import ListBody from './components/ListBody'
export default {
  name: 'AllList',
  components: {
    ListHeader,
    ListBody
  }
}
</script>

<style>
</style>
