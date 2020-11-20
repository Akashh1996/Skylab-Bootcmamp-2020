Address = require('../../models/addressModel');
const addressController = require('../addressController')(Address);

describe('addressController', () => {
  describe('getMethod', () => {
    test('shoould call json', () => {
      const res = {
        json: jest.fn(),
      };

      Address.find = jest.fn().mockImplementationOnce((query, callback) => {
        callback(false, {});
      });

      addressController.getMethod(null, res);
      expect(res.json).toHaveBeenCalled();
    });

    test('shoould call json with error', () => {
      const res = {
        json: jest.fn(),
        send: jest.fn(),
      };

      Address.find = jest.fn().mockImplementationOnce((query, callback) => {
        callback(true, null);
      });

      addressController.getMethod(null, res);
      expect(res.send).toHaveBeenCalled();
    });
  });
});
