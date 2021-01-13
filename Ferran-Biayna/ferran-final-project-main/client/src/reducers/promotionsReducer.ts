import actionTypes from '../actions/actionTypes'
import { Action } from '../utils/interfaces'

const initialState = {}

export default function promotionsReducer (state: object = initialState, action: Action) {
  let newState = null
  switch (action.type) {
    case actionTypes.LOAD_PROMOTIONS:
      newState = { ...state, promotions: action.promotions }
      break
    case actionTypes.LOAD_PROMOTIONS_ERROR:
      newState = { ...state, error: action.error }
      break
    case actionTypes.LOAD_PROMOTION:
      newState = { ...state, promotion: action.promotion }
      break
    case actionTypes.LOAD_PROMOTION_ERROR:
      newState = { ...state, error: action.error }
      break
    case actionTypes.LOAD_ESTABLISHMENT:
      newState = { ...state, establishment: action.establishment }
      break
    case actionTypes.LOAD_ESTABLISHMENT_ERROR:
      newState = { ...state, error: action.error }
      break
    default:
      newState = state
      break
  }

  return newState
}
