const userController = require('./userController');

describe('userController', () => {
  describe('getMethod', () => {
    test('shoould call res.send', () => {
      const user = {
        find: jest.fn().mockImplementationOnce((query, callback) => callback()),
      };

      const res = {
        send: jest.fn(),
      };

      userController(user).getUsersMethod(null, res);
      expect(res.send).toHaveBeenCalled();
    });

    test('shoould call res.send with error', () => {
      const user = {
        find: jest.fn().mockImplementationOnce((query, callback) => callback(true)),
      };

      const res = {
        send: jest.fn(),
      };

      userController(user).getUsersMethod(null, res);
      expect(res.send).toHaveBeenCalled();
    });
  });
  describe('postMethod', () => {
    test('shoould call res.send', () => {
      const user = {
        create: jest.fn().mockImplementationOnce((query, callback) => callback()),
      };

      const res = {
        send: jest.fn(),
      };

      const req = { body: '2' };

      userController(user).postUserMethod(req, res);
      expect(res.send).toHaveBeenCalled();
    });

    test('shoould call res.send with error', () => {
      const user = {
        create: jest.fn().mockImplementationOnce((query, callback) => callback(true)),
      };

      const res = {
        send: jest.fn(),
      };

      const req = { body: '2' };

      userController(user).postUserMethod(req, res);
      expect(res.send).toHaveBeenCalled();
    });
  });
});
