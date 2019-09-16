<template>
  <div>
    <sub-header>
      <template v-slot:content>快速订阅</template>
    </sub-header>
    <div
      ref="listContant"
      class="wapper"
    >
      <div>
        <sub-body></sub-body>
        <sub-body></sub-body>
        <sub-body></sub-body>
        <sub-body></sub-body>
        <sub-body></sub-body>
      </div>
    </div>
  </div>
</template>

<script>
import SubHeader from '@/components/PageHeader/PageHeader'
import SubBody from './components/SubBody'
import Bscroll from 'better-scroll'
export default {
  name: 'Subscribe',
  components: {
    SubHeader,
    SubBody
  },
  data () {
    return {
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
    this.scroll = new Bscroll(this.$refs.listContant, this.options)
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
  overflow: hidden;
  background: #fff;
}
</style>
