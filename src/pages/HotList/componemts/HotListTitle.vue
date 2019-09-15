<template>
  <div class="title">
    <div class="imageContainer">
      <img :src="listImage">
    </div>
    <el-button
      type="success"
      v-if="!status"
      @click="handleButtonClick"
    >订阅</el-button>
    <el-button
      type="danger"
      v-else
      @click="handleButtonClick"
    >取消订阅</el-button>
  </div>
</template>

<script>
export default {
  name: 'ListTitle',
  data () {
    return {
      listImage: '',
      status: false
    }
  },
  methods: {
    handleButtonClick () {
      this.status = !this.status
    }
  },
  mounted () {
    let hot = this.$store.getters.getlist
    this.listImage = hot.imgsrc
    this.status = hot.status
  }
}
</script>

<style scoped>
.title {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 10rem;
  background: #eeeeee;
}

.imageContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5rem;
  height: 5rem;
  background: #fff;
  /* border-radius: 50%; */
  border-radius: 20px;
}

img {
  max-width: 4rem;
  max-height: 4rem;
}

.el-button {
  width: 6rem;
  margin: 0;
  margin-top: 0.5rem;
}
</style>
