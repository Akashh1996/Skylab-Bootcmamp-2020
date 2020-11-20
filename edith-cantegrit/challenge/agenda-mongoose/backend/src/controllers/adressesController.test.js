const ListAddress = require('../models/adressesModel');
const adressesController = require('./adressesController')(ListAddress);

jest.mock('../models/adressesModel');
describe('adressesController', () => {
  test('should call response json on getMethod', () => {
    const res = {
      send: jest.fn(),
      json: jest.fn(),
    };

    ListAddress.find = jest.fn().mockReturnValue({
      populate: jest.fn().mockReturnValue({
        exec: jest.fn().mockImplementationOnce((callback) => {
          callback(null, true);
        }),
      }),
    });

    adressesController.getMethod(null, res);

    expect(res.json).toHaveBeenCalled();
  });

  test('should call response error on getMethod', () => {
    const res = {
      send: jest.fn(),
      json: jest.fn(),
    };

    ListAddress.find = jest.fn().mockReturnValue({
      populate: jest.fn().mockReturnValue({
        exec: jest.fn().mockImplementationOnce((callback) => {
          callback(true, null);
        }),
      }),
    });

    adressesController.getMethod(null, res);

    expect(res.send).toHaveBeenCalled();
  });

  test('should call response json on putMethod', () => {
    const res = {
      send: jest.fn(),
      json: jest.fn(),
    };
    const req = {
      body: {},
    };

    ListAddress.create.mockImplementationOnce((query, callback) => {
      callback(null, true);
    });

    adressesController.putMethod(req, res);

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

    ListAddress.create.mockImplementationOnce((query, callback) => {
      callback(true, null);
    });

    adressesController.putMethod(req, res);

    expect(res.send.mock.calls.length).toBe(1);
  });
});
