
import actionLocationTypes from '../actions/actionLocationTypes'
import locationReducer from '../reducers/locationReducer'

describe('locationReducer', () => {
  test('should return user -> actionLocationTypes = PERMISSIONS_NOT_ACCEPTED', () => {
    const testuser = 'Skylab'
    const actionLocation = {
      type: actionLocationTypes.PERMISSIONS_NOT_ACCEPTED,
      error: testuser
    }

    const state = locationReducer({}, actionLocation)

    expect(state).toEqual({ error: 'Skylab' })
  })

  test('should return error -> actionLocationTypes = PERMISSIONS_ERROR', () => {
    const testuser = 'error'
    const actionLocation = {
      type: actionLocationTypes.PERMISSIONS_ERROR,
      error: testuser
    }

    const state = locationReducer({}, actionLocation)

    expect(state).toEqual({ error: 'error' })
  })

  test('should return user -> actionLocationTypes = LOCATION_SUCCESS', () => {
    const latitude = 1
    const longitude = 2
    const actionLocation = {
      type: actionLocationTypes.LOCATION_SUCCESS,
      latitude: latitude,
      longitude: longitude
    }

    const state = locationReducer({}, actionLocation)

    expect(state).toEqual({ latitude: 1, longitude: 2 })
  })

  test('should return error -> actionLocationTypes = LOCATION_ERROR', () => {
    const testUser = 'error'
    const actionLocation = {
      type: actionLocationTypes.LOCATION_ERROR,
      error: testUser
    }

    const state = locationReducer({}, actionLocation)

    expect(state).toEqual({ error: 'error' })
  })

  test('should return city -> actionLocationTypes = CITY_SUCCESS', () => {
    const testUser = 'Barcelona'
    const actionLocation = {
      type: actionLocationTypes.CITY_SUCCESS,
      city: testUser
    }

    const state = locationReducer({}, actionLocation)

    expect(state).toEqual({ city: 'Barcelona' })
  })

  test('should return error -> actionLocationTypes = CITY_ERROR', () => {
    const testUser = 'error'
    const actionLocation = {
      type: actionLocationTypes.CITY_ERROR,
      error: testUser
    }

    const state = locationReducer({}, actionLocation)

    expect(state).toEqual({ error: 'error' })
  })

  test('should return the default state', () => {
    const state = locationReducer({}, { type: 'skylab' })

    expect(state).toEqual({})
  })
})
