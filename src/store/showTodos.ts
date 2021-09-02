import { AnyAction } from '@reduxjs/toolkit'
import { TodosArray } from '../models/TodosArray'

let todos: TodosArray = []

const ALL_TODOS = 'ALL_TODOS'
const initialState = { todos }

export function showTodos(state = initialState, action: AnyAction) {
  switch (action.type) {
    case ALL_TODOS:
      return {
        ...state,
        todos: action.payload as TodosArray,
      }
    default:
      return state
  }
}

export const getAll = (data: TodosArray) => ({ type: ALL_TODOS, payload: data })
