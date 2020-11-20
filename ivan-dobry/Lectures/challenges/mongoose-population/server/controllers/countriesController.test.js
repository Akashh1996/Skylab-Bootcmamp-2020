const country = require('../models/countriesModel');
const countryController = require('./countriesController')(country);

describe('puMethod', () => {
  test('should return res send on error', () => {
    const res = {
      send: jest.fn(),
    };
    country.create = jest.fn().mockImplementationOnce((query, callback) => {
      callback(true, {});
    });

    countryController.putMethod({ query: {} }, res);
    expect(res.send).toHaveBeenCalled();
  });
  test('should return res send', () => {
    const res = {
      send: jest.fn(),
    };
    country.create = jest.fn().mockImplementationOnce((query, callback) => {
      callback(false, {});
    });

    countryController.putMethod({ query: {} }, res);
    expect(res.send).toHaveBeenCalled();
  });
});
