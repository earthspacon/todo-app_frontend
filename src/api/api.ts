import User from '../models/User'
import { Todos } from '../models/Todos'
import { api } from './api_instanse'
import { AxiosResponse } from 'axios'

export async function login(
  username: string,
  password: string
): Promise<AxiosResponse<User>> {
  return api.post<User>('/login', { username, password })
}

export async function getTodos(): Promise<AxiosResponse<Todos[]>> {
  return api.get<Todos[]>('/')
}

export async function addTodo(text: string): Promise<AxiosResponse> {
  return api.post('/', { text })
}

export async function deleteTodo(id: string): Promise<AxiosResponse> {
  return api.delete(`/${id}`)
}

export async function editTodo(
  id: string,
  text: string
): Promise<AxiosResponse> {
  return api.put(`/${id}`, { text })
}
