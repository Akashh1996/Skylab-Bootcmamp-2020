const Countries = require('../models/countriesModel');
const countriesController = require('../controllers/CountriesController')(Countries);

describe('countriesController', () => {
  test('should call response json on getMethod', () => {
    const res = {
      json: jest.fn(),
    };

    Countries.find = jest.fn().mockImplementationOnce((query, callback) => {
      callback(false, 'CountriesList');
    });

    countriesController.getMethod({}, res);

    expect(res.json).toHaveBeenCalled();
  });

  test('should call error on getMethod', () => {
    const res = {
      send: jest.fn(),
    };

    Countries.find = jest.fn().mockImplementationOnce((query, callback) => {
      callback(true, 'errorFindCountries');
    });

    countriesController.getMethod({}, res);

    expect(res.send).toHaveBeenCalled();
  });

  test('should call response json on postMethod', () => {
    const req = {
      body: { description: 'Skylab mola!' },
    };
    const res = {
      json: jest.fn(),
    };

    Countries.create = jest.fn().mockImplementationOnce((query, callback) => {
      callback(false, 'newCountry');
    });

    countriesController.postMethod(req, res);

    expect(res.json).toHaveBeenCalled();
  });

  test('should call error on postMethod', () => {
    const req = {
      body: { description: 'Skylab mola!' },
    };
    const res = {
      send: jest.fn(),
    };

    Countries.create = jest.fn().mockImplementationOnce((query, callback) => {
      callback(true, 'errorAddCountry');
    });

    countriesController.postMethod(req, res);

    expect(res.send).toHaveBeenCalled();
  });
  test('should call response json on putMethod', () => {
    const res = {
      json: jest.fn(),
    };

    const req = { body: { _id: '1' } };

    Countries.findByIdAndUpdate = jest.fn().mockImplementationOnce((body, callback) => {
      callback(false, 'Deleted Successfully!');
    });

    countriesController.putMethod(req, res);

    expect(res.json).toHaveBeenCalled();
  });

  test('should call error on putMethod', () => {
    const res = {
      send: jest.fn(),
    };

    const req = { body: { _id: '1' } };

    Countries.findByIdAndUpdate = jest.fn().mockImplementationOnce((body, callback) => {
      callback(true, 'errorDeleteCountry');
    });

    countriesController.putMethod(req, res);

    expect(res.send).toHaveBeenCalled();
  });
  test('should call response json on deleteMethod', () => {
    const res = {
      json: jest.fn(),
    };

    const req = { body: { _id: '1' } };

    Countries.findByIdAndRemove = jest.fn().mockImplementationOnce((query, callback) => {
      callback(false, 'Deleted Successfully!');
    });

    countriesController.deleteMethod(req, res);

    expect(res.json).toHaveBeenCalled();
  });

  test('should call error on deleteMethod', () => {
    const res = {
      send: jest.fn(),
    };

    const req = { body: { _id: '1' } };

    Countries.findByIdAndRemove = jest.fn().mockImplementationOnce((query, callback) => {
      callback(true, 'errorDeleteCountry');
    });

    countriesController.deleteMethod(req, res);

    expect(res.send).toHaveBeenCalled();
  });
});
