import axios from 'axios'
import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'
import * as gameActions from './gameActions'
import actionTypes from './actionTypes'

const mockStore = configureMockStore([thunk])

jest.mock('axios')

describe('gameActions', () => {
  describe('requestGame function should be called with a promise...', () => {
    let testData = null
    let store = null

    beforeEach(() => {
      testData = { data: 'Skylab mola!' }
      store = mockStore()
    })

    afterEach(() => {
      jest.resetAllMocks()
    })

    test('resolved and return an object with property data', async () => {
      const gameId = '12345'

      axios.get = jest.fn().mockResolvedValueOnce(testData)
      await store.dispatch(gameActions.requestGame(gameId))
      expect(store.getActions()[0].type).toBe(actionTypes.LOAD_GAME)
    })
    test('rejected and return an error', async () => {
      const gameId = null

      axios.get = jest.fn().mockRejectedValueOnce(testData)
      await store.dispatch(gameActions.requestGame(gameId))
      expect(store.getActions()[0].type).toBe(actionTypes.LOAD_ERROR)
    })
  })

  describe('requestAllGames function should be called with a promise...', () => {
    let testData = null
    let store = null

    beforeEach(() => {
      testData = { data: [{ name: 'Skylab mola!' }] }
      store = mockStore()
    })

    afterEach(() => {
      jest.resetAllMocks()
    })

    test('resolved an return an object with property data', async () => {
      axios.get = jest.fn().mockResolvedValueOnce(testData)
      await store.dispatch(gameActions.requestAllGames())
      expect(store.getActions()[0].type).toBe(actionTypes.LOAD_ALL_GAMES)
    })

    test('resolved an return an object with property data', async () => {
      axios.get = jest.fn().mockRejectedValueOnce(testData)
      await store.dispatch(gameActions.requestAllGames())
      expect(store.getActions()[0].type).toBe(actionTypes.LOAD_ERROR)
    })
  })

  describe('requestAllGamesSuccess', () => {
    test('should order ranking from highest to lowest', () => {
      const gameCollection = [{ rank: 2 }, { rank: 1 }]

      const result = gameActions.requestAllGamesSuccess(gameCollection)
      expect(result.gameCollection).toEqual([{ rank: 1 }, { rank: 2 }])
    })
  })
  describe('addGame', () => {
    let testData = null
    let store = null
    const newObj = [{ id: '12345' }]

    beforeEach(() => {
      testData = { bio: 'Skylab mola!' }
      store = mockStore()
    })

    afterEach(() => {
      jest.resetAllMocks()
    })
    test('should call to axios.patch function without issues', async () => {
      const userObject = { favourites: [{ name: 'Skylab mol!' }] }
      const gameItem = { id: '12345' }

      axios.patch = jest.fn()

      await store.dispatch(gameActions.addGame(userObject, gameItem))
      expect(axios.patch).toHaveBeenCalled()
    })
    test('rejected and call loadError function', async () => {
      const userObject = {
        favourites: [
          { id: '1' },
          { id: '2' },
          { id: '3' },
          { id: '4' },
          { id: '5' }
        ]
      }
      const gameItem = { id: '12345' }

      axios.patch = jest.fn().mockRejectedValue({})

      await store.dispatch(gameActions.addGame(userObject, gameItem))

      expect(store.getActions()[0].type).toBe(actionTypes.LOAD_ERROR)
    })
  })
  describe('updateGame', () => {
    const testData = null
    let store = null
    const newObj = [{ id: '12345' }]

    beforeEach(() => {
      testdata = { bio: 'Skylab mola!' }
      store = mockStore()
    })

    afterEach(() => {
      jest.resetAllMocks()
    })
    test('should call axios.patch function without issues and status set to false', async () => {
      const gameItem = { id: '12345', status: false }

      await store.dispatch(gameActions.updateGame(gameItem))
      expect(axios.patch).toHaveBeenCalled()
    })
    test('should call axios.patch function with issues and status set to true', async () => {
      const gameItem = { id: '12345', status: true }

      await store.dispatch(gameActions.updateGame(gameItem))
      expect(axios.patch).toHaveBeenCalled()
    })
  })
})
