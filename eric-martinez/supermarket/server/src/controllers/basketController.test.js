const BasketProduct = require('../models/basketModel');
const basketController = require('./basketController')(BasketProduct);

jest.mock('../models/basketModel');
describe('basketController', () => {
  test('should call response json on getMethod', () => {
    const res = {
      json: jest.fn(),
      send: jest.fn(),
    };

    BasketProduct.find.mockImplementationOnce((query, callback) => {
      callback(null, null);
    });

    basketController.getMethod(null, res);

    expect(res.json.mock.calls.length).toBe(1);
  });
  test('should call response json on getMethod', () => {
    const res = {
      json: jest.fn(),
      send: jest.fn(),
    };

    BasketProduct.find.mockImplementationOnce((query, callback) => {
      callback(true, null);
    });

    basketController.getMethod(null, res);

    expect(res.send.mock.calls.length).toBe(1);
  });
  test('should call response json on putMethod', () => {
    const res = {
      json: jest.fn(),
      send: jest.fn(),
    };
    const req = {
      body: {},
    };

    BasketProduct.create.mockImplementationOnce((query, callback) => {
      callback(null, null);
    });

    basketController.putMethod(req, res);

    expect(res.json.mock.calls.length).toBe(1);
  });
  test('should call response json on putMethod', () => {
    const res = {
      json: jest.fn(),
      send: jest.fn(),
    };
    const req = {
      body: {},
    };

    BasketProduct.create.mockImplementationOnce((query, callback) => {
      callback(true, null);
    });

    basketController.putMethod(req, res);

    expect(res.send.mock.calls.length).toBe(1);
  });
});
