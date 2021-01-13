import reducer from './monclusReducer'
import actionTypes from '../actions/actionTypes'

describe('monclus reducer', () => {
  test('return initial state', () => {
    expect(reducer(undefined, {})).toEqual({})
  })
  test('should handle load user', () => {
    const user = { user: 'user' }
    expect(reducer({}, {
      type: actionTypes.LOAD_USER,
      user
    })).toEqual({ userDetail: user })
  })
  test('should handle load services', () => {
    const service = { service: 'service' }
    expect(reducer({}, {
      type: actionTypes.LOAD_SERVICES,
      service
    })).toEqual({ serviceList: service })
  })
  test('should handle appointment service', () => {
    const selectService = { selectService: 'selectService' }
    expect(reducer({}, {
      type: actionTypes.LOAD_APPOINTMENT_SERVICE,
      selectService
    })).toEqual({ selectService: selectService })
  })
  test('should handle appointment barber', () => {
    const selectBarber = { selectBarber: 'selectBarber' }
    expect(reducer({}, {
      type: actionTypes.LOAD_APPOINTMENT_BARBER,
      selectBarber
    })).toEqual({ selectBarber: selectBarber })
  })
  test('should handle appointment day', () => {
    const selectDay = { selectDay: 'selectDay' }
    expect(reducer({}, {
      type: actionTypes.LOAD_APPOINTMENT_DAY,
      selectDay
    })).toEqual({ selectDay: selectDay })
  })
  test('should handle appointment week day', () => {
    const selectWeekDay = { selectWeekDay: 'selectWeekDay' }
    expect(reducer({}, {
      type: actionTypes.LOAD_APPOINTMENT_WEEK_DAY,
      selectWeekDay
    })).toEqual({ selectWeekDay: selectWeekDay })
  })
  test('should handle appointment hour', () => {
    const selectHour = { selectHour: 'selectHour' }
    expect(reducer({}, {
      type: actionTypes.LOAD_APPOINTMENT_HOUR,
      selectHour
    })).toEqual({ selectHour: selectHour })
  })
  test('should handle appointment month', () => {
    const selectMonth = { selectMonth: 'selectMonth' }
    expect(reducer({}, {
      type: actionTypes.LOAD_APPOINTMENT_MONTH,
      selectMonth
    })).toEqual({ selectMonth: selectMonth })
  })
  test('should handle appointment year', () => {
    const selectYear = { selectYear: 'selectYear' }
    expect(reducer({}, {
      type: actionTypes.LOAD_APPOINTMENT_YEAR,
      selectYear
    })).toEqual({ selectYear: selectYear })
  })
  test('should handle login with Google', () => {
    const user = { user: 'user' }
    expect(reducer({}, {
      type: actionTypes.LOGIN_USER_GOOGLE,
      user
    })).toEqual({ user: user })
  })
  test('should handle login with Mongo', () => {
    const userMongo = { userMongo: 'userMongo' }
    expect(reducer({}, {
      type: actionTypes.LOGIN_USER_MONGO,
      userMongo
    })).toEqual({ userMongo: userMongo })
  })
  test('should handle load barber', () => {
    const barber = { barber: 'barber' }
    expect(reducer({}, {
      type: actionTypes.LOAD_BARBER,
      barber
    })).toEqual({ barber: barber })
  })
  test('should handle load barber by name', () => {
    const barberName = { barberName: 'barberName' }
    expect(reducer({}, {
      type: actionTypes.LOAD_BARBER_NAME,
      barberName
    })).toEqual({ barberName: barberName })
  })
  test('should handle load service by name', () => {
    const serviceName = { serviceName: 'serviceName' }
    expect(reducer({}, {
      type: actionTypes.LOAD_SERVICE_NAME,
      serviceName
    })).toEqual({ serviceName: serviceName })
  })
  test('should handle load reservations', () => {
    const reservations = { reservations: 'reservations' }
    expect(reducer({}, {
      type: actionTypes.LOAD_RESERVATIONS,
      reservations
    })).toEqual({ reservations: reservations })
  })
  test('should handle reservations succes', () => {
    const reservationSucces = { reservationSucces: 'reservationSucces' }
    expect(reducer({}, {
      type: actionTypes.RESERVATION_SUCCES,
      reservationSucces
    })).toEqual({ reservationSucces: reservationSucces })
  })
  test('should handle load user reservations', () => {
    const reservationsUser = { reservationsUser: 'reservationsUser' }
    expect(reducer({}, {
      type: actionTypes.LOAD_RESERVATION_USER_ID,
      reservationsUser
    })).toEqual({ reservationsUser: reservationsUser })
  })
  test('should handle errors', () => {
    const error = { user: 'error' }
    expect(reducer({}, {
      type: actionTypes.LOAD_ERROR,
      error
    })).toEqual({ error: error })
  })
})
