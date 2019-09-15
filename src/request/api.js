import axios from './http'

const loginTo = (userdata) => {
  return axios.post('http://localhost:3000/login', userdata)
}

const getHotData = (web) => {
  return axios.get('http://localhost:3000/' + web)
}

export {
  loginTo,
  getHotData
}
