const User = require('../models/userModel');
const userController = require('./userController')(User);

jest.mock('../models/userModel');
describe('test addressController', () => {
  describe('getMethod', () => {
    test('should send error on function call', () => {
      User.find = jest.fn().mockReturnValueOnce({
        populate: jest.fn(),
        exec: jest.fn().mockImplementationOnce((callback) => { callback(); }),
      });
      const res = {
        json: jest.fn(),
        send: jest.fn(),
      };
      userController.getMethod(null, res);
      expect(res.send).toHaveBeenCalled();
    });
    test('should send error on function call', () => {
      User.find = jest.fn().mockReturnValueOnce({
        populate: jest.fn(),
        exec: jest.fn().mockImplementationOnce((callback) => { callback(true); }),
      });
      const res = {
        json: jest.fn(),
        send: jest.fn(),
      };
      userController.getMethod(null, res);
      expect(res.send).toHaveBeenCalled();
    });
  });
  describe('test putMethod', () => {
    test('should call response json on putMethod', () => {
      const res = {
        json: jest.fn(),
      };
      const req = {
        body: {},
      };

      User.create.mockImplementationOnce((query, callback) => {
        callback(null, null);
      });

      userController.putMethod(req, res);

      expect(res.json.mock.calls.length).toBe(1);
    });
    test('should call response send on putMethod', () => {
      const res = {
        send: jest.fn(),
      };
      const req = {
        body: {},
      };

      User.create.mockImplementationOnce((query, callback) => {
        callback(true, null);
      });

      userController.putMethod(req, res);

      expect(res.send.mock.calls.length).toBe(1);
    });
  });
});
