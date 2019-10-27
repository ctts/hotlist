<template>
  <div>
    <list-header>
      <template #left>
        <i class="el-icon-back"></i>
      </template>
      <template #content>{{headername}}</template>
    </list-header>
    <div
      class="wapper"
      ref="listContant"
    >
      <div>
        <list-title></list-title>
        <list-body></list-body>
      </div>
    </div>
  </div>
</template>

<script>
import ListHeader from '@/components/PageHeader/PageHeader'
import ListTitle from './componemts/HotListTitle'
import ListBody from './componemts/HotListBody'
import Bscroll from 'better-scroll'
export default {
  name: 'HotList',
  components: {
    ListTitle,
    ListBody,
    ListHeader
  },
  data () {
    return {
      headername: this.$store.getters.getlist.weblocalname,
      options: {
        scrollY: true,
        scrollX: false,
        mouseWheel: true,
        click: true,
        taps: true
      }
    }
  },
  mounted: function () {
    // options是better-scroll配置参数
    this.$nextTick(() => {
      this.scroll = new Bscroll(this.$refs.listContant, this.options)
    })
  }
}
</script>

<style scoped>
.wapper {
  position: absolute;
  left: 0;
  right: 0;
  top: 49px;
  bottom: 49px;
  background: #ffffff;
}
</style>
