const users = require('../models/usersModel');
const usersController = require('./usersController')(users);

describe('getMethod', () => {
  test('should return res send on error', () => {
    const res = {
      send: jest.fn(),
    };

    users.find = jest.fn().mockReturnValue({
      populate: jest.fn().mockReturnValue({
        exec: jest.fn().mockImplementationOnce((callback) => {
          callback(true, {});
        }),
      }),
    });
    usersController.getMethod({ query: { id: 12 } }, res);
    expect(res.send).toHaveBeenCalled();
  });

  test('should return res send on error', () => {
    const res = {
      json: jest.fn(),
    };

    users.find = jest.fn().mockReturnValue({
      populate: jest.fn().mockReturnValue({
        exec: jest.fn().mockImplementationOnce((callback) => {
          callback(false, {});
        }),
      }),
    });
    usersController.getMethod({ query: { id: 12 } }, res);
    expect(res.json).toHaveBeenCalled();
  });
});
