/*
 * @Description: 接口方法封装
 * @Version: 1
 * @Autor: Liang Zhong Wei
 * @Date: 2020-08-28 15:20:31
 * @LastEditors: Liang Zhong Wei
 * @LastEditTime: 2020-08-28 16:03:35
 */
import axios from 'axios'
const apiBaseUrl = process.env.API_BASE_URL
// const routerUrl = process.env.ROUTER_URL
const baseUrl = apiBaseUrl + '/ep-xalkori'

// 创建axios实例
const service = axios.create({
  baseURL: baseUrl, // REMOTE_SERVER
  timeout: 60000 // 请求超时时间60秒
})
// request拦截器
service.interceptors.request.use(config => {
  return config
}, error => {
  // Do something with request error
  console.log('Request ERROR', error) // for debug
  Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
  response => {
    /**
     * 下面的注释为通过response自定义code来标示请求状态，当code返回如下情况为权限有问题，登出并返回到登录页
     * 如通过xmlhttprequest 状态码标识 逻辑可写在下面error中
     */

    if (response.status === 200) {
      const data = response.data
      if (data.success) {
        return data
      }
      if (data.code === '400000') {
        console.log(data)
        return Promise.reject(data.subMessage)
      };
      if (data.code === '5G2005') {
        console.log(data)
        return Promise.reject(data.subMessage)
      };
      if (data.code === '4X1071') {
        console.log(data)
        return Promise.reject(data.subMessage)
      };
      // 用户没有访问权限，数据库无该用户数据
      if (data.code === '400001') {
        // authRouter()
      }
      // 用户待入组
      if (data.code === '4X1005') {
        // groupInRouter()
      }

      // 用户入组审核中
      if (data.code === '4X1006') {
        // groupCheckRouter()
      }

      return Promise.reject(data.message)
    }

    console.log('Response ERROR', response)
    console.log('系统繁忙,请稍后重试!')
    return Promise.reject(response)
  },
  error => {
    if (error.response) {
      console.log(error.response.status)

      //   错误响应处理
      if (error.response.status === 401) {
        // authRouter()
      }
      if (error.response.status === 500) {
        // errorRouter()
      }
    }
    console.log('Response ERROR', error)
    console.log('网络连接错误，请检查您的网络!')
    return Promise.reject(error.response)
  }
)

export default service
