const Users = require('../models/userModel');
const usersController = require('./usersController')(Users);

describe('usersController getMethod', () => {
  test('should call res.json without error in getMethod', () => {
    const res = {
      json: jest.fn(),
    };

    Users.find = jest.fn().mockImplementationOnce((query, callback) => {
      callback(false, {});
    });

    usersController.getMethod(null, res);

    expect(res.json).toHaveBeenCalled();
  });

  test('should call res.send when there is an error in getMethod', () => {
    const res = {
      send: jest.fn(),
    };

    Users.find = jest.fn().mockImplementationOnce((query, callback) => {
      callback(true, {});
    });

    usersController.getMethod(null, res);

    expect(res.send).toHaveBeenCalled();
  });
});
