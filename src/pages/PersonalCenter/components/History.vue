<template>
  <div class="history-item">
    <div class="icon-container">
      <img :src="imgsrc">
    </div>
    <div class="link">{{link}}</div>
  </div>
</template>

<script>
export default {
  name: 'History',
  props: {
    imgsrc: String,
    link: String
  },
  data () {
    return {
    }
  }
}
</script>

<style scoped>
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
  margin: 0.2rem;
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
