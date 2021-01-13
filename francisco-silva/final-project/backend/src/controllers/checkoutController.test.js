const checkout = require('../models/checkoutModel');
const checkoutController = require('./checkoutController')(checkout);

describe('getMethod', () => {
  test('should return a res send when there is an error', () => {
    const res = {
      send: jest.fn(),
    };
    checkout.find = jest.fn().mockImplementationOnce((query, callback) => {
      callback(true, {});
    });
    checkoutController.getMethod({}, res);

    expect(res.send).toHaveBeenCalled();
  });

  test('should return a res json when there is not an error', () => {
    const res = {
      json: jest.fn(),
    };
    checkout.find = jest.fn().mockImplementationOnce((query, callback) => {
      callback(null, {});
    });
    checkoutController.getMethod({}, res);

    expect(res.json).toHaveBeenCalled();
  });
});

describe('putMethod', () => {
  test('should return a res send when there is an error', () => {
    const res = {
      send: jest.fn(),
    };
    checkout.create = jest.fn().mockImplementationOnce((query, callback) => {
      callback(true, {});
    });
    checkoutController.putMethod({}, res);

    expect(res.send).toHaveBeenCalled();
  });

  test('should return a res json when there is not an error', () => {
    const res = {
      json: jest.fn(),
    };
    checkout.create = jest.fn().mockImplementationOnce((query, callback) => {
      callback(null, {});
    });
    checkoutController.putMethod({}, res);

    expect(res.json).toHaveBeenCalled();
  });
});
