const Product = require('../../models/productModel');
const productController = require('./productController')(Product);

describe('productController', () => {
  test('should call response json on getMethod', () => {
    const req = {
      params: { productId: '1' },
    };
    const res = {
      json: jest.fn(),
    };

    Product.findOne = jest.fn().mockImplementationOnce((query, callback) => {
      callback(false, 'product');
    });

    productController.getMethod(req, res);

    expect(res.json).toHaveBeenCalled();
  });

  test('should call error on getMethod', () => {
    const req = {
      params: { productId: '1' },
    };
    const res = {
      send: jest.fn(),
    };

    Product.findOne = jest.fn().mockImplementationOnce((query, callback) => {
      callback(true, 'errorFindProduct');
    });

    productController.getMethod(req, res);

    expect(res.send).toHaveBeenCalled();
  });
});
