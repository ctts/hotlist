import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

// 创建一个store实例
let store = new Vuex.Store({
  state: {
    list: {
      state: false,
      imgsrc: '',
      title: '',
      name: ''
    },
    user: {
      username: String,
      userimg: String
    }
  },
  //  设置get方法
  getters: {
    getlist (state) {
      return state.list
    },
    getUser (state) {
      return state.user
    }
  },
  //  设置set方法
  mutations: {
    setlist (state, value) {
      Object.assign(state.list, value)
    },
    setUser (state, value) {
      state.user.username = value.username
      state.user.userimg = value.userimg
    }
  },
  actions: {}

})

export default store
