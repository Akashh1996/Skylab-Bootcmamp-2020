const ListCountries = require('../models/countriesModel');
const countriesController = require('./countriesController')(ListCountries);

jest.mock('../models/countriesModel');
describe('countriesController', () => {
  test('should call response json on getMethod', () => {
    const res = {
      send: jest.fn(),
      json: jest.fn(),
    };

    ListCountries.find.mockImplementationOnce((query, callback) => {
      callback(null, true);
    });

    countriesController.getMethod(null, res);

    expect(res.json.mock.calls.length).toBe(1);
  });

  test('should call response error on getMethod', () => {
    const res = {
      send: jest.fn(),
      json: jest.fn(),
    };

    ListCountries.find.mockImplementationOnce((query, callback) => {
      callback(true, null);
    });

    countriesController.getMethod(null, res);

    expect(res.send.mock.calls.length).toBe(1);
  });

  test('should call response json on putMethod', () => {
    const res = {
      send: jest.fn(),
      json: jest.fn(),
    };
    const req = {
      body: {},
    };

    ListCountries.create.mockImplementationOnce((query, callback) => {
      callback(null, true);
    });

    countriesController.putMethod(req, res);

    expect(res.json.mock.calls.length).toBe(1);
  });

  test('should call response error on putMethod', () => {
    const res = {
      send: jest.fn(),
      json: jest.fn(),
    };
    const req = {
      body: {},
    };

    ListCountries.create.mockImplementationOnce((query, callback) => {
      callback(true, null);
    });

    countriesController.putMethod(req, res);

    expect(res.send.mock.calls.length).toBe(1);
  });
});
