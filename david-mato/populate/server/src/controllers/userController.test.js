const Users = require('../models/userModel');
const userController = require('./userController')(Users);

jest.mock('../models/userModel');

describe('userController', () => {
  afterEach(() => {
    Users.mockRestore();
  });

  describe('getMethod', () => {
    test('should call res.send when there is an error', () => {
      const res = {
        send: jest.fn(),
      };

      Users.find.mockReturnValueOnce({
        populate: jest.fn().mockReturnValueOnce({
          exec: jest.fn().mockImplementationOnce((callback) => {
            callback(true, {});
          }),
        }),
      });

      userController.getMethod(null, res);

      expect(res.send).toHaveBeenCalled();
    });

    test('should call res.json', () => {
      const res = {
        json: jest.fn(),
        setHeader: jest.fn(),
      };

      Users.find.mockReturnValueOnce({
        populate: jest.fn().mockReturnValueOnce({
          exec: jest.fn().mockImplementationOnce((callback) => {
            callback(false, {});
          }),
        }),
      });

      userController.getMethod(null, res);

      expect(res.json).toHaveBeenCalled();
    });
  });

  describe('postMethod', () => {
    test('should call res.send when there is an error', () => {
      const req = {
        body: {},
      };
      const res = {
        send: jest.fn(),
      };

      Users.create.mockImplementationOnce((query, callback) => {
        callback(true, {});
      });

      userController.postMethod(req, res);

      expect(res.send).toHaveBeenCalled();
    });

    test('should call res.json', () => {
      const req = {
        body: {},
      };
      const res = {
        json: jest.fn(),
      };

      Users.create.mockImplementationOnce((query, callback) => {
        callback(false, {});
      });

      userController.postMethod(req, res);

      expect(res.json).toHaveBeenCalled();
    });
  });
});
