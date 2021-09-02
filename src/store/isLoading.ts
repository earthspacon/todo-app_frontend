import { AnyAction } from '@reduxjs/toolkit'

const type = 'loading'
const initialState = { isLoading: true }

export function loader(state = initialState, action: AnyAction) {
  switch (action.type) {
    case type:
      return {
        ...state,
        isLoading: action.payload as boolean,
      }
    default:
      return state
  }
}

export const setLoading = (data: boolean) => ({ type, payload: data })
