import * as Location from 'expo-location'
import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'
import { getCity, getLocation, getPermissionsUbication } from '../../actions/locationFunctions'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)
const store = mockStore()

jest.mock('expo-location')

describe('locationFunctions', () => {
  describe('getCity - promise resolve', () => {
    beforeEach(async () => {
      const latitude = 1
      const longitude = 1
      Location.reverseGeocodeAsync.mockImplementationOnce(() => Promise.resolve({ data: ['Skylab mola!'] }))
      await store.dispatch(getCity(latitude, longitude))
    })

    test('should call Location.reverseGeocodeAsync', () => {
      expect(Location.reverseGeocodeAsync).toHaveBeenCalled()
    })
    test('should call Location.reverseGeocodeAsync just once', () => {
      expect(Location.reverseGeocodeAsync.mock.calls[0].length).toBe(1)
    })
  })

  describe('getCity - promise rejected', () => {
    beforeEach(async () => {
      Location.reverseGeocodeAsync.mockImplementationOnce(() => Promise.reject(Error))
      await store.dispatch(getCity())
    })

    test('should call Location.reverseGeocodeAsync', () => {
      expect(Location.reverseGeocodeAsync).toHaveBeenCalled()
    })
    test('should call Location.reverseGeocodeAsync just once', () => {
      expect(Location.reverseGeocodeAsync.mock.calls[0].length).toBe(1)
    })
  })
  describe('getLocation - promise resolve', () => {
    const latitude = 1
    const longitude = 1
    beforeEach(async () => {
      Location.getCurrentPositionAsync.mockImplementationOnce(() => Promise.resolve({ coords: { latitude, longitude } }))
      await store.dispatch(getLocation())
    })

    test('should call Location.getCurrentPositionAsync', () => {
      expect(Location.getCurrentPositionAsync).toHaveBeenCalled()
    })
    test('should call Location.getCurrentPositionAsync just once', () => {
      expect(Location.getCurrentPositionAsync.mock.calls[0].length).toBe(1)
    })
  })

  describe('getLocation - promise rejected', () => {
    beforeEach(async () => {
      Location.getCurrentPositionAsync.mockImplementationOnce(() => Promise.reject(Error))
      await store.dispatch(getLocation())
    })

    test('should call Location.getCurrentPositionAsync', () => {
      expect(Location.getCurrentPositionAsync).toHaveBeenCalled()
    })
    test('should call Location.getCurrentPositionAsync just once', () => {
      expect(Location.getCurrentPositionAsync.mock.calls[0].length).toBe(1)
    })
  })
  describe('getPermissionsUbication - promise resolve - permission OK', () => {
    const status = 'granted'
    beforeEach(async () => {
      Location.requestPermissionsAsync.mockImplementationOnce(() => Promise.resolve({ status }))
      await store.dispatch(getPermissionsUbication())
    })

    test('should call Location.requestPermissionsAsync', () => {
      expect(Location.requestPermissionsAsync).toHaveBeenCalled()
    })
  })

  describe('getPermissionsUbication - promise resolve - permission DENIED', () => {
    const status = 'Skylab'
    beforeEach(async () => {
      Location.requestPermissionsAsync.mockImplementationOnce(() => Promise.resolve({ status }))
      await store.dispatch(getPermissionsUbication())
    })

    test('should call Location.requestPermissionsAsync', () => {
      expect(Location.requestPermissionsAsync).toHaveBeenCalled()
    })
  })

  describe('getPermissionsUbication - promise rejected', () => {
    beforeEach(async () => {
      Location.requestPermissionsAsync.mockImplementationOnce(() => Promise.reject(Error))
      await store.dispatch(getPermissionsUbication())
    })

    test('should call Location.requestPermissionsAsync', () => {
      expect(Location.requestPermissionsAsync).toHaveBeenCalled()
    })
  })
})
