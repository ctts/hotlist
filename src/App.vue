<template>
  <div id="app">
    <router-view />
    <tabbar class="footer"></tabbar>
  </div>
</template>

<script>
import Tabbar from './components/Tabbar/MainTabbar'
export default {
  name: 'App',
  components: {
    Tabbar
  }
}
</script>

<style scoped>
</style>
