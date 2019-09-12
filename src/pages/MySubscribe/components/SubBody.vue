<template>
  <div class="icon-list">
    <list-item
      v-for="item of sourceList"
      @click.native.capture="handleIconClick(item)"
      :key="item.id"
      :state="item.state"
    >
      <template v-slot:icon>
        <img :src="item.imgsrc">
      </template>
      <template v-slot:title>
        {{item.title}}
      </template>
      <template v-slot:activeSwitch>
        <svg
          class="icon"
          aria-hidden="true"
        >
          <use xlink:href="#el-icon39kaiguankai2"></use>
        </svg>
      </template>
      <template v-slot:inactiveSwitch>
        <svg
          class="icon"
          aria-hidden="true"
        >
          <use xlink:href='#el-icon38kaiguanguan1'></use>
        </svg>
      </template>
    </list-item>
    <div
      v-for="item of (4-sourceList.length%4)"
      :key="item+'-label'"
      class="list-item-temp"
    >
    </div>
  </div>
</template>
<script>
import ListItem from '@/components/ListItem/ListItem'
export default {
  name: 'SubBody',
  components: {
    ListItem
  },
  methods: {
    handleIconClick (item) {
      // 将icon的属性保存在store
      this.$store.commit('setlist', item)
    }
  },
  data () {
    return {
      sourceList: [{
        id: 1,
        imgsrc: '../static/images/weibo.png',
        title: '微博热搜榜',
        name: 'weibo',
        state: true
      }, {
        id: 2,
        imgsrc: '../static/images/zhihu.png',
        title: '知乎热搜榜',
        name: 'zhihu',
        state: false
      }, {
        id: 3,
        imgsrc: '../static/images/haoqixin.png',
        title: '好奇心日报',
        name: 'haoqixin',
        state: true
      }, {
        id: 4,
        imgsrc: '../static/images/github.png',
        title: 'github榜',
        name: 'github',
        state: true
      }, {
        id: 5,
        imgsrc: '../static/images/weibo.png',
        title: '微博热搜榜',
        name: 'weibo',
        state: true
      }, {
        id: 6,
        imgsrc: '../static/images/weibo.png',
        title: '微博热搜榜',
        name: 'weibo',
        state: true
      }]
    }
  }
}
</script>

<style scoped>
img {
  width: 100%;
  height: 100%;
}

.icon-list {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  padding: 0.5rem;
}

.list-item-temp {
  width: 4rem;
}
</style>
