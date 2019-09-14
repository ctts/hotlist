<template>
  <div>
    <list-header>
      <template v-slot:content>
        个人中心
      </template>
      <!-- 用户名 -->
    </list-header>
    <div
      class="wapper"
      ref="historylist"
    >
      <div>
        <self></self>
        <!-- 历史记录 -->
        <h5>浏览历史</h5>
        <div class="history-list">
          <history
            v-for="item of historySource"
            :key="item.id"
            :imgsrc="item.imgsrc"
            :link="item.link"
          ></history>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import ListHeader from '../../components/PageHeader/PageHeader'
import Self from './components/Self'
import History from './components/History'
import Bscroll from 'better-scroll'
export default {
  name: 'PersonalCenter',
  data () {
    return {
      // headsrc: '../../../../static/images/head.jpg',
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
      }, {
        id: 5,
        imgsrc: '../static/images/weibo.png',
        link: '1111111111111111111111111'
      }, {
        id: 6,
        imgsrc: '../static/images/weibo.png',
        link: '1111111111111111111111111'
      }, {
        id: 7,
        imgsrc: '../static/images/weibo.png',
        link: '1111111111111111111111111'
      }, {
        id: 8,
        imgsrc: '../static/images/weibo.png',
        link: '1111111111111111111111111'
      }, {
        id: 9,
        imgsrc: '../static/images/weibo.png',
        link: '1111111111111111111111111'
      }, {
        id: 10,
        imgsrc: '../static/images/weibo.png',
        link: '1111111111111111111111111'
      }],
      options: {
        scrollY: true,
        scrollX: false,
        mouseWheel: true,
        click: true,
        taps: true
      }
    }
  },
  components: {
    ListHeader,
    Self,
    History
  },
  mounted: function () {
    // options是better-scroll配置参数
    this.scroll = new Bscroll(this.$refs.historylist, this.options)
  }
}
</script>

<style scoped>
h5 {
  margin: 0.2rem 0.5rem;
}

.history-list {
  margin: 0 0.3rem;
}

.wapper {
  position: absolute;
  left: 0;
  right: 0;
  top: 49px;
  bottom: 49px;
}
</style>
