const userController = require('./userController');

describe('useController', () => {
  describe('getMethod', () => {
    test('should call response send when find throws an error', () => {
      const user = {
        find: jest.fn().mockReturnValueOnce({
          populate: jest.fn().mockReturnValueOnce({

            exec: jest.fn().mockImplementationOnce((callback) => { callback(true); }),
          }),
        }),
      };

      const res = {
        send: jest.fn(),
      };

      userController(user, null).getMethod(null, res);

      expect(res.send).toHaveBeenCalled();
    });

    test('should call response send when find works OK', () => {
      const user = {
        find: jest.fn().mockReturnValueOnce({
          populate: jest.fn().mockReturnValueOnce({

            exec: jest.fn().mockImplementationOnce((callback) => { callback(false); }),
          }),
        }),
      };

      const res = {
        json: jest.fn(),
      };

      userController(user, null).getMethod(null, res);

      expect(res.json).toHaveBeenCalled();
    });
  });

  describe('putMethod', () => {
    test('should call response json when find throws an error', () => {
      const user = jest.fn().mockReturnValueOnce({
        save: jest.fn().mockImplementationOnce((callback) => callback(true)),
      });

      const res = {
        send: jest.fn(),
      };
      const req = {};

      userController(user).putMethod(req, res);

      expect(res.send).toHaveBeenCalled();
    });

    test('should call response json when find works OK', () => {
      const user = jest.fn().mockReturnValueOnce({
        save: jest.fn().mockImplementationOnce((callback) => callback(false)),
      });

      const res = {
        json: jest.fn(),
      };
      const req = {};

      userController(user).putMethod(req, res);

      expect(res.json).toHaveBeenCalled();
    });
  });
});
