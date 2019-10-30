<template>
  <div class="container">
    <!-- title -->
    <div class="title">
      <slot></slot>
    </div>
    <!-- list -->
    <div class="list-wapper">
      <list-item
        v-for="item of sourceList"
        :key="item._id"
        :source="item"
      >
        <template #icon>
          <img :src="imgsrc(item.weblogo)">
        </template>
        <template #title>
          {{item.weblocalname}}
        </template>
      </list-item>
      <div
        v-for="item of (useWidth - sourceList.length % useWidth)"
        :key="item+'-label'"
        class="list-item-temp"
      >
      </div>
    </div>
  </div>

</template>
<script>
import ListItem from '@/components/ListItem/ListItem'
import global from '../../../global/global'
import { getAllWeb } from '../../../request/api'
export default {
  name: 'alllistBody',
  components: {
    ListItem
  },
  data () {
    return {
      screenWidth: document.body.clientWidth,
      sourceList: []
    }
  },
  computed: {
    useWidth () {
      return Math.floor(this.screenWidth / 64)
    }
  },
  created () {
    getAllWeb(localStorage.username).then(res => {
      console.log(res)
      this.sourceList = res.data
    })
  },
  methods: {
    imgsrc (weblogo) {
      return global.DEFAULT_URL + global.WEBS_LOGO + weblogo
    }
  }
}
</script>

<style lang="" scoped>
.list-wapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.container {
  padding: 0.5rem;
  background: #fff;
  margin: 0 0.3rem 0;
}

.title {
  font-size: 14px;
  padding: 0.1rem 0.2rem 0.5rem 0.2rem;
  border-bottom: #f6f6f6 1.5px solid;
  margin-bottom: 0.5rem;
}

.list-item-temp {
  width: 4rem;
}
</style>
