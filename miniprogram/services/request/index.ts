// types 
import { InitConfig,IRequestConfig,IResponseContext } from './types'

class XHRequest{
  state: any
  constructor(config:InitConfig){
    // init state 
    this.state = {
      ...config
    }
  }
  request(config:IRequestConfig): Promise<IResponseContext>{
      const { url, data = {}, method = 'GET'} = config
      return new Promise((reslove,reject)=>{
        wx.request({
          method: method,
          url: `${this.state.baseUrl}${url}`,
          timeout : this.state.timeout,
          data: data,
          success: res => {
            reslove(res)
          },
          fail: err => {
            reject(err)
          }
        })
      })
  }

  get(config:IRequestConfig){
    return this.request({...config , method : 'GET'})
  }
  post(config:IRequestConfig){
    return this.request({...config , method : 'POST'})
  }
  delete(config:IRequestConfig){
    return this.request({...config , method : 'DELETE'})
  }
  put(config:IRequestConfig){
    return this.request({...config , method : 'PUT'})
  }
}

export default XHRequest