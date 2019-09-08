<template>
  <div class="main-tabbar">
    <tabbar-item
      v-for="item of iconfonts"
      :key="item.id"
      :path="item.to"
      class="tabbar-item"
    >
      <template v-slot:activeIconfont>
        <i
          v-html="item.active_content"
          class="element-icons"
        ></i>
      </template>
      <template v-slot:inactiveIconfont>
        <i
          v-html="item.inactive_content"
          class="element-icons"
        ></i>
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
      iconfonts: [{
        id: 1,
        inactive_content: '&#xe6b8',
        active_content: '&#xe6bd',
        text: '发现',
        to: '/alllist',
        isActive: true
      }, {
        id: 2,
        inactive_content: '&#xe603',
        active_content: '&#xe8ec',
        text: '订阅',
        to: '/subscribe',
        isActive: true
      }, {
        id: 3,
        inactive_content: '&#xe663',
        active_content: '&#xe653',
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
  box-shadow: 0 -10 2px rgba(100, 100, 100, 0.2);
  text-align: center;
}
</style>
