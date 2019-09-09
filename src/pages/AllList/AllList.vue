<template>
  <div>
    <!-- 头部 -->
    <list-header>
      <template v-slot:left>
        <div>
          左
        </div>
      </template>
      <template v-slot:content>
        <div>
          所有标签
        </div>
      </template>
      <template v-slot:right>
        <div>
          右
        </div>
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
import ListHeader from '../../components/PageHeader/PageHeader'
import ListBody from './components/AllListBody'
export default {
  name: 'AllList',
  components: {
    ListHeader,
    ListBody
  },
  mounted: function () {
    this.scroll = new Bscroll(this.$refs.listContant)
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
