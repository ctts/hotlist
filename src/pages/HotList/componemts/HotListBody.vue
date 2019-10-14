<template>
  <div class="list-container">
    <div
      v-for='item of hotData'
      :key='item.infoNumber'
      class="list-item"
    >
      <span>{{item.infoNumber+'.'}}</span>
      <a
        :href='item.infoURL'
        target='_blank'
      >{{item.infoContent}}</a>
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
        console.log(response)
        this.hotData = response.data
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
