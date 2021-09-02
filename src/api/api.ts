import { Dispatch } from 'react'
import User from '../models/User'
import { TodosArray } from '../models/TodosArray'
import { getAll } from '../store/showTodos'
import { api } from './api_instanse'
import { AxiosResponse } from 'axios'
import { setLoading } from '../store/isLoading'

export async function login(
  username: string,
  password: string
): Promise<AxiosResponse<User>> {
  return api.post<User>('/login', { username, password })
}

export function getTodos() {
  return (
    dispatch: Dispatch<{ type: string; payload: TodosArray | boolean }>
  ) => {
    api.get<TodosArray>('/').then((response) => {
      dispatch(getAll(response.data))
      dispatch(setLoading(false))
    })
  }
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
