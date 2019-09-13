<template>
  <div class="self-container">
    <div><img :src="headsrc"></div>
    <div class="info">
      <div>
        <!-- {{username}} -->
        前往注册/登录
      </div>
      <div>
        <!-- <el-button type="danger">安全退出</el-button> -->
        <el-button type="success">前往注册/登录</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'self',
  props: {
    username: String,
    headsrc: String
  }

}
</script>

<style scoped>
.self-container {
  display: flex;
  height: 6rem;
  padding: 0.5rem;
  background: #eeeeee;
}

.info {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

img {
  width: 6rem;
  height: 6rem;
  border-radius: 5px;
}

.el-button {
  width: 10rem;
}
</style>
