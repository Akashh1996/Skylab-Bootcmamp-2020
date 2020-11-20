const ListUser = require('../models/usersModel');
const usersController = require('./usersController')(ListUser);

jest.mock('../models/usersModel');
describe('usersController', () => {
  test('should call response json on getMethod', () => {
    const res = {
      send: jest.fn(),
      json: jest.fn(),
    };

    ListUser.find = jest.fn().mockReturnValue({
      populate: jest.fn().mockReturnValue({
        exec: jest.fn().mockImplementationOnce((callback) => {
          callback(null, true);
        }),
      }),
    });

    usersController.getMethod(null, res);

    expect(res.json).toHaveBeenCalled();
  });

  test('should call response error on getMethod', () => {
    const res = {
      send: jest.fn(),
      json: jest.fn(),
    };

    ListUser.find = jest.fn().mockReturnValue({
      populate: jest.fn().mockReturnValue({
        exec: jest.fn().mockImplementationOnce((callback) => {
          callback(true, null);
        }),
      }),
    });

    usersController.getMethod(null, res);

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

    ListUser.create.mockImplementationOnce((query, callback) => {
      callback(null, true);
    });

    usersController.putMethod(req, res);

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

    ListUser.create.mockImplementationOnce((query, callback) => {
      callback(true, null);
    });

    usersController.putMethod(req, res);

    expect(res.send.mock.calls.length).toBe(1);
  });
});
