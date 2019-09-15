<template>
  <div class="list-container">
    <div
      v-for='item of hotData'
      :key='item.id'
      class="list-item"
    >
      <span>{{item.id+'.'}}</span>
      <a
        :href='item.url'
        target='_blank'
      >{{item.title}}</a>
    </div>
  </div>
</template>

<script>
import { getHotData } from '@/request/api'
export default {
  name: 'ListBody',
  data () {
    return {
      hotData: null,
      webname: this.$store.getters.getlist.name
    }
  },
  mounted: function () {
    getHotData(this.webname)
      .then(response => {
        this.hotData = response.data.listData
      })
  }
}
</script>

<style scoped>
.list-container {
  padding: 0 0.2rem;
}

.list-item {
  display: flex;
  align-items: center;
  height: 3rem;
  border-bottom: 1px solid #000;
  padding: 0.2rem 0.3rem;
}

span {
  /* width: 2.4rem; */
  margin-right: 0.5rem;
}

a {
  text-decoration: none;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  /*控制在2行*/
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  color: #000;
}
</style>
