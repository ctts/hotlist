<template>
  <page-header>
    <template v-slot:left>左</template>
    <template v-slot:content>快速订阅</template>
    <template v-slot:right>右</template>
  </page-header>
</template>

<script>
import PageHeader from '@/components/PageHeader/PageHeader'
export default {
  name: 'Subscribe',
  components: {
    PageHeader
  }
}
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 10rem;
  background: #409eff;
  color: white;
}
</style>
