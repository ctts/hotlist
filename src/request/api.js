import axios from './http'

const loginTo = (userdata) => {
  return axios.post('http://localhost:3000/login', userdata)
}

export {
  loginTo
}
