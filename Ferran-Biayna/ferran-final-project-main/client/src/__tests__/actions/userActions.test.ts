import axios from 'axios'
import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'
import { getUser, addAndGetUser, addFavorite, deleteFavorite } from '../../actions/userFunctions'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)
const store = mockStore()

jest.mock('axios')

describe('actionFunctions', () => {
  describe('getUser - promise resolve', () => {
    beforeEach(async () => {
      const sub = '1'
      axios.get.mockImplementationOnce(() => Promise.resolve({ data: ['Skylab mola!'] }))
      await store.dispatch(getUser(sub))
    })

    test('getUser - should call axios', () => {
      expect(axios.get).toHaveBeenCalled()
    })
    test('getUser - should call axios just once', () => {
      expect(axios.get.mock.calls[0].length).toBe(2)
    })
  })

  describe('getUser - promise rejected', () => {
    beforeEach(async () => {
      const sub = '1'
      axios.get.mockImplementationOnce(() => Promise.reject(Error))
      await store.dispatch(getUser(sub))
    })

    test('should call axios', () => {
      expect(axios.get).toHaveBeenCalled()
    })
    test('should call axios just once', () => {
      expect(axios.get.mock.calls[0].length).toBe(2)
    })
  })
  describe('addAndGetUser - promise resolve', () => {
    const user = {
      given_name: 'ferran',
      family_name: 'biayna',
      email: 'ferranbiayna',
      photo: '123.png',
      sub: '12345678'
    }
    beforeEach(async () => {
      axios.post.mockImplementationOnce(() => Promise.resolve({ data: ['Skylab mola!'] }))
      await store.dispatch(addAndGetUser(user))
    })

    test('addAndGetUser - should call axios', () => {
      expect(axios.post).toHaveBeenCalled()
    })
    test('addAndGetUser - should call axios just once', () => {
      expect(axios.post.mock.calls[0].length).toBe(2)
    })
  })

  describe('addAndGetUser - promise rejected', () => {
    beforeEach(async () => {
      const user = {
        given_name: 'ferran',
        family_name: 'biayna',
        email: 'ferranbiayna',
        photo: '123.png',
        sub: '12345678'
      }
      axios.post.mockImplementationOnce(() => Promise.reject(Error))
      await store.dispatch(addAndGetUser(user))
    })

    test('addAndGetUser - should call axios', () => {
      expect(axios.post).toHaveBeenCalled()
    })
    test('should call axios just once', () => {
      expect(axios.post.mock.calls[0].length).toBe(2)
    })
  })
  describe('addFavorite - promise resolve', () => {
    const establishmentId = 'Skylab'
    beforeEach(async () => {
      axios.put.mockImplementationOnce(() => Promise.resolve({ data: ['Skylab mola!'] }))
      await store.dispatch(addFavorite(establishmentId))
    })

    test('addFavorite - should call axios', () => {
      expect(axios.put).toHaveBeenCalled()
    })
    test('addFavorite - should call axios just once', () => {
      expect(axios.put.mock.calls[0].length).toBe(2)
    })
  })
  describe('addFavorite - promise rejected', () => {
    const establishmentId = 'Skylab'
    beforeEach(async () => {
      axios.put.mockImplementationOnce(() => Promise.reject(Error))
      await store.dispatch(addFavorite(establishmentId))
    })

    test('addFavorite - should call axios', () => {
      expect(axios.put).toHaveBeenCalled()
    })
    test('addFavorite - should call axios just once', () => {
      expect(axios.put.mock.calls[0].length).toBe(2)
    })
  })
  describe('deleteFavorite - promise resolve', () => {
    const establishmentId = 'Skylab'
    beforeEach(async () => {
      axios.delete.mockImplementationOnce(() => Promise.resolve({ data: ['Skylab mola!'] }))
      await store.dispatch(deleteFavorite(establishmentId))
    })

    test('addFavorite - should call axios', () => {
      expect(axios.delete).toHaveBeenCalled()
    })
    test('addFavorite - should call axios just once', () => {
      expect(axios.delete.mock.calls[0].length).toBe(2)
    })
  })
  describe('deleteFavorite - promise rejected', () => {
    const establishmentId = 'Skylab'
    beforeEach(async () => {
      axios.delete.mockImplementationOnce(() => Promise.reject(Error))
      await store.dispatch(deleteFavorite(establishmentId))
    })

    test('addFavorite - should call axios', () => {
      expect(axios.delete).toHaveBeenCalled()
    })
    test('addFavorite - should call axios just once', () => {
      expect(axios.delete.mock.calls[0].length).toBe(2)
    })
  })
})
