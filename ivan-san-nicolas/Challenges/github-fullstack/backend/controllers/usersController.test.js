const User = require('../models/userModel');
const usersController = require('./usersController')(User);

describe('usersController getMethod', () => {
  test('should call res.json without error in getMethod', () => {
    const res = {
      json: jest.fn(),
    };

    User.find = jest.fn().mockImplementationOnce((query, callback) => {
      callback(false, {});
    });

    usersController.getMethod(null, res);

    expect(res.json).toHaveBeenCalled();
  });

  test('should call res.send when there is an error in getMethod', () => {
    const res = {
      send: jest.fn(),
    };

    User.find = jest.fn().mockImplementationOnce((query, callback) => {
      callback(true, {});
    });

    usersController.getMethod(null, res);

    expect(res.send).toHaveBeenCalled();
  });
});
