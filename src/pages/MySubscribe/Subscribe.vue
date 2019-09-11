<template>
  <div>
    <sub-header>
      <template v-slot:content>快速订阅</template>
    </sub-header>
    <sub-body></sub-body>
  </div>
</template>

<script>
import SubHeader from '@/components/PageHeader/PageHeader'
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
