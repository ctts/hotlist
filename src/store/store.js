import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

// 创建一个store实例
let store = new Vuex.Store({
  state: {
    list: {
      status: false,
      imgsrc: '',
      title: '',
      name: ''
    }
  },
  //  设置get方法
  getters: {
    getlist (state) {
      return state.list
    }
  },
  //  设置set方法
  mutations: {
    setlist (state, value) {
      Object.assign(state.list, value)
    }
  },
  actions: {}

})

export default store
