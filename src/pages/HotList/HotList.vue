<template>
  <div>
    <list-header>
      <template v-slot:content>{{headername}}</template>
    </list-header>
    <list-title></list-title>
    <list-body></list-body>
  </div>
</template>

<script>
import ListHeader from '../../components/PageHeader/PageHeader'
import ListTitle from './componemts/HotListTitle'
import ListBody from './componemts/HotListBody'
export default {
  name: 'HotList',
  components: {
    ListTitle,
    ListBody,
    ListHeader
  },
  data () {
    return {
      headername: this.$store.getters.getlist.title
    }
  }
}
</script>

<style scoped>
</style>
