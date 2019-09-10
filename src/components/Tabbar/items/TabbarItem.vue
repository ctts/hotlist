<template>
  <div
    class="tabbar-item"
    @click="handleItemClick"
  >
    <div v-show="isActive">
      <slot name="activeIconfont"></slot>
    </div>
    <div v-show="!isActive">
      <slot name="inactiveIconfont"></slot>
    </div>

    <div :class="{'text':isActive}">
      <slot
        name="text"
        style="color:blue"
      ></slot>
    </div>

  </div>
</template>

<script>
export default {
  name: 'tabbarItem',
  props: {
    path: String
  },
  methods: {
    handleItemClick () {
      if (!this.isActive) {
        this.$router.replace(this.path)
      }
    }
  },
  computed: {
    isActive () {
      return this.$route.path.indexOf(this.path) === 0
    }
  }
}
</script>

<style scoped>
.tabbar-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 10px;
}

.icon {
  width: 1.5em;
  height: 1.5em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}

.text {
  color: #409eff;
}
</style>
