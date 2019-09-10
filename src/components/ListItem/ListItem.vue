<template>
  <div class="wrapper">
    <!-- 图标 -->
    <div
      class="item"
      @click="handleItemClick"
    >
      <div class="icon-container">
        <slot name="icon"></slot>
      </div>
      <div>
        <slot name="title"></slot>
      </div>
    </div>
    <!-- 开关 -->
    <div
      class="switch"
      @click="handleSwitchClick"
    >
      <div v-show="isActive">
        <slot name="activeSwitch"></slot>
      </div>
      <div v-show="!isActive">
        <slot name="inactiveSwitch"></slot>
      </div>

    </div>
  </div>
</template>
<script>
export default {
  name: 'ListItem',
  props: {
    path: String,
    state: Boolean
  },
  data () {
    return {
      isActive: this.state
    }
  },
  methods: {
    handleItemClick () {
      this.$router.push({ name: 'HotList', params: { name: this.path } })
    },
    handleSwitchClick () {
      this.isActive = !this.isActive
      console.log(this.isActive)
    }
  }
}
</script>
<style scoped>
.container {
  display: flex;
  justify-content: space-around;
  flex-flow: row wrap;
}

.wrapper {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
}

.item {
  display: inline-flex;
  width: 4rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 12px;
}

.icon-container {
  height: 4rem;
}

img {
  max-width: 100%;
}

.icon {
  width: 3.5em;
  height: 3.5em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
