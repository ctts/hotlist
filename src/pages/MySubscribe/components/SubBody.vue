<template>
  <div>
    <el-row :gutter="10">
      <el-col
        :gutter="10"
        :span="8"
        v-for="item of sourceList"
        :key="item.id"
      >
        <img :src="item.imgsrc">
        <p>{{item.title}}</p>
        <i
          @click="handleSwitch(item.id)"
          v-html="item.state?'&#xe612;':'&#xe611;'"
          class="element-icons switch"
        ></i>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: 'SubBody',
  data () {
    return {
      sourceList: [{
        id: 1,
        imgsrc: '../static/images/weibo.png',
        title: '微博热搜榜',
        state: true
      }, {
        id: 2,
        imgsrc: '../static/images/zhihu.png',
        title: '知乎热搜榜',
        state: true
      }, {
        id: 3,
        imgsrc: '../static/images/weibo.png',
        title: '微博热搜榜',
        state: true
      }, {
        id: 4,
        imgsrc: '../static/images/weibo.png',
        title: '微博热搜榜',
        state: true
      }, {
        id: 5,
        imgsrc: '../static/images/weibo.png',
        title: '微博热搜榜',
        state: true
      }, {
        id: 6,
        imgsrc: '../static/images/weibo.png',
        title: '微博热搜榜',
        state: true
      }]
    }
  },
  methods: {
    handleSwitch (id) {
      this.sourceList.forEach((obj) => {
        if (obj.id === id) {
          obj.state = !obj.state
        }
      })
    }
  }
}
</script>

<style lang="" scoped>
.el-row {
  text-align: center;
  padding: 2.5rem;
}

img {
  width: 100%;
  height: 100%;
}

p {
  margin: 0.1rem;
  font-size: 10px;
}

.switch {
  font-size: 40px;
}
</style>
