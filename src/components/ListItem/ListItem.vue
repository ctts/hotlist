<template>
  <div
    @click="handleItemClick"
    class="item"
  >
    <div>
      <slot name="icon"></slot>
    </div>
    <div>
      <slot name="title"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ListItem',
  props: {
    path: String
  },
  methods: {
    handleItemClick () {
      this.$router.push(this.path)
    }
  }
}
</script>
<style scoped>
.item {
  display: inline-flex;
  width: 4rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 12px;
}

img {
  max-width: 100%;
}
</style>
