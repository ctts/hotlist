<template>
  <ul>
    <li>
      <i class="el-icon-setting"></i>
      <div>发现</div>
    </li>
    <li>
      <i class="el-icon-star-off"></i>
      <div>订阅</div>
    </li>
    <li>
      <i class="el-icon-user"></i>
      <div>个人</div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'tabbar'
}
</script>

<style scoped>
ul {
  display: flex;
  width: 100%;
  flex-direction: row;
  /* justify-content: space-around; */
  padding: 0;
  margin: 0;
  overflow: hidden;
  list-style-type: none;
  text-align: center;
}

li {
  display: flex;
  flex: 1;
  flex-direction: column;
  list-style-type: none;
  padding: 0.5rem 0;
  color: #8b8b8b;
  background: rgba(216, 216, 216, 0.6);
}

li > div {
    font-size: 8px;
}

li:active{
    color: #409EFF;
}
/* .el-col {
  display: flex;
  flex-direction: column;
  text-align: center;
  font-size: 12px;
} */
</style>
