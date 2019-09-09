<template>
  <div
    class="tabbar-item"
    @click="handleItemClick"
    :style="currentColor"
  >
    <slot
      v-if="isActive"
      name="activeIconfont"
    ></slot>
    <slot
      v-else
      name="inactiveIconfont"
    ></slot>
    <slot name="text"></slot>
  </div>
</template>

<script>
export default {
  name: 'tabbarItem',
  props: {
    path: String,
    activeColor: {
      type: String,
      default: '#409eff'
    }
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
    },
    currentColor () {
      return this.isActive ? { color: this.activeColor } : {}
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
  font-size: 12px;
}
</style>
