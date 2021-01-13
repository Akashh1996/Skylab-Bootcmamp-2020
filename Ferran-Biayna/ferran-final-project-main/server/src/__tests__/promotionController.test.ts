/* eslint-disable node/no-callback-literal */
export {}
const Promotions = require('../models/promotionsModel')
const PromotionController = require('../controllers/PromotionController')(Promotions)

jest.mock('../models/promotionsModel')

describe('PromotionController', () => {
  test('should call response json on getMethod', () => {
    const req = { query: { id: '1' } }
    const res = {
      json: jest.fn()
    }
    Promotions.findById = jest.fn().mockReturnValue({
      populate: jest.fn().mockReturnValue({
        exec: jest.fn().mockImplementationOnce((callback) => { callback(false, 'PromotionList') })
      })
    })

    PromotionController.getMethod(req, res)

    expect(res.json).toHaveBeenCalled()
  })

  test('should call response error on getMethod', () => {
    const req = { query: { id: '1' } }
    const res = {
      send: jest.fn()
    }
    Promotions.findById = jest.fn().mockReturnValue({
      populate: jest.fn().mockReturnValue({
        exec: jest.fn().mockImplementationOnce((callback) => { callback(true, 'errorFindPromotion') })
      })
    })

    PromotionController.getMethod(req, res)

    expect(res.send).toHaveBeenCalled()
  })

  test('should call response json on postMethod', () => {
    const req = { body: { newPromotion: 'Skylab' } }
    const res = {
      json: jest.fn()
    }
    Promotions.create = jest.fn().mockImplementationOnce((query, callback) => {
      callback(false, 'correctNewPromotion')
    })

    PromotionController.postMethod(req, res)

    expect(res.json).toHaveBeenCalled()
  })

  test('should call response error on postMethod', () => {
    const req = { body: { newPromotion: 'Skylab' } }
    const res = {
      send: jest.fn()
    }
    Promotions.create = jest.fn().mockImplementationOnce((query, callback) => {
      callback(true, 'errorNewPromotion')
    })

    PromotionController.postMethod(req, res)

    expect(res.send).toHaveBeenCalled()
  })
})
