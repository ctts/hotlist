<template>
  <div class="list-container">
    <div>{{titleName}}</div>
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
export default {
  name: 'ListBody',
  props: {
    webname: String
  },
  data () {
    return {
      hotData: null,
      titleName: null
    }
  },
  created: function () {
    this.axios(`http://localhost:3000/${this.webname}`, {
      method: 'get'
    })
      .then(response => {
        this.hotData = response.data.listData
        this.titleName = response.data.titleName.name
        console.log(response.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
</script>

<style scoped>
.list-container {
  padding: 1rem;
}

.list-item {
  display: flex;
  align-items: center;
  height: 3rem;
  border-bottom: 1px solid #000;
}

span {
  width: 2.4rem;
}
</style>
