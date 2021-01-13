const User = require('../../models/userModel');
const usersController = require('../usersController')(User);

describe('test users controller', () => {
  test('find throws error', () => {
    const res = { send: jest.fn() };

    User.find = jest.fn().mockImplementationOnce((query, callback) => {
      callback(true, {});
    });
    usersController.getMethod({ user: null }, res);
    expect(res.send).toHaveBeenCalled();
  });
  test('find throws well', () => {
    const res = { json: jest.fn() };

    User.find = jest.fn().mockImplementationOnce((query, callback) => {
      callback(false, {});
    });
    usersController.getMethod({ user: null }, res);
    expect(res.json).toHaveBeenCalled();
  });
  test('find one and update throws error', () => {
    const res = { send: jest.fn() };
    const req = { body: { id: '1' } };

    User.findOneAndUpdate = jest.fn().mockImplementationOnce((query, body, option, callback) => {
      callback(true, {});
    });
    usersController.postMethod(req, res);
    expect(res.send).toHaveBeenCalled();
  });
  test('find one and update throws well', () => {
    const res = { json: jest.fn() };
    const req = { body: { id: '1' } };

    User.findOneAndUpdate = jest.fn().mockImplementationOnce((query, body, option, callback) => {
      callback(false, {});
    });
    usersController.postMethod(req, res);
    expect(res.json).toHaveBeenCalled();
  });
});
