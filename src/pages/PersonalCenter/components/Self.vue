<template>
  <el-container>
    <el-aside width="6.5rem"><img src="../../../../static/images/head.jpg"></el-aside>
    <el-container>
      <el-header height="3rem">
        <div>参天桃树</div>
      </el-header>
      <el-footer>
        <el-button type="danger">安全退出</el-button>
      </el-footer>
    </el-container>
  </el-container>

</template>

<script>
export default {
  name: 'self'
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

.el-footer{
    display: flex;
    align-items: center;
}

.el-button{
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
