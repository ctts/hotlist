<template>
  <div>
    <list-header></list-header>
    <list-body></list-body>
    <list-footer></list-footer>
  </div>
</template>

<script>
import ListHeader from './components/Header'
import ListBody from './components/ListBody'
import ListFooter from './components/Footer'
export default {
  name: 'AllList',
  components: {
    ListHeader,
    ListBody,
    ListFooter
  }
}
</script>

<style>
</style>
