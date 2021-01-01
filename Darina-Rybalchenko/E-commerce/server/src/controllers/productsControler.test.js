/* eslint-disable no-undef */
const Products = require('../models/productModel');
const productsController = require('./productsController')(Products);

describe('productsControler', () => {
  test('should call json', () => {
    const res = {
      json: jest.fn(),
    };
    Products.find = jest.fn().mockImplementationOnce((query, callback) => {
      callback(false, {});
    });

    productsController.getMethod(null, res);

    expect(res.json).toHaveBeenCalled();
  });
  test('should call res.json with error', () => {
    const res = {
      json: jest.fn(),
      send: jest.fn(),
    };
    Products.find = jest.fn().mockImplementationOnce((query, callback) => {
      callback(true, {});
    });

    productsController.getMethod(null, res);

    expect(res.json).toHaveBeenCalled();
  });
});
