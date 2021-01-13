/* eslint-disable no-case-declarations */
import actionTypes from '../actions/actionTypes'

export default function monclusReducer (state = {}, action) {
  let newState = null
  switch (action.type) {
    case actionTypes.LOAD_USER:
      newState = { ...state, userDetail: action.user }
      break
    case actionTypes.LOAD_SERVICES:
      newState = { ...state, serviceList: action.service }
      break
    case actionTypes.LOAD_APPOINTMENT_SERVICE:
      newState = { ...state, selectService: action.selectService }
      break
    case actionTypes.LOAD_APPOINTMENT_BARBER:
      newState = { ...state, selectBarber: action.selectBarber }
      break
    case actionTypes.LOAD_APPOINTMENT_DAY:
      newState = { ...state, selectDay: action.selectDay }
      break
    case actionTypes.LOAD_APPOINTMENT_WEEK_DAY:
      newState = { ...state, selectWeekDay: action.selectWeekDay }
      break
    case actionTypes.LOAD_APPOINTMENT_HOUR:
      newState = { ...state, selectHour: action.selectHour }
      break
    case actionTypes.LOAD_APPOINTMENT_MONTH:
      newState = { ...state, selectMonth: action.selectMonth }
      break
    case actionTypes.LOAD_APPOINTMENT_YEAR:
      newState = { ...state, selectYear: action.selectYear }
      break
    case actionTypes.LOGIN_USER_GOOGLE:
      newState = { ...state, user: action.user }
      break
    case actionTypes.LOAD_ERROR:
      newState = { ...state, error: action.error }
      break
    case actionTypes.LOGIN_USER_MONGO:
      newState = { ...state, userMongo: action.userMongo }
      break
    case actionTypes.LOAD_BARBER:
      newState = { ...state, barber: action.barber }
      break
    case actionTypes.LOAD_BARBER_NAME:
      newState = { ...state, barberName: action.barberName }
      break
    case actionTypes.LOAD_SERVICE_NAME:
      newState = { ...state, serviceName: action.serviceName }
      break
    case actionTypes.RESERVATION_SUCCES:
      newState = { ...state, reservationSucces: action.reservationSucces }
      break
    case actionTypes.LOAD_RESERVATIONS:
      newState = { ...state, reservations: action.reservations }
      break
    case actionTypes.LOAD_RESERVATION_USER_ID:
      newState = { ...state, reservationsUser: action.reservationsUser }
      break
    default:
      newState = state
      break
  }
  return newState
}
