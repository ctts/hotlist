<template>
  <div
    class="icon-list"
    ref="list"
  >
    <list-item
      v-for="item of sourceList"
      @click.native.capture="handleIconClick(item)"
      :key="item.id"
      :status="item.status"
    >
      <template v-slot:icon>
        <img :src="item.imgsrc">
      </template>
      <template v-slot:title>
        {{item.title}}
      </template>
      <template v-slot:activeSwitch>
        <el-switch
          v-model="item.status"
          active-color="#13ce66"
          inactive-color="#ff4949"
        >
        </el-switch>
      </template>
    </list-item>

    <div
      v-for="item of (useWidth-sourceList.length%useWidth)"
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
      screenWidth: document.body.clientWidth,
      sourceList: [{
        id: 1,
        imgsrc: '../static/images/weibo.png',
        title: '微博热搜榜',
        name: 'weibo',
        status: true
      }, {
        id: 2,
        imgsrc: '../static/images/zhihu.png',
        title: '知乎热搜榜',
        name: 'zhihu',
        status: false
      }, {
        id: 3,
        imgsrc: '../static/images/haoqixin.png',
        title: '好奇心日报',
        name: 'haoqixin',
        status: true
      }, {
        id: 4,
        imgsrc: '../static/images/github.png',
        title: 'github榜',
        name: 'github',
        status: true
      }, {
        id: 5,
        imgsrc: '../static/images/weibo.png',
        title: '微博热搜榜',
        name: 'weibo',
        status: true
      }, {
        id: 6,
        imgsrc: '../static/images/weibo.png',
        title: '微博热搜榜',
        name: 'weibo',
        status: true
      }]
    }
  },
  computed: {
    useWidth () {
      return Math.floor(this.screenWidth / 64)
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
