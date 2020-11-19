const countryController = require('../countryController');

describe('countryController', () => {
  describe('getMethod', () => {
    test('shoould call json', () => {
      const country = {
        find: jest.fn().mockImplementationOnce((query, callback) => callback()),
      };

      const res = {
        json: jest.fn(),
      };

      countryController(country).getMethod(null, res);
      expect(res.json).toHaveBeenCalled();
    });

    test('shoould call json with error', () => {
      const country = {
        find: jest.fn().mockImplementationOnce((query, callback) => callback(true)),
      };

      const res = {
        send: jest.fn(),
        json: jest.fn(),
      };

      countryController(country).getMethod(null, res);
      expect(res.send).toHaveBeenCalled();
    });
  });

  describe('putMethod', () => {
    test('should call json', () => {
      const country = jest.fn().mockReturnValueOnce({
        save: jest.fn().mockImplementationOnce((callback) => callback()),
      });

      const res = {
        json: jest.fn(),
        send: jest.fn(),
      };

      const req = {};

      countryController(country).putMethod(req, res);
      expect(res.json).toHaveBeenCalled();
    });
  });
});
