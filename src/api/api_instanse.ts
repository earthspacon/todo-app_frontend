import axios from 'axios'

export const api = axios.create({
  withCredentials: true,
  baseURL: 'http://localhost:5000',
})

api.interceptors.request.use((config) => {
  config.headers.authorization = localStorage.getItem('token')
  return config
})

api.interceptors.response.use(
  (response) => response,

  (error) => {
    let status = (error.response && error.response.status) || 0
    if (status >= 400 && status < 600) {
      localStorage.clear()
      window.location = '/login' as any
    } else {
      throw error
    }
  }
)
