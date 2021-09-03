import { makeAutoObservable } from 'mobx'
import * as api from '../api/api'
import { Todos } from '../models/Todos'

class Store {
  todos: Todos[] = []
  loading: boolean = true

  constructor() {
    makeAutoObservable(this)
  }

  setLoading(loading: boolean) {
    this.loading = loading
  }

  async setTodos() {
    const response = await api.getTodos()
    this.todos = response.data
    this.setLoading(false)
  }
}

export default new Store()
