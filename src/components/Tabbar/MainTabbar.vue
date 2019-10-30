<template>
  <div
    class="main-tabbar"
    v-if="tabbarFlag"
  >
    <tabbar-item
      v-for="item of iconfonts"
      :key="item.id"
      :path="item.to"
      class="tabbar-item"
    >
      <template v-slot:activeIconfont>
        <svg
          class="icon"
          aria-hidden="true"
        >
          <use :xlink:href="item.active_content"></use>
        </svg>
      </template>
      <template v-slot:inactiveIconfont>
        <svg
          class="icon"
          aria-hidden="true"
        >
          <use :xlink:href="item.inactive_content"></use>
        </svg>
      </template>
      <template v-slot:text>
        <div>{{item.text}}</div>
      </template>
    </tabbar-item>
  </div>
</template>

<script>
import TabbarItem from './items/TabbarItem'
export default {
  name: 'tabbar',
  components: {
    TabbarItem
  },
  data () {
    return {
      realScreenHeight: document.documentElement.clientHeight,
      screenHeight: document.documentElement.clientHeight,
      tabbarFlag: true,
      iconfonts: [{
        id: 1,
        inactive_content: '#el-iconfaxian2',
        active_content: '#el-iconfaxian1',
        text: '发现',
        to: '/alllist',
        isActive: true
      }, {
        id: 2,
        inactive_content: '#el-iconwujiaoxing_kong',
        active_content: '#el-iconstar-copy',
        text: '订阅',
        to: '/mysubscribe',
        isActive: true
      }, {
        id: 3,
        inactive_content: '#el-iconicon7',
        active_content: '#el-icongerenzhongxin1',
        text: '个人',
        to: '/person',
        isActive: true
      }]
    }
  },
  watch: {
    '$route': function (to, from) {
      for (let obj of this.iconfonts) {
        obj.isActive = (obj.to === to.fullPath)
      }
    },
    screenHeight (val) {
      this.screenHeight = val
      this.tabbarFlag = this.screenHeight >= this.realScreenHeight
    }
  },
  mounted () {
    const that = this
    window.onresize = () => {
      return (() => {
        that.screenHeight = document.documentElement.clientHeight
      })()
    }
  }
}
</script>

<style scoped>
.main-tabbar {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  box-shadow: 0 -10 2px rgba(100, 100, 100, 0.2);

  position: fixed;
  left: 0;
  bottom: 0;
  padding: 0;
  margin: 0;
}
.tabbar-item {
  flex: 1;
  height: 49px;
  background: #f6f6f6;
  text-align: center;
}
</style>
