const Country = require('../models/countryModel');
const countryController = require('./countryController')(Country);

describe('countryController', () => {
  test('should call response send on deleteMethod when there is an error', () => {
    const res = {
      send: jest.fn(),
    };
    const req = {
      params: {
        idItem: '1',
      },
    };
    Country.findByIdAndRemove = jest.fn().mockImplementationOnce((query, callback) => {
      callback(true);
    });
    countryController.deleteMethod(req, res);
    expect(res.send.mock.calls.length).toBe(1);
  });
  test('should call response send on deleteMethod when there is not an error', () => {
    const res = {
      send: jest.fn(),
    };
    const req = {
      params: {
        idItem: '1',
      },
    };
    Country.findByIdAndRemove = jest.fn().mockImplementationOnce((query, callback) => {
      callback(false);
    });
    countryController.deleteMethod(req, res);
    expect(res.send.mock.calls.length).toBe(1);
  });
  test('should call response send on postMethod when there is an error', () => {
    const res = {
      send: jest.fn(),
    };
    const req = {
      params: {
        id: '1',
      },
    };
    Country.findByIdAndUpdate = jest.fn().mockImplementationOnce((query, callback) => {
      callback(true);
    });
    countryController.postMethod(req, res);
    expect(res.send.mock.calls.length).toBe(1);
  });
  test('should call response send on postMethod when there is not an error', () => {
    const res = {
      send: jest.fn(),
    };
    const req = {
      params: {
        id: '1',
      },
    };
    Country.findByIdAndUpdate = jest.fn().mockImplementationOnce((query, callback) => {
      callback(false);
    });
    countryController.postMethod(req, res);
    expect(res.send.mock.calls.length).toBe(1);
  });

  it('call the response send on putMethod when there is an error', () => {
    const req = { body: { id: 12 } };
    const res = {
      send: jest.fn(),
    };
    Country.create = jest.fn().mockImplementationOnce((query, callback) => {
      callback(true, null);
    });
    countryController.putMethod(req, res);
    expect(res.send).toHaveBeenCalled();
  });
  it('call the response send on putMethod ', () => {
    const req = { body: { id: 12 } };
    const res = {
      json: jest.fn(),
    };
    Country.create = jest.fn().mockImplementationOnce((query, callback) => {
      callback(false, {});
    });
    countryController.putMethod(req, res);
    expect(res.json).toHaveBeenCalled();
  });
});
