/* eslint-disable no-undef */
const Products = require('../models/productModel');
const productController = require('./productController')(Products);

describe('productControler', () => {
  test('should call json', () => {
    const req = {
      params: { productId: '1' },
    };

    const res = {
      json: jest.fn(),
    };
    Products.findOne = jest.fn().mockImplementationOnce((query, callback) => {
      callback(false, {});
    });

    productController.getMethod(req, res);

    expect(res.json).toHaveBeenCalled();
  });
  test('should call res.json with error', () => {
    const req = {
      params: { productId: '1' },
    };
    const res = {
      json: jest.fn(),
      send: jest.fn(),
    };
    Products.findOne = jest.fn().mockImplementationOnce((query, callback) => {
      callback(true, {});
    });

    productController.getMethod(req, res);

    expect(res.json).toHaveBeenCalled();
  });
});
