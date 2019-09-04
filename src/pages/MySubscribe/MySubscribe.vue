<template>
  <div>
    <sub-header></sub-header>
    <sub-body></sub-body>
  </div>
</template>

<script>
import SubHeader from './components/SubHeader'
import SubBody from './components/SubBody'
export default {
  name: 'Subscribe',
  components: {
    SubHeader,
    SubBody
  }
}
</script>

<style scoped>
</style>
