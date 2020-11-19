const Country = require('../models/countriesModel');
const countriesController = require('../controllers/countriesController')(Country);

jest.mock('../models/countriesModel');

describe('Country Controllers', () => {
  let res;
  let req;
  beforeEach(() => {
    res = {
      send: jest.fn(),
      json: jest.fn(),
    };
    req = {
      body: {},
    };
  });
  describe('GET methods', () => {
    test('should return json request if no error occurs', () => {
      // arrange
      Country.find.mockImplementationOnce((query, callback) => {
        callback(null, null);
      });
      // act
      countriesController.getCountryMethod(req, res);
      // assert
      expect(res.json).toHaveBeenCalled();
      expect(res.json.mock.calls.length).toBe(1);
    });

    test('should return send request if error occurs', () => {
      // arrange
      Country.find.mockImplementationOnce((query, callback) => {
        callback(true, null);
      });
      // act
      countriesController.getCountryMethod(req, res);
      // assert
      expect(res.send).toHaveBeenCalled();
      expect(res.send.mock.calls.length).toBe(1);
    });
  });

  describe('PUT Methods', () => {
    test('should return json request if no error occurs', () => {
      // arrange
      Country.create.mockImplementationOnce((query, callback) => {
        callback(null, null);
      });
      // act
      countriesController.putCountryMethod(req, res);
      // assert
      expect(res.json).toHaveBeenCalled();
      expect(res.json.mock.calls.length).toBe(1);
    });
    test('should return send request if error occurs', () => {
      // arrange
      Country.create.mockImplementationOnce((query, callback) => {
        callback(true, null);
      });
      // act
      countriesController.putCountryMethod(req, res);
      // assert
      expect(res.send).toHaveBeenCalled();
      expect(res.send.mock.calls.length).toBe(1);
    });
  });
});
