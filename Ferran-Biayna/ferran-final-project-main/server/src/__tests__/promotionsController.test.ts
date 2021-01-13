/* eslint-disable node/no-callback-literal */
export {}
const Promotions = require('../models/promotionsModel')
const PromotionsController = require('../controllers/PromotionsController')(Promotions)

jest.mock('../models/promotionsModel')

describe('PromotionsController', () => {
  test('should call response json on getMethod', () => {
    const res = {
      json: jest.fn()
    }
    Promotions.find = jest.fn().mockReturnValue({
      populate: jest.fn().mockReturnValue({
        exec: jest.fn().mockImplementationOnce((callback) => { callback(false, 'promotionsList') })
      })
    })

    PromotionsController.getMethod({}, res)

    expect(res.json).toHaveBeenCalled()
  })

  test('should call response error on getMethod', () => {
    const res = {
      send: jest.fn()
    }
    Promotions.find = jest.fn().mockReturnValue({
      populate: jest.fn().mockReturnValue({
        exec: jest.fn().mockImplementationOnce((callback) => { callback(true, 'errorFindPromotions') })
      })
    })

    PromotionsController.getMethod({}, res)

    expect(res.send).toHaveBeenCalled()
  })
})
