const Product = require('../models/productModel');
const productController = require('./productController')(Product);

jest.mock('../models/productModel');
describe('productController', () => {
  test('should call response json on getMethod', () => {
    const res = {
      json: jest.fn(),
      send: jest.fn(),
    };

    Product.findOne.mockImplementationOnce((query, callback) => {
      callback();
    });

    productController.getMethod({ id: 1 }, res);

    expect(res.json.mock.calls.length).toBe(1);
  });
  test('should call response send error on getMethod', () => {
    const res = {
      json: jest.fn(),
      send: jest.fn(),
    };

    Product.findOne.mockImplementationOnce((query, callback) => {
      callback(true, null);
    });

    productController.getMethod({ id: 1 }, res);

    expect(res.send.mock.calls.length).toBe(1);
  });
  test('should call next on allMiddleware', () => {
    const req = {
      product: null,
      params: {
        productId: null,
      },
    };

    const next = jest.fn();

    productController.allMiddleware(req, null, next);

    expect(next).toHaveBeenCalled();
  });
});
