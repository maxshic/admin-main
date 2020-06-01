import axios from 'axios'

const service = axios.create({
  baseURL: 'https://www.fastmock.site/mock/6545014898bc71f3533cfd4bc1df14bc/apptest',
  timeout: 1000*60
})

service.interceptors.request.use(config => {


  return config
})

service.interceptors.response.use(response => {


  return response
})

export default service