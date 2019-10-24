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

export {
  loginTo,
  getHotData,
  postUserImage
}
