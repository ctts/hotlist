import axios from './http'

const loginTo = (userdata) => {
  return axios.post('/login', userdata)
}

const getHotData = (web) => {
  return axios.get('/website/' + web)
}

export {
  loginTo,
  getHotData
}
