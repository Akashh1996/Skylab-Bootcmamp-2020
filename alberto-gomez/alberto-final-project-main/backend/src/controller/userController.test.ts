/* eslint-disable node/no-callback-literal */
const User = require('../models/userSchema')
const userController = require('../controller/userController')(User)

jest.mock('../models/userSchema')

describe('userController', () => {
  describe('postMethod', () => {
    test('should call res.json without error', () => {
      const req = { body: { id: '12345' } }
      const res = {
        json: jest.fn()
      }

      User.findOneAndUpdate = jest.fn().mockImplementationOnce((query, body, options, callback) => {
        callback(false, {})
      })

      userController.postMethod(req, res)
      expect(res.json).toHaveBeenCalled()
    })
    test('should call res.send without due to an error', () => {
      const req = { body: { id: '12345' } }
      const res = {
        send: jest.fn()
      }

      User.findOneAndUpdate = jest.fn().mockImplementationOnce((query, body, options, callback) => {
        callback(true, {})
      })

      userController.postMethod(req, res)
      expect(res.send).toHaveBeenCalled()
    })
  })
  describe('getMethod', () => {
    test('should call res.json without error', () => {
      const req = { params: { id: '12345' } }
      const res = {
        json: jest.fn()
      }

      User.findOne = jest.fn().mockReturnValueOnce({
        populate: jest.fn().mockReturnValueOnce({
          exec: jest.fn().mockImplementationOnce((callback) => {
            callback(false, {})
          })
        })
      })

      userController.getMethod(req, res)
      expect(res.json).toHaveBeenCalled()
    })
    test('should call res.send due to an error', () => {
      const req = { params: { id: '12345' } }
      const res = {
        send: jest.fn()
      }

      User.findOne = jest.fn().mockReturnValueOnce({
        populate: jest.fn().mockReturnValueOnce({
          exec: jest.fn().mockImplementationOnce((callback) => {
            callback(true, {})
          })
        })
      })

      userController.getMethod(req, res)
      expect(res.send).toHaveBeenCalled()
    })
  })
  describe('patchMethod', () => {
    test('should call res.json without error', () => {
      const req = { params: { id: '12345' }, body: { bio: 'Skylab mola!' } }
      const res = {
        json: jest.fn()
      }

      User.findByIdAndUpdate = jest.fn().mockReturnValueOnce({
        populate: jest.fn().mockReturnValueOnce({
          populate: jest.fn().mockReturnValueOnce({
            exec: jest.fn().mockImplementationOnce((callback) => {
              callback(false, {})
            })
          })
        })
      })

      userController.patchMethod(req, res)
      expect(res.json).toHaveBeenCalled()
    })
    test('should call res.json without error', () => {
      const req = { params: { id: '12345' }, body: { bio: 'Skylab mola!' } }
      const res = {
        send: jest.fn()
      }

      User.findByIdAndUpdate = jest.fn().mockReturnValueOnce({
        populate: jest.fn().mockReturnValueOnce({
          populate: jest.fn().mockReturnValueOnce({
            exec: jest.fn().mockImplementationOnce((callback) => {
              callback(true, {})
            })
          })
        })
      })

      userController.patchMethod(req, res)
      expect(res.send).toHaveBeenCalled()
    })
  })
  describe('addToFavourites', () => {
    test('should call res.json without error', async () => {
      const req = { params: { userId: '12345' }, body: { favourites: [{ name: 'Skylab mola!' }] } }
      const res = {
        status: jest.fn(),
        json: jest.fn()
      }

      User.findOneAndUpdate = jest.fn().mockReturnValueOnce({
        populate: jest.fn().mockReturnValueOnce({
          exec: jest.fn().mockImplementationOnce((callback) => {
            callback(false, {})
          })
        })
      })

      await userController.addToFavourites(req, res)
      expect(res.json).toHaveBeenCalled()
    })
    test('should call res.send due to an error', async () => {
      const req = { params: { userId: '12345' }, body: { favourites: [{ name: 'Skylab mola!' }] } }
      const res = {
        status: jest.fn(),
        send: jest.fn()
      }

      User.findOneAndUpdate = jest.fn().mockReturnValueOnce({
        populate: jest.fn().mockReturnValueOnce({
          exec: jest.fn().mockImplementationOnce((callback) => {
            callback(true, {})
          })
        })
      })

      await userController.addToFavourites(req, res)
      expect(res.send).toHaveBeenCalled()
    })
  })

  describe('deleteMethod', () => {
    test('should call res.json without error', async () => {
      const req = { params: { userId: '12345' }, body: { favourites: [{ name: 'Skylab mola!' }] } }
      const res = {
        json: jest.fn()
      }

      User.findByIdAndUpdate = jest.fn().mockReturnValueOnce({
        populate: jest.fn().mockReturnValueOnce({
          populate: jest.fn().mockReturnValueOnce({
            exec: jest.fn().mockImplementationOnce((callback) => {
              callback(false, {})
            })
          })
        })
      })

      await userController.deleteMethod(req, res)
      expect(res.json).toHaveBeenCalled()
    })

    test('should call res.send due to an error', async () => {
      const req = { params: { userId: '12345' }, body: { favourites: [{ name: 'Skylab mola!' }] } }
      const res = {
        send: jest.fn()
      }

      User.findByIdAndUpdate = jest.fn().mockReturnValueOnce({
        populate: jest.fn().mockReturnValueOnce({
          populate: jest.fn().mockReturnValueOnce({
            exec: jest.fn().mockImplementationOnce((callback) => {
              callback(true, {})
            })
          })
        })
      })

      await userController.deleteMethod(req, res)
      expect(res.send).toHaveBeenCalled()
    })
  })
})
