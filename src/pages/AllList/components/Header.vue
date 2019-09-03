<template>
  <div>
    <div class="container">
      <p>所有热点，一网打尽</p>
    </div>
    <div class="block">
      <el-carousel
        trigger="click"
        height="150px"
      >
        <el-carousel-item
          v-for="item in 4"
          :key="item"
        >
          <h3 class="small">{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="" scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
  background: #409eff;
  color: white
}

.block {
  margin: 5px 0 5px;
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
