import actionLocationTypes from '../actions/actionLocationTypes'
import { ActionLocation } from '../utils/interfaces'

const initialState = {}

export default function locationReducer (state: any = initialState, action: ActionLocation) {
  let newState = null
  switch (action.type) {
    case actionLocationTypes.PERMISSIONS_NOT_ACCEPTED:
      newState = { ...state, error: action.error }
      break
    case actionLocationTypes.PERMISSIONS_ERROR:
      newState = { ...state, error: action.error }
      break
    case actionLocationTypes.LOCATION_SUCCESS:
      newState = { ...state, latitude: action.latitude, longitude: action.longitude }
      break
    case actionLocationTypes.LOCATION_ERROR:
      newState = { ...state, error: action.error }
      break
    case actionLocationTypes.CITY_SUCCESS:
      newState = { ...state, city: action.city }
      break
    case actionLocationTypes.CITY_ERROR:
      newState = { ...state, error: action.error }
      break
    default:
      newState = state
      break
  }

  return newState
}
