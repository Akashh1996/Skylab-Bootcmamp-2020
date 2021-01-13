const User = require('../models/userModel');
const userController = require('./userController')(User);

describe('UserController', () => {
  let req;
  let res;

  beforeEach(() => {
    res = {
      send: jest.fn(),
      json: jest.fn(),
    };
  });

  describe('getMethod', () => {
    beforeEach(() => {
      req = {
        query: {
          userEmail: 'akashh.sapkota@gmail.com',
        },
      };
    });
    test('should send error when send function is called', () => {
      User.findOne = jest.fn().mockImplementationOnce((query, callback) => {
        callback(true, {});
      });

      userController.getMethod(req, res);

      expect(res.send).toHaveBeenCalled();
    });
    test('should send user when json function is called', () => {
      User.findOne = jest.fn().mockImplementationOnce((query, callback) => {
        callback(false, {});
      });

      userController.getMethod(req, res);

      expect(res.json).toHaveBeenCalled();
    });
  });

  describe('postMethod', () => {
    beforeEach(() => {
      req = {
        body: {
          email: 'abc@abc.com',
        },
      };
    });
    test('should send error when send function is called', () => {
      User.findOneAndUpdate = jest.fn().mockImplementationOnce((query, body, upsert, callback) => {
        callback(true, {});
      });

      userController.postMethod(req, res);

      expect(res.send).toHaveBeenCalled();
    });
  });
});
