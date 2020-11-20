const adress = require('../models/adressModel');
const adressController = require('./adressController')(adress);

describe('puMethod', () => {
  test('should return res send on error', () => {
    const res = {
      send: jest.fn(),
    };
    adress.create = jest.fn().mockImplementationOnce((query, callback) => {
      callback(true, {});
    });

    adressController.putMethod({ query: {} }, res);
    expect(res.send).toHaveBeenCalled();
  });
  test('should return res send', () => {
    const res = {
      send: jest.fn(),
    };
    adress.create = jest.fn().mockImplementationOnce((query, callback) => {
      callback(false, {});
    });

    adressController.putMethod({ query: {} }, res);
    expect(res.send).toHaveBeenCalled();
  });
});
