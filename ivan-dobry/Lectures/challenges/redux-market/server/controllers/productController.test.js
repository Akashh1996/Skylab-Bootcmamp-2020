const markets = require('../models/productModel');
const productController = require('./productController')(markets);

describe('getMethod', () => {
  test('should return res send on error', () => {
    const res = {
      send: jest.fn(),
    };
    markets.findOne = jest.fn().mockImplementationOnce((query, callback) => {
      callback(true, {});
    });

    productController.getMethod({ query: { id: 12 } }, res);
    expect(res.send).toHaveBeenCalled();
  });
  test('should return res json', () => {
    const res = {
      json: jest.fn(),
    };
    markets.findOne = jest.fn().mockImplementationOnce((query, callback) => {
      callback(false, {});
    });

    productController.getMethod({ query: { id: 12 } }, res);
    expect(res.json).toHaveBeenCalled();
  });
});
