const addressController = require('./addressController');

describe('addressController', () => {
  describe('getMethod', () => {
    test('should call response send when find throws an error', () => {
      const res = {
        send: jest.fn(),
      };

      const address = {
        find: jest.fn().mockImplementationOnce((query, callback) => callback(true)),
      };

      addressController(address).getMethod(null, res);

      expect(res.send).toHaveBeenCalled();
    });

    test('should call response json when find works OK', () => {
      const res = {
        json: jest.fn(),
      };

      const address = {
        find: jest.fn().mockImplementationOnce((query, callback) => callback(false)),
      };

      addressController(address).getMethod(null, res);

      expect(res.json).toHaveBeenCalled();
    });
  });

  describe('putMethod', () => {
    test('should call response json when save throws an error', () => {
      const address = jest.fn().mockReturnValueOnce({
        save: jest.fn().mockImplementationOnce((callback) => callback(true)),
      });
      const res = {
        send: jest.fn(),
      };
      const req = {};

      addressController(address).putMethod(req, res);
      expect(res.send).toHaveBeenCalled();
    });

    test('should call response json when save works OK', () => {
      const address = jest.fn().mockReturnValueOnce({
        save: jest.fn().mockImplementationOnce((callback) => callback(false)),
      });
      const res = {
        json: jest.fn(),
      };
      const req = {};
      addressController(address).putMethod(req, res);
      expect(res.json).toHaveBeenCalled();
    });
  });
});
