const Product = require('../../models/productModel');
const productsController = require('../controllers/productsController')(Product);

describe('productsController', () => {
  test('should call response json on getMethod', () => {
    const res = {
      json: jest.fn(),
    };

    Product.find = jest.fn().mockImplementationOnce((query, callback) => {
      callback(false, 'products');
    });

    productsController.getMethod({ products: null }, res);

    expect(res.json).toHaveBeenCalled();
  });

  test('should call error on getMethod', () => {
    const res = {
      send: jest.fn(),
    };

    Product.find = jest.fn().mockImplementationOnce((query, callback) => {
      callback(true, 'errorFindProducts');
    });

    productsController.getMethod({ products: null }, res);

    expect(res.send).toHaveBeenCalled();
  });
});
