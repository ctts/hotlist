<template>
  <div>
    <list-header>
      <template v-slot:content>
        个人中心
      </template>
      <!-- 用户名 -->
    </list-header>
    <self
      :username="username"
      :headsrc="headsrc"
    ></self>
    <!-- 历史记录 -->
    <h5>浏览历史</h5>
    <history
      v-for="item of historySource"
      :key="item.id"
      :imgsrc="item.imgsrc"
      :link="item.link"
    ></history>
  </div>
</template>

<script>
import ListHeader from '../../components/PageHeader/PageHeader'
import Self from './components/Self'
import History from './components/History'
export default {
  name: 'EachList',
  data () {
    return {
      username: '参天桃树',
      headsrc: '../../../../static/images/head.jpg',
      historySource: [{
        id: 1,
        imgsrc: '../static/images/weibo.png',
        link: '1111111111111111111'
      }, {
        id: 2,
        imgsrc: '../static/images/baidu.png',
        link: '1111111111111111111111111111111111111'
      }, {
        id: 3,
        imgsrc: '../static/images/zhihu.png',
        link: '1111111111111111111111111111111111111'
      }, {
        id: 4,
        imgsrc: '../static/images/weibo.png',
        link: '1111111111111111111111111'
      }]
    }
  },
  components: {
    ListHeader,
    Self,
    History
  }
}
</script>

<style scoped>
h5 {
  margin: 0.2rem 0;
}
</style>
