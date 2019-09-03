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
        <img :src="item.imgsrc">
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
        title: '微博热搜榜'
      }, {
        id: 2,
        imgsrc: '../static/images/zhihu.png',
        title: '知乎热搜榜'
      }, {
        id: 3,
        imgsrc: '../static/images/weibo.png',
        title: '微博热搜榜'
      }, {
        id: 4,
        imgsrc: '../static/images/weibo.png',
        title: '微博热搜榜'
      }, {
        id: 5,
        imgsrc: '../static/images/weibo.png',
        title: '微博热搜榜'
      }, {
        id: 6,
        imgsrc: '../static/images/weibo.png',
        title: '微博热搜榜'
      }]
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
