import axios from 'axios' // 引入axios

// 创建axios并设置超时时间
var instance = axios.create({
  timeout: 1000 * 10
})
// 默认url
instance.defaults.baseURL = 'http://localhost:3000'

// 默认请求头
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'

// 默认请求拦截器
// axios.interceptors.request.use(
//   config => {

//   }
// )

// 默认响应拦截器
instance.interceptors.response.use(
  response => {
    // 只有状态为200时请求成功，否则抛错
    if (response.status === 200) {
      return Promise.resolve(response)
    } else {
      return Promise.reject(response)
    }
  },
  error => {
    // 和后台协商自定义错误码
    if (error.response.status) {
      console.log(error.response.status)
    }
  }
)

export default instance
