<template>
  <div>
    <!-- 头部 -->
    <list-header>
      <template v-slot:content>
        所有标签
      </template>
    </list-header>
    <!-- 所有榜单 -->
    <div
      ref="listContant"
      class="wapper"
    >
      <div>
        <!-- 我的榜单 -->
        <list-body>
          <div>我的榜单</div>
        </list-body>
        <!-- 热门列表 -->
        <list-body>
          <div>热门榜单</div>
        </list-body>
        <!-- 其他榜单 -->
        <list-body>
          <div>热门榜单</div>
        </list-body>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
import ListHeader from '@/components/PageHeader/PageHeader'
import ListBody from './components/AllListBody'
export default {
  name: 'AllList',
  components: {
    ListHeader,
    ListBody
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

<style>
.wapper {
  position: absolute;
  left: 0;
  right: 0;
  top: 49px;
  bottom: 49px;
  overflow: hidden;
  background: #f6f6f6;
}
</style>
