const Adresses = require('../models/addressModel');
const addressController = require('./addressController')(Adresses);

jest.mock('../models/addressModel');

describe('userController', () => {
  afterEach(() => {
    Adresses.mockRestore();
  });

  describe('getMethod', () => {
    test('should call res.send when there is an error', () => {
      const res = {
        send: jest.fn(),
        setHeader: jest.fn(),
      };

      Adresses.find.mockImplementationOnce((query, callback) => {
        callback(true, {});
      });

      addressController.getMethod(null, res);

      expect(res.send).toHaveBeenCalled();
    });

    test('should call res.json', () => {
      const res = {
        json: jest.fn(),
        setHeader: jest.fn(),
      };

      Adresses.find.mockImplementationOnce((query, callback) => {
        callback(false, {});
      });

      addressController.getMethod(null, res);

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

      Adresses.create.mockImplementationOnce((query, callback) => {
        callback(true, {});
      });

      addressController.postMethod(req, res);

      expect(res.send).toHaveBeenCalled();
    });

    test('should call res.json', () => {
      const req = {
        body: {},
      };
      const res = {
        json: jest.fn(),
      };

      Adresses.create.mockImplementationOnce((query, callback) => {
        callback(false, {});
      });

      addressController.postMethod(req, res);

      expect(res.json).toHaveBeenCalled();
    });
  });
});
