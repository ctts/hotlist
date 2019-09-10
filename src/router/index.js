import Vue from 'vue'
import Router from 'vue-router'
import AllList from '@/pages/AllList/AllList'
import MySubscribe from '@/pages/MySubscribe/Subscribe'
import PersonalCenter from '@/pages/PersonalCenter/PersonalCenter'
import HotList from '@/pages/HotList/HotList'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    redirect: '/alllist'
  }, {
    path: '/alllist',
    name: 'AllList',
    component: AllList
  }, {
    path: '/subscribe',
    name: 'Subscribe',
    component: MySubscribe
  }, {
    path: '/person',
    name: 'Person',
    component: PersonalCenter
  }, {
    path: '/hotlist/:name',
    name: 'HotList',
    component: HotList
  }]
})
