import axios from 'axios'
export default function request(option) {
  // 1.创建axios的实例
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  });
  // 配置请求和响应拦截
  instance.interceptors.request.use(config => {
    return config
  }, err => {
    return err
  })
  instance.interceptors.response.use(response => {
    return response.data
  }, err => {
    if (err && err.response) {
      switch (err.response.status) {
        case 400:
          err.message = '请求错误'
          break
        case 401:
          err.message = '未授权的访问'
          break
      }
    }
    return err
  })
  return instance(option)
}
