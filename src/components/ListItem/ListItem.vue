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
    <subscription :status="source.status">
      <template #switch>
        <slot name="activeSwitch"></slot>
      </template>
    </subscription>
  </div>
</template>
<script>
import Subscription from '../Subscription/Subscription'
export default {
  name: 'ListItem',
  components: {
    Subscription
  },
  props: {
    source: {
      weblogo: String,
      webname: String,
      weblocalname: String,
      status: Boolean
    }
  },
  methods: {
    handleItemClick () {
      // 将icon的属性保存在store
      this.$store.commit('setlist', this.source)
      // 页面跳转路由
      this.$router.push({
        name: 'HotList'
      })
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
  width: 4rem;
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
