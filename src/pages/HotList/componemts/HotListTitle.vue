<template>
  <div class="title">
    <div class="imageContainer">
      <img :src="listImage">
    </div>
    <subscription
      :status="status"
      :webname="webname"
    >
      <template #active>
        <el-button type="success">订阅</el-button>
      </template>
      <template #inactive>
        <el-button type="danger">取消订阅</el-button>
      </template>
    </subscription>
  </div>
</template>

<script>
import Subscription from '../../../components/Subscription/Subscription'
export default {
  name: 'ListTitle',
  components: {
    Subscription
  },
  data () {
    return {
      listImage: '',
      status: false,
      webname: ''
    }
  },
  mounted () {
    let hot = this.$store.getters.getlist
    this.listImage = hot.imgsrc
    this.status = hot.status
    this.webname = hot.name
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
