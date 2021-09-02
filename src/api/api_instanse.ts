import axios from 'axios'

const base = 'http://localhost:5000'

export const api = axios.create({
  withCredentials: true,
  baseURL: base,
})

api.interceptors.request.use((config) => {
  config.headers.authorization = localStorage.getItem('token')
  return config
})
