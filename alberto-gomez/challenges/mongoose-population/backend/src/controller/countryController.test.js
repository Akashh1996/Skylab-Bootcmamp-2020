const countryController = require('./countryController');

describe('countryController', () => {
  describe('getMethod', () => {
    test('should call response send when find throws an error', () => {
      const res = {
        send: jest.fn(),
      };

      const country = {
        find: jest.fn().mockImplementationOnce((query, callback) => callback(true)),
      };

      countryController(country).getMethod(null, res);

      expect(res.send).toHaveBeenCalled();
    });

    test('should call response json when find works OK', () => {
      const res = {
        json: jest.fn(),
      };

      const country = {
        find: jest.fn().mockImplementationOnce((query, callback) => callback(false)),
      };

      countryController(country).getMethod(null, res);

      expect(res.json).toHaveBeenCalled();
    });
  });

  describe('putMethod', () => {
    test('should call response json when save throws an error', () => {
      const country = jest.fn().mockReturnValueOnce({
        save: jest.fn().mockImplementationOnce((callback) => callback(true)),
      });
      const res = {
        send: jest.fn(),
      };
      const req = {};
      countryController(country).putMethod(req, res);
      expect(res.send).toHaveBeenCalled();
    });

    test('should call response json when save works OK', () => {
      const country = jest.fn().mockReturnValueOnce({
        save: jest.fn().mockImplementationOnce((callback) => callback(false)),
      });
      const res = {

        json: jest.fn(),
      };
      const req = {};
      countryController(country).putMethod(req, res);
      expect(res.json).toHaveBeenCalled();
    });
  });
});
