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
import global from '../../../global/global'
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
    console.log(hot)
    this.listImage = global.DEFAULT_URL + global.WEBS_LOGO + hot.weblogo
    this.status = hot.status
    this.webname = hot.webname
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
