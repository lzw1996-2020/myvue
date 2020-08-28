import fetch from './fetch'

export default {
  // 获取用户
  getUserInfo () {
    return fetch({
      url: '/api/v1/user/profile/realTime',
      method: 'GET'
    })
  }
}
