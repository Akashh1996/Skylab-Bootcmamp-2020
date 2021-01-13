import actionTypes from '../actions/actionTypes'
import { ActionUser } from '../utils/interfaces'

const initialState = {}

export default function userReducer (state: any = initialState, action: ActionUser) {
  let newState = null
  switch (action.type) {
    case actionTypes.LOAD_USER:
      newState = { ...state, user: action.user }
      break
    case actionTypes.LOAD_USER_ERROR:
      newState = { ...state, error: action.error }
      break
    case actionTypes.ADD_AND_LOAD_USER:
      newState = { ...state, user: action.user }
      break
    case actionTypes.ADD_AND_LOAD_USER_ERROR:
      newState = { ...state, error: action.error }
      break
    case actionTypes.ADD_FAVORITE:
      newState = { ...state, user: action.user }
      break
    case actionTypes.ADD_FAVORITE_ERROR:
      newState = { ...state, error: action.error }
      break
    case actionTypes.DELETE_FAVORITE:
      newState = { ...state, user: action.user }
      break
    case actionTypes.DELETE_FAVORITE_ERROR:
      newState = { ...state, error: action.error }
      break
    default:
      newState = state
      break
  }

  return newState
}
