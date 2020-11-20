const Countries = require('../models/countryModel');
const countryController = require('./countryController')(Countries);

jest.mock('../models/countryModel');

describe('userController', () => {
  afterEach(() => {
    Countries.mockRestore();
  });

  describe('getMethod', () => {
    test('should call res.send when there is an error', () => {
      const res = {
        send: jest.fn(),
      };

      Countries.find.mockImplementationOnce((query, callback) => {
        callback(true, {});
      });

      countryController.getMethod(null, res);

      expect(res.send).toHaveBeenCalled();
    });

    test('should call res.json', () => {
      const res = {
        json: jest.fn(),
        setHeader: jest.fn(),
      };

      Countries.find.mockImplementationOnce((query, callback) => {
        callback(false, {});
      });

      countryController.getMethod(null, res);

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

      Countries.create.mockImplementationOnce((query, callback) => {
        callback(true, {});
      });

      countryController.postMethod(req, res);

      expect(res.send).toHaveBeenCalled();
    });

    test('should call res.json', () => {
      const req = {
        body: {},
      };
      const res = {
        json: jest.fn(),
      };

      Countries.create.mockImplementationOnce((query, callback) => {
        callback(false, {});
      });

      countryController.postMethod(req, res);

      expect(res.json).toHaveBeenCalled();
    });
  });
});
