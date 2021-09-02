import { applyMiddleware, combineReducers, createStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import { showTodos } from './showTodos'
import { loader } from './isLoading'

const rootReducer = combineReducers({
  all: showTodos,
  loader,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))

export type RootState = ReturnType<typeof store.getState>
