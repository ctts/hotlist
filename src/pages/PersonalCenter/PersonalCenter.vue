<template>
  <div>
    <list-header>
      <template v-slot:content>
        个人中心
      </template>
      <!-- 用户名 -->
    </list-header>
    <div
      class="wapper"
      ref="historylist"
    >
      <div>
        <self></self>
        <!-- 历史记录 -->
        <h5>浏览历史</h5>
        <div class="history-list">
          <div
            ref="hint"
            class="hint"
          >
            <p>登录后可使用历史记录</p>
            <img
              src="../../../static/images/cry.png"
              alt=""
            >
          </div>
          <history
            v-for="item of historySource"
            :key="item._id"
            :info="item"
          ></history>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import ListHeader from '../../components/PageHeader/PageHeader'
import Self from './components/Self'
import History from './components/History'
import Bscroll from 'better-scroll'
import { getHistory } from '../../request/api'
export default {
  name: 'PersonalCenter',
  data () {
    return {
      historySource: [],
      options: {
        scrollY: true,
        scrollX: false,
        mouseWheel: true,
        click: true,
        taps: true
      }
    }
  },
  components: {
    ListHeader,
    Self,
    History
  },
  mounted () {
    // options是better-scroll配置参数
    this.$nextTick(() => {
      this.scroll = new Bscroll(this.$refs.historylist, this.options)
    })

    // 获取用户历史记录
    if (localStorage.username) {
      getHistory(localStorage.username).then((res) => {
        this.historySource = res.data.info
        console.log(res)
      })
    } else {
      this.$refs.hint.style.display = 'block'
    }
  }
}
</script>

<style scoped>
h5 {
  margin: 0.2rem 0.5rem;
}

.history-list {
  margin: 0 0.3rem;
}

.wapper {
  position: absolute;
  left: 0;
  right: 0;
  top: 49px;
  bottom: 49px;
  background: #fff;
}

.hint {
  display: none;
  color: red;
  size: 12px;
  margin: 0;
  text-align: center;
}
</style>
