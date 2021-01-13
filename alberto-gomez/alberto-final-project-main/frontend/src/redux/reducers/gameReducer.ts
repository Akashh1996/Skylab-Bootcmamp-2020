/* eslint-disable no-case-declarations */
import actionTypes from '../actions/actionTypes'

export default function gameReducer (state = {}, action: any) {
  let newState
  switch (action.type) {
    case actionTypes.LOAD_GAME:
      newState = { ...state, gameObject: action.gameItem }
      break
    case actionTypes.LOAD_ALL_GAMES:
      newState = { ...state, gameArray: action.gameCollection }
      break
    case actionTypes.LOAD_ERROR:
      newState = { ...state, error: action.error }
      break
    default:
      newState = { ...state }
  }
  return newState
}
