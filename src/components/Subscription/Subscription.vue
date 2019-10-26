<template>
  <div @click="handleStatusChange">
    <slot
      name="active"
      v-if="handleStatus"
    ></slot>
    <slot
      name="inactive"
      v-else
    ></slot>
    <slot name="switch"></slot>
  </div>
</template>
<script>
import { addSubscription } from '../../request/api'
export default {
  name: 'Subscription',
  props: {
    status: Boolean,
    webname: String
  },
  data () {
    return {
      handleStatus: true
    }
  },
  mounted () {
    this.handleStatus = this.status
  },
  methods: {
    // 状态改变事件
    handleStatusChange () {
      let userdata = {
        username: localStorage.username,
        webname: this.webname,
        type: this.handleStatus
      }
      addSubscription(userdata).then((res) => {
        // console.log(res)
        if (res.data.ok === 1) {
          // 如果成功没，状态改变
          this.handleStatus = !this.handleStatus
        } else if (res.data.ok === 0) {
          alert('网站已被定义，请刷新页面')
        } else {
          alert('服务器出错')
        }
      })
    }
  }
}
</script>

<style scoped>
</style>
