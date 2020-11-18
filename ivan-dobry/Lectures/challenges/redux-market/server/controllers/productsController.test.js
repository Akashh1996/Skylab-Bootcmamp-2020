const markets = require('../models/productModel');
const productsController = require('./productsController')(markets);

describe('productsController', () => {
  test('should call get method', () => {
    const res = {
      json: jest.fn(),
    };

    markets.find = jest.fn().mockImplementationOnce((query, callback) => {
      callback(false, {});
    });

    productsController.getMethod({ product: null }, res);

    expect(res.json).toHaveBeenCalled();
  }); test('should throw error con call get method', () => {
    const res = {
      send: jest.fn(),
    };

    markets.find = jest.fn().mockImplementationOnce((query, callback) => {
      callback(true, {});
    });

    productsController.getMethod({ product: null }, res);

    expect(res.send).toHaveBeenCalled();
  });
});
