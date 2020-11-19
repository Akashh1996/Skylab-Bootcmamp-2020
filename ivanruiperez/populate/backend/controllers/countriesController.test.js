const Country = require('../models/countriesModel');
const countriesController = require('./countriesController')(Country);

describe('countries controller', () => {
  describe('getMethod', () => {
    test('find throws error', () => {
      const res = { send: jest.fn() };

      Country.find = jest.fn().mockImplementation((query, callback) => {
        callback(true, {});
      });

      countriesController.getMethod({ user: null }, res);
      expect(res.send).toHaveBeenCalled();
    });
    test('find no throws error', () => {
      const res = { json: jest.fn() };

      Country.find = jest.fn().mockImplementation((query, callback) => {
        callback(false, {});
      });

      countriesController.getMethod({ user: null }, res);
      expect(res.json).toHaveBeenCalled();
    });
  });

  describe('putMethod', () => {
    test('create throws error', () => {
      const res = { send: jest.fn() };

      Country.create = jest.fn().mockImplementation((query, callback) => {
        callback(true, {});
      });

      countriesController.putMethod({ user: null }, res);
      expect(res.send).toHaveBeenCalled();
    });
    test('create no throws error', () => {
      const res = { json: jest.fn() };

      Country.create = jest.fn().mockImplementation((query, callback) => {
        callback(false, {});
      });

      countriesController.putMethod({ user: null }, res);
      expect(res.json).toHaveBeenCalled();
    });
  });
});
