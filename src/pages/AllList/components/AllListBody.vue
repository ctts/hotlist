<template>
  <div>
    <p>热门榜单</p>
    <el-row :gutter="10">
      <el-col
        :gutter="10"
        :span="6"
        v-for="item of sourceList"
        :key="item.id"
      >
        <img
          :src="item.imgsrc"
          @click="handleIconClick(item.name)"
        >
        <p>{{item.title}}</p>
      </el-col>
    </el-row>
  </div>

</template>
<script>
export default {
  name: 'listBody',
  data () {
    return {
      sourceList: [{
        id: 1,
        imgsrc: '../static/images/weibo.png',
        title: '微博热搜榜',
        name: 'weibo'
      }, {
        id: 2,
        imgsrc: '../static/images/zhihu.png',
        title: '知乎热搜榜',
        name: 'zhihu'
      }, {
        id: 3,
        imgsrc: '../static/images/baidu.png',
        title: '微博热搜榜',
        name: 'baidu'
      }, {
        id: 4,
        imgsrc: '../static/images/weibo.png',
        title: '微博热搜榜',
        name: 'zhihu'
      }, {
        id: 5,
        imgsrc: '../static/images/weibo.png',
        title: '微博热搜榜',
        name: 'zhihu'
      }, {
        id: 6,
        imgsrc: '../static/images/weibo.png',
        title: '微博热搜榜',
        name: 'zhihu'
      }]
    }
  },
  methods: {
    handleIconClick (name) {
      this.$router.push({
        path: `/hotlist/${name}`
      })
    }
  }
}
</script>

<style lang="" scoped>
.el-col {
  text-align: center;
  overflow: hidden;
}
img {
  width: 100%;
  height: 100%;
}
p {
  margin: 0.1rem;
  font-size: 10px;
}
</style>
