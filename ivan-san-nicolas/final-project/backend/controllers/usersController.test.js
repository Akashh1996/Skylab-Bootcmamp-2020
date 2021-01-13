const User = require('../models/userModel');
const usersController = require('./usersController')(User);

describe('usersController getMethod', () => {
  test('should call res.json without error in getMethod', () => {
    const res = {
      json: jest.fn(),
    };

    const req = {
      query: {
        userName: '',
      },
    };

    User.find = jest.fn().mockReturnValue({
      populate: jest.fn().mockReturnValue({
        exec: jest.fn().mockImplementationOnce((callback) => {
          callback(false, {});
        }),
      }),
    });

    usersController.getMethod(req, res);

    expect(res.json).toHaveBeenCalled();
  });

  test('should call res.send when there is an error in getMethod', () => {
    const res = {
      send: jest.fn(),
    };
    const req = {
      query: {
        userName: '',
      },
    };

    User.find = jest.fn().mockReturnValue({
      populate: jest.fn().mockReturnValue({
        exec: jest.fn().mockImplementationOnce((callback) => {
          callback(true, {});
        }),
      }),
    });

    usersController.getMethod(req, res);

    expect(res.send).toHaveBeenCalled();
  });
});
