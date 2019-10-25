<template>
  <a
    class="history-item"
    :href="info.infoURL"
    target="_black"
  >
    <div class="icon-container">
      <img :src="websrc(info.weblogo)">
    </div>
    <div class="infoURL">{{info.infoContent}}</div>
  </a>
</template>

<script>
import global from '../../../global/global'
export default {
  name: 'History',
  props: {
    info: {
      weblogo: String,
      infoURL: String,
      infoContent: String
    }
  },
  methods: {
    websrc (url) {
      return global.DEFAULT_URL + global.WEBS_LOGO + url
    }
  }
}
</script>

<style scoped>
.infoURL {
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
  margin: 0.2rem;
  text-decoration: none;
  color: black;
}
.icon-container {
  width: 3rem;
  height: 0;
  padding-bottom: 3rem;
}
img {
  width: 3rem;
  height: 3rem;
}
</style>
