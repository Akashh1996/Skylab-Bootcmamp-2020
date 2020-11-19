const Product = require('../models/productModel');
const productController = require('../controllers/productController')(Product);

describe('productController', () => {
  afterEach(() => {
    Product.mockRestore();
  });

  test('should call response json on getMethod', () => {
    const res = {
      send: jest.fn(),
      json: jest.fn(),
    };

    const req = {
      params: { productId: null },
    };

    Product.find = jest.fn().mockImplementationOnce((query, callback) => { callback(false, {}); });

    productController.getMethod(req, res);

    expect(res.json).toHaveBeenCalled();
  });

  test('should call response json on getMethod', () => {
    const res = {
      send: jest.fn(),
      json: jest.fn(),
    };

    const req = {
      params: { productId: null },
    };

    Product.find = jest.fn().mockImplementationOnce((query, callback) => { callback(true, {}); });

    productController.getMethod(req, res);

    expect(res.send).toHaveBeenCalled();
  });
});
