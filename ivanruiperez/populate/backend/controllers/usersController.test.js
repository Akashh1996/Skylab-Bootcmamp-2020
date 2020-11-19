const User = require('../models/usersModel');
const usersController = require('./usersControllers')(User);

describe('users controller', () => {
  describe('getMethod', () => {
    test('find throws error', () => {
      const res = { send: jest.fn() };

      User.find = jest.fn().mockReturnValue({
        populate: jest.fn().mockReturnValue({
          exec: jest.fn().mockImplementation((callback) => {
            callback(true, {});
          }),
        }),

      });
      usersController.getMethod({ user: null }, res);
      expect(res.send).toHaveBeenCalled();
    });
    test('find no throws error', () => {
      const res = { json: jest.fn() };

      User.find = jest.fn().mockReturnValue({
        populate: jest.fn().mockReturnValue({
          exec: jest.fn().mockImplementation((callback) => {
            callback(false, {});
          }),
        }),

      });
      usersController.getMethod({ user: null }, res);
      expect(res.json).toHaveBeenCalled();
    });
  });
  describe('putMethod', () => {
    test('find throws error', () => {
      const res = { send: jest.fn() };

      User.create = jest.fn().mockReturnValue({
        populate: jest.fn().mockReturnValue({
          exec: jest.fn().mockImplementation((callback) => {
            callback(true, {});
          }),
        }),

      });
      usersController.putMethod({ user: null }, res);
      expect(res.send).toHaveBeenCalled();
    });
    test('find no throws error', () => {
      const res = { json: jest.fn() };

      User.create = jest.fn().mockReturnValue({
        populate: jest.fn().mockReturnValue({
          exec: jest.fn().mockImplementation((callback) => {
            callback(false, {});
          }),
        }),

      });
      usersController.putMethod({ user: null }, res);
      expect(res.json).toHaveBeenCalled();
    });
  });
});
