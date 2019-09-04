<template>
  <div>
    <h5>浏览历史</h5>
    <div class="history-container">
      <div
        class="history-item"
        v-for="item of historySource"
        :key="item.id"
      >
        <img :src="item.imgsrc">
        <div class="link">{{item.links}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'History',
  data () {
    return {
      historySource: [{
        id: 1,
        imgsrc: '../static/images/weibo.png',
        links: '1111111111111111111111111111111111111111111111111111111111111111111 111'
      }, {
        id: 2,
        imgsrc: '../static/images/weibo.png',
        links: '1111111111111111111111111111111111111'
      }, {
        id: 3,
        imgsrc: '../static/images/weibo.png',
        links: '1111111111111111111111111111111111111'
      }, {
        id: 4,
        imgsrc: '../static/images/weibo.png',
        links: '1111111111111111111111111111111111111'
      }]
    }
  }
}
</script>

<style scoped>
h5{
  margin: 0.2rem 0;
}
.link {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-left: 1rem;
}
.history-item {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #adadad;
  padding-bottom: 0.2rem;
}

/* .history-container :first-child {
  border-top: 1px dashed black;
} */

.history-item > img {
  width: 3rem;
  height: 3rem;
}
</style>
