const Address = require('../models/addressModel');
const addressController = require('./addressController')(Address);

jest.mock('../models/addressModel');
describe('test addressController', () => {
  describe('test getMethod', () => {
    test('should call response json on getMethod when find throws error', () => {
      const res = {
        json: jest.fn(),
      };
      Address.find.mockImplementationOnce((query, callback) => {
        callback(null, null);
      });

      addressController.getMethod(null, res);

      expect(res.json.mock.calls.length).toBe(1);
    });
    test('should call response send on getMethod when find throws error', () => {
      const res = {
        send: jest.fn(),
      };
      Address.find.mockImplementationOnce((query, callback) => {
        callback(true, null);
      });

      addressController.getMethod(null, res);

      expect(res.send.mock.calls.length).toBe(1);
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

      Address.create.mockImplementationOnce((query, callback) => {
        callback(null, null);
      });

      addressController.putMethod(req, res);

      expect(res.json.mock.calls.length).toBe(1);
    });
    test('should call response send on putMethod', () => {
      const res = {
        send: jest.fn(),
      };
      const req = {
        body: {},
      };

      Address.create.mockImplementationOnce((query, callback) => {
        callback(true, null);
      });

      addressController.putMethod(req, res);

      expect(res.send.mock.calls.length).toBe(1);
    });
  });
});
