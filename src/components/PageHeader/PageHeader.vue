<template>
  <div>
    <div class="header">
      <div
        class="left"
        @click="turnBack"
      >
        <slot name="left"></slot>
      </div>
      <div class="content">
        <slot name="content"></slot>
      </div>
      <div class="right">
        <slot name="right"></slot>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'PageHeader',
  methods: {
    turnBack () {
      // 先判断是否是其他Webview网页，若是则close，否则路由回退一格
      /* eslint-disable */
      if (window.plus) {
        let allWindows = plus.webview.all();
        if (allWindows.length > 1) {
          for (let i = 1; i < allWindows.length; i++) {
            allWindows[i].close()
          }
        } else {
          this.$router.back(-1)
        }
      } else {
        this.$router.back(-1)
      }
    }
  }
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
  width: 3rem;
}
.right {
  width: 3rem;
}
.content {
  flex: 1;
}
</style>
