const User = require('../../models/userModel');
const userController = require('./userController')(User);

describe('getMethod', () => {
  test('should getMethod return user', () => {
    const req = {};
    const res = {
      send: jest.fn(),
      json: jest.fn(),
    };

    const user = {};

    User.find = jest.fn().mockImplementationOnce((query, callback) => {
      callback(false, user);
    });

    userController.getMethod(req, res);

    expect(res.json).toHaveBeenCalled();
  });
  test('should getMethod return user', () => {
    const req = {};
    const res = {
      send: jest.fn(),
      json: jest.fn(),
    };

    const user = {};

    User.find = jest.fn().mockImplementationOnce((query, callback) => {
      callback(true, user);
    });

    userController.getMethod(req, res);

    expect(res.send).toHaveBeenCalled();
  });
  test('should putMethod return user', () => {
    const res = {
      send: jest.fn(),
      json: jest.fn(),
    };

    User.findOneAndUpdate = jest.fn()
      .mockImplementationOnce((query, body, modify, callback) => {
        callback(false, {});
      });

    userController.postMethod({ body: { uid: '12345' } }, res);

    expect(res.json).toHaveBeenCalled();
  });
  test('should putMethod not found user', () => {
    const res = {
      send: jest.fn(),
      json: jest.fn(),
    };

    User.findOneAndUpdate = jest.fn()
      .mockImplementationOnce((query, body, modify, callback) => {
        callback(true, {});
      });

    userController.postMethod({ body: { uid: '12345' } }, res);

    expect(res.send).toHaveBeenCalled();
  });
});
