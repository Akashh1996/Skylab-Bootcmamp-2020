const Product = require('../models/productModel');
const productController = require('./productController')(Product);

describe('getMethod', () => {
  test('should call send when there is an error', () => {
    const res = { send: jest.fn() };

    Product.find = jest.fn().mockImplementationOnce((query, callback) => {
      callback(true, {});
    });

    productController.getMethod({}, res);
    expect(res.send).toHaveBeenCalled();
  });
  test('should call json when there is not an error', () => {
    const res = { json: jest.fn() };

    Product.find = jest.fn().mockImplementationOnce((query, callback) => {
      callback(false, {});
    });
    productController.getMethod({}, res);
    expect(res.json).toHaveBeenCalled();
  });
});

describe('deleteMethod', () => {
  test('should call send when there is an error', () => {
    const res = { send: jest.fn() };
    const req = {
      params: {
        productId: 2,
      },
    };
    Product.deleteOne = jest.fn().mockImplementationOnce((query, callback) => {
      callback(true, {});
    });
    productController.deleteMethod(req, res);
    expect(res.send).toHaveBeenCalled();
  });
  test('should call send when there is not an errror', () => {
    const res = { send: jest.fn() };
    const req = {
      params: {
        productId: 2,
      },
    };
    Product.deleteOne = jest.fn().mockImplementationOnce((query, callback) => {
      callback(false, {});
    });
    productController.deleteMethod(req, res);
    expect(res.send).toHaveBeenCalled();
  });
});

describe('allMiddleware', () => {
  test('should call next', () => {
    const req = {
      params: {
        productId: 3,
      },
    };
    const res = { send: jest.fn() };
    const next = jest.fn();
    productController.allMiddleware(req, res, next);
    expect(next).toHaveBeenCalled();
  });
});
