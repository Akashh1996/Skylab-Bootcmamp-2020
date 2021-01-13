const Game = require('../models/gameSchema')
const gamesController = require('../controller/gamesController')(Game)

jest.mock('../models/gameSchema')

describe('gamesController', () => {
  describe('getMethod', () => {
    test('should call res.json without error', () => {
      const res = {
        json: jest.fn()
      }

      Game.find = jest.fn().mockImplementationOnce((query, callback) => callback(null, true))

      gamesController.getMethod(null, res)

      expect(res.json).toHaveBeenCalled()
    })
    test('should call res.send due to an error', () => {
      const res = {
        send: jest.fn()
      }

      Game.find = jest.fn().mockImplementationOnce((query, callback) => callback(true, true))

      gamesController.getMethod(null, res)

      expect(res.send).toHaveBeenCalled()
    })
  })

  describe('patchMethod', () => {
    test('should call res.json without error', () => {
      const req = {
        params: { gameId: '12345' },
        body: {
          id: '12345'
        }
      }
      const res = {
        json: jest.fn()
      }

      Game.findByIdAndUpdate = jest.fn().mockImplementationOnce((query, body, options, callback) => callback(false, true))

      gamesController.patchMethod(req, res)

      expect(res.json).toHaveBeenCalled()
    })
    test('should call res.send due to an error', () => {
      const req = {
        params: { gameId: '12345' },
        body: {
          id: '12345'
        }
      }
      const res = {
        send: jest.fn()
      }

      Game.findByIdAndUpdate = jest.fn().mockImplementationOnce((query, body, options, callback) => callback(true, true))

      gamesController.patchMethod(req, res)

      expect(res.send).toHaveBeenCalled()
    })
  })
})
