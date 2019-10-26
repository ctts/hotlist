<template>
  <div class="container">
    <!-- title -->
    <div class="title">
      <slot></slot>
    </div>
    <!-- list -->
    <div class="list-wapper">
      <list-item
        v-for="item of sourceList"
        :key="item.id"
        :source="item"
      >
        <template #icon>
          <img :src="item.imgsrc">
        </template>
        <template #title>
          {{item.title}}
        </template>
      </list-item>
      <div
        v-for="item of (useWidth - sourceList.length % useWidth)"
        :key="item+'-label'"
        class="list-item-temp"
      >
      </div>
    </div>
  </div>

</template>
<script>
import ListItem from '@/components/ListItem/ListItem'
export default {
  name: 'alllistBody',
  components: {
    ListItem
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
        name: 'zhihu',
        status: true
      }, {
        id: 6,
        imgsrc: '../static/images/weibo.png',
        title: '微博热搜榜',
        name: 'zhihu',
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

<style lang="" scoped>
.list-wapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.container {
  padding: 0.5rem;
  background: #fff;
  margin: 0 0.3rem 0;
}

.title {
  font-size: 14px;
  padding: 0.1rem 0.2rem 0.5rem 0.2rem;
  border-bottom: #f6f6f6 1.5px solid;
  margin-bottom: 0.5rem;
}

.list-item-temp {
  width: 4rem;
}
</style>
