import Vue from 'vue'
import Router from 'vue-router'
import AllList from '@/pages/AllList/AllList'
import MySubscribe from '@/pages/MySubscribe/MySubscribe'
import PersonalCenter from '@/pages/PersonalCenter/PersonalCenter'
import HotList from '@/pages/HotList/HotList'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'AllList',
    component: AllList
  }, {
    path: '/subscribe',
    name: 'MySubscribe',
    component: MySubscribe
  }, {
    path: '/person',
    name: 'PersonalCenter',
    component: PersonalCenter
  }, {
    path: '/hotlist',
    name: 'HotList',
    component: HotList
  }]
})
