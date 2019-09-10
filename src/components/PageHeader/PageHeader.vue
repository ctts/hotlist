<template>
  <div>
    <div class="header">
      <div class="left">
        <slot name="left"></slot>
      </div>
      <div class="content">
        <slot name="content"></slot>
      </div>
      <div class="right">
        <slot name="right"></slot>
      </div>
    </div>
    <div class="placeholder"></div>
  </div>

</template>

<script>
export default {
  name: 'PageHeader'
}
</script>

<style scoped>
.header {
  height: 49px;
  display: flex;
  align-items: center;
  text-align: center;
  background: #409eff;
  color: #fff;
  z-index: 100;
  font-weight: 550;

  position: fixed;
  left: 0;
  right: 0;
  top: 0;

  box-shadow: 0 2px rgba(124, 137, 255, 0.1);
}

.left {
  width: 4rem;
}
.right {
  width: 4rem;
}
.content {
  flex: 1;
}

.placeholder {
  height: 49px;
  margin: 0;
  padding: 0;
}
</style>
