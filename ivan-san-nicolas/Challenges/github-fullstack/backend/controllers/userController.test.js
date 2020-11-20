const User = require('../models/userModel');
const userController = require('./userController')(User);

describe('userController getMethod', () => {
  test('should call res.json without error in getMethod', () => {
    const res = {
      json: jest.fn(),
    };
    User.find = jest.fn().mockImplementationOnce((query, callback) => {
      callback(false, {});
    });

    userController.getMethod(null, res);
  });

  test('should call res.send when there is an error in getMethod', () => {
    const res = {
      send: jest.fn(),
    };

    User.find = jest.fn().mockImplementationOnce((query, callback) => {
      callback(true, {});
    });

    userController.getMethod(null, res);
  });
});

describe('userController postMethod', () => {
  test('should call res.json without error in postMethod', () => {
    const req = {
      body: {
        name: 'string',
        profilePic: 'string',
        githubUrl: 'string',
      },
    };
    const res = {
      json: jest.fn(),
    };

    User.create = jest.fn().mockImplementationOnce((query, callback) => {
      callback(false, {});
    });

    userController.postMethod(req, res);
  });

  test('should call res.send when there is an erro in postMethod', () => {
    const req = {
      body: {
        name: 'string',
        profilePic: 'string',
        githubUrl: 'string',
      },
    };
    const res = {
      send: jest.fn(),
    };

    User.create = jest.fn().mockImplementationOnce((query, callback) => {
      callback(true, {});
    });

    userController.postMethod(req, res);
  });
});
