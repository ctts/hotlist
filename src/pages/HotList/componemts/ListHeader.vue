<template>
  <div class="head">
    <div class="imageContainer"><img :src="listImage"></div>
  </div>
</template>

<script>
export default {
  name: 'ListHeader',
  data () {
    return {
      listImage: '../static/images/weibo.png'
    }
  }
}
</script>

<style scoped>
.head {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10rem;
  background: #409eff;
}

.imageContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 7rem;
  height: 7rem;
  background: #fff;
  border-radius: 50%;
}

img {
  width: 6rem;
  height: 6rem;
}
</style>
