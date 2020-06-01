import request from '@/services/request/request'
import apis from './api'
const api = {}

for(let i in apis){
  api[i] = (params = {} ,{ responseType = 'json' ,...rest } = {}) => request({
    url: apis[i].url,
    method: apis[i].type || 'get',
    data: apis[i].type.toLowerCase() === 'post' ? params : {},
    params: apis[i].type.toLowerCase() === 'get' ? params : {},
    responseType,
    ...rest
  })
}

export default api