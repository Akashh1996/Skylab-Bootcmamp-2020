import axios from 'axios'
import thunk from 'redux-thunk'
import configureStore from 'redux-mock-store'
import * as appActions from './appActions'
import actionTypes from './actionTypes'
import signinWithGoogle from '../../firebase'

jest.mock('axios')
jest.mock('../../firebase')

const mockStore = configureStore([thunk])

describe('appActions', () => {
  let store = null
  let fakeData = { data: 'action' }
  beforeEach(() => {
    store = mockStore()
    fakeData = { data: 'action' }
  })
  afterEach(() => {
    jest.resetAllMocks()
  })

  test('load appointment service', async () => {
    axios.get = jest.fn().mockResolvedValueOnce(fakeData)
    await store.dispatch(appActions.appointmentService())
    expect(store.getActions()[0].type).toBe(actionTypes.LOAD_APPOINTMENT_SERVICE)
  })
  test('load appointment service error', async () => {
    axios.get = jest.fn().mockRejectedValueOnce(fakeData)
    await store.dispatch(appActions.loadError())
    expect(store.getActions()[0].type).toBe(actionTypes.LOAD_ERROR)
  })
  test('load appointment barber', async () => {
    axios.get = jest.fn().mockResolvedValueOnce(fakeData)
    await store.dispatch(appActions.appointmentBarber())
    expect(store.getActions()[0].type).toBe(actionTypes.LOAD_APPOINTMENT_BARBER)
  })
  test('load appointment barber error', async () => {
    axios.get = jest.fn().mockRejectedValueOnce(fakeData)
    await store.dispatch(appActions.loadError())
    expect(store.getActions()[0].type).toBe(actionTypes.LOAD_ERROR)
  })
  test('load login with Google succes', async () => {
    axios.get = jest.fn().mockResolvedValueOnce(fakeData)
    await store.dispatch(appActions.loginGoogleSucces())
    expect(store.getActions()[0].type).toBe(actionTypes.LOGIN_USER_GOOGLE)
  })
  test('load error with login Google', async () => {
    axios.get = jest.fn().mockRejectedValueOnce(fakeData)
    await store.dispatch(appActions.loadError())
    expect(store.getActions()[0].type).toBe(actionTypes.LOAD_ERROR)
  })
  test('load request user', async () => {
    axios.get = jest.fn().mockResolvedValueOnce(fakeData)
    await store.dispatch(appActions.requestUser())
    expect(store.getActions()[0].type).toBe(actionTypes.LOAD_USER)
  })
  test('load error request user', async () => {
    axios.get = jest.fn().mockRejectedValueOnce(fakeData)
    await store.dispatch(appActions.requestUser())
    expect(store.getActions()[0].type).toBe(actionTypes.LOAD_ERROR)
  })
  test('load request barber', async () => {
    axios.get = jest.fn().mockResolvedValueOnce(fakeData)
    await store.dispatch(appActions.requestBarber())
    expect(store.getActions()[0].type).toBe(actionTypes.LOAD_BARBER)
  })
  test('load error request barber', async () => {
    axios.get = jest.fn().mockRejectedValueOnce(fakeData)
    await store.dispatch(appActions.requestBarber())
    expect(store.getActions()[0].type).toBe(actionTypes.LOAD_ERROR)
  })

  test('load barber by name', async () => {
    axios.get = jest.fn().mockResolvedValueOnce(fakeData)
    await store.dispatch(appActions.loadBarberByName())
    expect(store.getActions()[0].type).toBe(actionTypes.LOAD_BARBER_NAME)
  })
  test('load error request barber by name', async () => {
    axios.get = jest.fn().mockRejectedValueOnce(fakeData)
    await store.dispatch(appActions.requestBarberByName())
    expect(store.getActions()[0].type).toBe(actionTypes.LOAD_ERROR)
  })

  test('load service by name', async () => {
    axios.get = jest.fn().mockResolvedValueOnce(fakeData)
    await store.dispatch(appActions.loadServiceByName())
    expect(store.getActions()[0].type).toBe(actionTypes.LOAD_SERVICE_NAME)
  })
  test('load error request service by name', async () => {
    axios.get = jest.fn().mockRejectedValueOnce(fakeData)
    await store.dispatch(appActions.requestServiceByName())
    expect(store.getActions()[0].type).toBe(actionTypes.LOAD_ERROR)
  })
  test('load request service', async () => {
    axios.get = jest.fn().mockResolvedValueOnce(fakeData)
    await store.dispatch(appActions.requestServices())
    expect(store.getActions()[0].type).toBe(actionTypes.LOAD_SERVICES)
  })
  test('load error request service', async () => {
    axios.get = jest.fn().mockRejectedValueOnce(fakeData)
    await store.dispatch(appActions.requestServices())
    expect(store.getActions()[0].type).toBe(actionTypes.LOAD_ERROR)
  })

  test('load error send user', async () => {
    axios.post = jest.fn().mockRejectedValueOnce(fakeData)
    await store.dispatch(appActions.sendUser())
    expect(store.getActions()[0].type).toBe(actionTypes.LOAD_ERROR)
  })

  test('loggin error with Google', async () => {
    axios.get = jest.fn().mockRejectedValueOnce(fakeData)
    await store.dispatch(appActions.loginGoogle())
    expect(store.getActions()[0].type).toBe(actionTypes.LOAD_ERROR)
  })

  test('loggin with Google', async () => {
    signinWithGoogle.mockResolvedValueOnce({ user: null })
    await store.dispatch(appActions.loginGoogle())
    expect(store.getActions()[0].type).toBe(actionTypes.LOGIN_USER_GOOGLE)
  })
  test('load appointment day', async () => {
    axios.get = jest.fn().mockRejectedValueOnce(fakeData)
    await store.dispatch(appActions.appointmentDay())
    expect(store.getActions()[0].type).toBe(actionTypes.LOAD_APPOINTMENT_DAY)
  })
  test('load appointment week day', async () => {
    axios.get = jest.fn().mockResolvedValueOnce(fakeData)
    await store.dispatch(appActions.appointmentWeekDay())
    expect(store.getActions()[0].type).toBe(actionTypes.LOAD_APPOINTMENT_WEEK_DAY)
  })
  test('load appointment hour', async () => {
    axios.get = jest.fn().mockResolvedValueOnce(fakeData)
    await store.dispatch(appActions.appointmentHour())
    expect(store.getActions()[0].type).toBe(actionTypes.LOAD_APPOINTMENT_HOUR)
  })
  test('load appointment month', async () => {
    axios.get = jest.fn().mockResolvedValueOnce(fakeData)
    await store.dispatch(appActions.appointmentMonth())
    expect(store.getActions()[0].type).toBe(actionTypes.LOAD_APPOINTMENT_MONTH)
  })
  test('load appointment year', async () => {
    axios.get = jest.fn().mockResolvedValueOnce(fakeData)
    await store.dispatch(appActions.appointmentYear())
    expect(store.getActions()[0].type).toBe(actionTypes.LOAD_APPOINTMENT_YEAR)
  })
  test('loginMongoSucces', async () => {
    axios.get = jest.fn().mockResolvedValueOnce(fakeData)
    await store.dispatch(appActions.loginMongoSucces())
    expect(store.getActions()[0].type).toBe(actionTypes.LOGIN_USER_MONGO)
  })
  test('loginMongoSucces', async () => {
    axios.post = jest.fn().mockResolvedValueOnce(fakeData)
    await store.dispatch(appActions.sendUser())
    expect(store.getActions()[0].type).toBe(actionTypes.LOGIN_USER_MONGO)
  })

  test('reservation send error', async () => {
    axios.post = jest.fn().mockRejectedValueOnce(fakeData)
    await store.dispatch(appActions.sendReservation())
    expect(store.getActions()[0].type).toBe(actionTypes.LOAD_ERROR)
  })
  test('load reservation succes', async () => {
    axios.get = jest.fn().mockResolvedValueOnce(fakeData)
    await store.dispatch(appActions.reservationSucces())
    expect(store.getActions()[0].type).toBe(actionTypes.RESERVATION_SUCCES)
  })

  test('load reservation', async () => {
    axios.post = jest.fn().mockResolvedValueOnce(fakeData)
    await store.dispatch(appActions.loadReservations())
    expect(store.getActions()[0].type).toBe(actionTypes.LOAD_RESERVATIONS)
  })
  test('reservation send error', async () => {
    axios.post = jest.fn().mockRejectedValueOnce(fakeData)
    await store.dispatch(appActions.requestReservations())
    expect(store.getActions()[0].type).toBe(actionTypes.LOAD_ERROR)
  })
  test('load reservation', async () => {
    axios.get = jest.fn().mockResolvedValueOnce(fakeData)
    await store.dispatch(appActions.loadReservations())
    expect(store.getActions()[0].type).toBe(actionTypes.LOAD_RESERVATIONS)
  })

  test('load reservation by user id', async () => {
    axios.post = jest.fn().mockResolvedValueOnce(fakeData)
    await store.dispatch(appActions.loadReservations())
    expect(store.getActions()[0].type).toBe(actionTypes.LOAD_RESERVATIONS)
  })
  test('reservation by user id send error', async () => {
    axios.post = jest.fn().mockRejectedValueOnce(fakeData)
    await store.dispatch(appActions.requestReservationByUserId())
    expect(store.getActions()[0].type).toBe(actionTypes.LOAD_ERROR)
  })
  test('load reservation by user id', async () => {
    axios.get = jest.fn().mockResolvedValueOnce(fakeData)
    await store.dispatch(appActions.loadReservationByUserId())
    expect(store.getActions()[0].type).toBe(actionTypes.LOAD_RESERVATION_USER_ID)
  })
  test('delete reservation by user id', async () => {
    axios.delete = jest.fn().mockResolvedValueOnce(fakeData)
    await store.dispatch(appActions.deleteReservationByUserId())
    expect(store.getActions()[0].type).toBe(actionTypes.LOAD_RESERVATION_USER_ID)
  })
  test('delete reservation by user id send error', async () => {
    axios.delete = jest.fn().mockRejectedValueOnce(fakeData)
    await store.dispatch(appActions.deleteReservationByUserId())
    expect(store.getActions()[0].type).toBe(actionTypes.LOAD_ERROR)
  })
})
