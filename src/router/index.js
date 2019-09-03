import Vue from 'vue'
import Router from 'vue-router'
import AllList from '@/pages/AllList/AllList'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'AllList',
    component: AllList
  }]
})
