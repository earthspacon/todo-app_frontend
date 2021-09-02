import User from './User'

export interface Todo {
  author: User
  text: string
  _id: string
}

export type TodosArray = Todo[]
