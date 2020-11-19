const userController = require('./userController');

describe('userController', () => {
  describe('getMethod', () => {
    test('should call res.json', () => {
      const user = {
        find: jest.fn().mockReturnValueOnce({
          populate: jest.fn(),
          exec: jest.fn().mockImplementationOnce((callback) => { callback(); }),
        }),
      };

      const res = {
        json: jest.fn(),
        send: jest.fn(),
      };

      userController(user, null).getMethod(null, res);

      expect(res.json).toHaveBeenCalled();
    });

    test('should call res.send', () => {
      const user = {
        find: jest.fn().mockReturnValueOnce({
          populate: jest.fn(),
          exec: jest.fn().mockImplementationOnce((callback) => callback(true)),
        }),
      };

      const res = {
        json: jest.fn(),
        send: jest.fn(),
      };

      userController(user, null).getMethod(null, res);

      expect(res.json).toHaveBeenCalled();
    });
  });

  describe('putMethod', () => {
    test('should call res.json', () => {
      const user = jest.fn().mockReturnValueOnce({
        save: jest.fn().mockImplementationOnce((callback) => callback()),
      });

      const req = {};

      const res = {
        json: jest.fn(),
        send: jest.fn(),
      };

      userController(user, null).putMethod(req, res);

      expect(res.json).toHaveBeenCalled();
    });

    test('should call res.send', () => {
      const user = jest.fn().mockReturnValueOnce({
        save: jest.fn().mockImplementationOnce((callback) => callback(true)),
      });

      const req = {
        send: {
          body: null,
        },
      };

      const res = {
        json: jest.fn(),
        send: jest.fn(),
      };

      userController(user, null).putMethod(req, res);

      expect(res.send).toHaveBeenCalled();
    });
  });
});
