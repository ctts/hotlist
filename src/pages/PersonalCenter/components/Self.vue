<template>
  <el-container>
    <el-aside width="6.5rem"><img :src="headsrc"></el-aside>
    <el-container>
      <el-header height="3rem">
        {{username}}
      </el-header>
      <el-footer>
        <el-button type="danger">安全退出</el-button>
      </el-footer>
    </el-container>
  </el-container>

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
.el-container {
  height: 6.5rem;
}

.el-header {
  display: flex;
  align-items: center;
  justify-content: start;
}

.el-footer {
  display: flex;
  align-items: center;
}

.el-button {
  width: 10rem;
}

.head {
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

img {
  width: 6rem;
  height: 6rem;
  border-radius: 5px;
}
</style>
