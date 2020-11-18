const Product = require('../models/productModel');
const productsController = require('./productsController')(Product);

describe('productsController', () => {
  test('should call response send on getMethod when find throws error', () => {
    const res = {
      send: jest.fn(),
    };

    Product.find = jest.fn().mockImplementationOnce((query, callback) => {
      callback(true, 'myProducts');
    });
    productsController.getMethod({ product: null }, res);

    expect(res.send).toHaveBeenCalled();
  });

  test('should call response json on getMethod when find goes niceee', () => {
    const res = {
      send: jest.fn(),
    };

    Product.find = jest.fn().mockImplementationOnce((query, callback) => {
      callback(false, 'myProducts');
    });
    productsController.getMethod({ product: null }, res);

    expect(res.send).toHaveBeenCalled();
  });
});
