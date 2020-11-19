const Product = require('../models/productModel');
const productsController = require('./productsController')(Product);

jest.mock('../models/productModel');

describe('heroesController', () => {
  test('should call response json on getMethod when find throws error', () => {
    const res = {
      send: jest.fn(),
      json: jest.fn(),
    };
    Product.find.mockImplementationOnce((query, callback) => {
      callback(null, null);
    });

    productsController.getMethod(null, res);

    expect(res.json.mock.calls.length).toBe(1);
  });
  test('should call response json on getMethod when find throws error', () => {
    const res = {
      send: jest.fn(),
      json: jest.fn(),
    };
    Product.find.mockImplementationOnce((query, callback) => {
      callback(true, null);
    });

    productsController.getMethod(null, res);

    expect(res.send.mock.calls.length).toBe(1);
  });
});
