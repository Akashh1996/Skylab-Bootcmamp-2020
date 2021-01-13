const products = require('../models/productsModel');
const productsController = require('./productsController')(products);

describe('getMethod', () => {
  test('should return a res send when there is an error', () => {
    const res = {
      send: jest.fn(),
    };
    products.find = jest.fn().mockImplementationOnce((query, callback) => {
      callback(true, {});
    });
    productsController.getMethod({}, res);

    expect(res.send).toHaveBeenCalled();
  });

  test('should return a res send when there is not an error', () => {
    const res = {
      send: jest.fn(),
    };
    products.find = jest.fn().mockImplementationOnce((query, callback) => {
      callback(null, {});
    });
    productsController.getMethod({}, res);

    expect(res.send).toHaveBeenCalled();
  });
});

describe('putMethod', () => {
  test('should return a res send when there is an error', () => {
    const res = {
      send: jest.fn(),
    };
    products.create = jest.fn().mockImplementationOnce((query, callback) => {
      callback(true, {});
    });
    productsController.putMethod({}, res);

    expect(res.send).toHaveBeenCalled();
  });

  test('should return a res json when there is not an error', () => {
    const res = {
      json: jest.fn(),
    };
    products.create = jest.fn().mockImplementationOnce((query, callback) => {
      callback(null, {});
    });
    productsController.putMethod({}, res);

    expect(res.json).toHaveBeenCalled();
  });
});
