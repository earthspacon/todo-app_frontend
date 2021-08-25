import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import './styles.css'
import { AnyAction, createStore } from '@reduxjs/toolkit'

const initialState = { obj: null }

function reducer(state = initialState, action: AnyAction) {
  switch (action.type) {
    case 'ADD':
      return {
        ...state,
        obj: action.payload,
      }
    default:
      return state
  }
}

export const store = createStore(reducer)

export type RootState = ReturnType<typeof store.getState>

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
