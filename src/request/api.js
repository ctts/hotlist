import axios from './http'

// 登录
const loginTo = (userdata) => {
  return axios.post('/login', userdata)
}

// 获取热点数据
const getHotData = (web) => {
  return axios.get('/website/' + web)
}

// 上传用户头像
const postUserImage = (formdata, config) => {
  return axios.post('/upload', formdata, config)
}

// 上传历史记录
const postHistory = (history) => {
  return axios.post('/history/insertHistory', history)
}

// 上传历史记录
const getHistory = (username) => {
  return axios.get('/history/getHistory/' + username)
}

// 更新订阅
const addSubscription = (userdata) => {
  return axios.post('/subscription/update', userdata)
}

// 获取订阅
const getSubscription = () => {
  return axios.get()
}

export {
  loginTo,
  getHotData,
  postUserImage,
  postHistory,
  getHistory,
  addSubscription,
  getSubscription
}
