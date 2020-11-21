const Country = require('../models/countriesModel');
const countryController = require('./countryController')(Country);

jest.mock('../models/countriesModel');
describe('test addressController', () => {
  describe('test getMethod', () => {
    test('should call response json on getMethod when find throws error', () => {
      const res = {
        json: jest.fn(),
      };
      Country.find.mockImplementationOnce((query, callback) => {
        callback(null, null);
      });

      countryController.getMethod(null, res);

      expect(res.json.mock.calls.length).toBe(1);
    });
    test('should call response send on getMethod when find throws error', () => {
      const res = {
        send: jest.fn(),
      };
      Country.find.mockImplementationOnce((query, callback) => {
        callback(true, null);
      });

      countryController.getMethod(null, res);

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

      Country.create.mockImplementationOnce((query, callback) => {
        callback(null, null);
      });

      countryController.putMethod(req, res);

      expect(res.json.mock.calls.length).toBe(1);
    });
    test('should call response send on putMethod', () => {
      const res = {
        send: jest.fn(),
      };
      const req = {
        body: {},
      };

      Country.create.mockImplementationOnce((query, callback) => {
        callback(true, null);
      });

      countryController.putMethod(req, res);

      expect(res.send.mock.calls.length).toBe(1);
    });
  });
});
