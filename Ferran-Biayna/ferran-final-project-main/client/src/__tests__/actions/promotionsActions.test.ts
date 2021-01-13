import axios from 'axios'
import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'
import { requestPromotions, requestPromotion, getEstablishment } from '../../actions/promotionsFunctions'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)
const store = mockStore()

jest.mock('axios')

describe('actionFunctions', () => {
  describe('requestPromotions - promise resolve', () => {
    beforeEach(async () => {
      axios.get.mockImplementationOnce(() => Promise.resolve({ data: ['Skylab mola!'] }))
      await store.dispatch(requestPromotions())
    })

    test('should call axios', () => {
      expect(axios.get).toHaveBeenCalled()
    })
    test('should call axios just once', () => {
      expect(axios.get.mock.calls[0].length).toBe(1)
    })
  })

  describe('requestPromotions - promise rejected', () => {
    beforeEach(async () => {
      axios.get.mockImplementationOnce(() => Promise.reject(Error))
      await store.dispatch(requestPromotions())
    })

    test('should call axios', () => {
      expect(axios.get).toHaveBeenCalled()
    })
    test('should call axios just once', () => {
      expect(axios.get.mock.calls[0].length).toBe(1)
    })
  })
  describe('requestPromotion - promise resolve', () => {
    const id = '1'
    beforeEach(async () => {
      axios.get.mockImplementationOnce(() => Promise.resolve({ data: ['Skylab mola!'] }))
      await store.dispatch(requestPromotion(id))
    })

    test('should call axios', () => {
      expect(axios.get).toHaveBeenCalled()
    })
    test('should call axios just once', () => {
      expect(axios.get.mock.calls[0].length).toBe(1)
    })
  })

  describe('requestPromotion - promise rejected', () => {
    beforeEach(async () => {
      const id = '1'
      axios.get.mockImplementationOnce(() => Promise.reject(Error))
      await store.dispatch(requestPromotion(id))
    })

    test('should call axios', () => {
      expect(axios.get).toHaveBeenCalled()
    })
    test('should call axios just once', () => {
      expect(axios.get.mock.calls[0].length).toBe(1)
    })
  })
  describe('getEstablishment - promise resolve', () => {
    const id = '1'
    beforeEach(async () => {
      axios.get.mockImplementationOnce(() => Promise.resolve({ data: ['Skylab mola!'] }))
      await store.dispatch(getEstablishment(id))
    })

    test('should call axios', () => {
      expect(axios.get).toHaveBeenCalled()
    })
    test('should call axios just once', () => {
      expect(axios.get.mock.calls[0].length).toBe(1)
    })
  })

  describe('getEstablishment - promise rejected', () => {
    beforeEach(async () => {
      const id = '1'
      axios.get.mockImplementationOnce(() => Promise.reject(Error))
      await store.dispatch(getEstablishment(id))
    })

    test('should call axios', () => {
      expect(axios.get).toHaveBeenCalled()
    })
    test('should call axios just once', () => {
      expect(axios.get.mock.calls[0].length).toBe(1)
    })
  })
})
