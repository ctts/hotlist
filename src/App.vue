<template>
  <div id="app">
    <router-view />
    <tabbar class="footer"></tabbar>
  </div>
</template>

<script>
import Tabbar from './components/Tabbar/Tabbar'
export default {
  name: 'App',
  components: {
    Tabbar
  }
}
</script>

<style scoped>
.footer {
  width: 100%;
  position: fixed;
  left: 0;
  bottom: 0;
  padding: 0;
  margin: 0;
}

.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
