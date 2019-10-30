<template>
  <div class="list-container">
    <a
      v-for='item of hotData'
      :key='item.infoNumber'
      class="list-item"
      @click="handlePostHistory(item)"
    >
      <span>{{infoNumber(item)}}</span>
      <p>{{item.infoContent}}</p>
    </a>
  </div>
</template>

<script>
import { getHotData, postHistory } from '@/request/api'
export default {
  name: 'ListBody',
  data () {
    return {
      hotData: null,
      webname: this.$store.getters.getlist.webname
    }
  },
  mounted: function () {
    getHotData(this.webname)
      .then(response => {
        // console.log(response)
        this.hotData = response.data
      })
  },
  methods: {
    infoNumber (info) {
      return info.infoNumber < 10 ? '0' + info.infoNumber + '.' : info.infoNumber + '.'
    },
    // 发送历史记录
    handlePostHistory (item) {
      // 添加用户名
      item.username = localStorage.username
      // 开始发送
      postHistory(item)

      // 测试
      /* eslint-disable */
      var embed = plus.webview.create(item.infoURL, '', { top: '49px', bottom: '49px' });
      plus.webview.currentWebview().append(embed);
    }
  }
}
</script>

<style scoped>
.list-container {
  padding: 0 0.2rem;
}

.list-item {
  display: flex;
  align-items: center;
  height: 3rem;
  border-bottom: 1px solid #000;
  padding: 0.2rem 0.3rem;
}

span {
  /* width: 2.4rem; */
  margin-right: 0.5rem;
}

a {
  text-decoration: none;
  color: #000;
}

a p {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  /*控制在2行*/
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>
