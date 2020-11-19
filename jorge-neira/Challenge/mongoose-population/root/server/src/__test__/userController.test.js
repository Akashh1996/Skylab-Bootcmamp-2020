const Users = require('../models/usersModel');
const usersController = require('../controllers/countriesController')(Users);

jest.mock('../models/usersModel');

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
      Users.find.mockImplementationOnce((query, callback) => {
        callback(null, null);
      });
      // act
      usersController.getCountryMethod(req, res);
      // assert
      expect(res.json).toHaveBeenCalled();
      expect(res.json.mock.calls.length).toBe(1);
    });

    test('should return send request if error occurs', () => {
      // arrange
      Users.find.mockImplementationOnce((query, callback) => {
        callback(true, null);
      });
      // act
      usersController.getCountryMethod(req, res);
      // assert
      expect(res.send).toHaveBeenCalled();
      expect(res.send.mock.calls.length).toBe(1);
    });
  });

  describe('PUT Methods', () => {
    test('should return json request if no error occurs', () => {
      // arrange
      Users.create.mockImplementationOnce((query, callback) => {
        callback(null, null);
      });
      // act
      usersController.putCountryMethod(req, res);
      // assert
      expect(res.json).toHaveBeenCalled();
      expect(res.json.mock.calls.length).toBe(1);
    });
    test('should return send request if error occurs', () => {
      // arrange
      Users.create.mockImplementationOnce((query, callback) => {
        callback(true, null);
      });
      // act
      usersController.putCountryMethod(req, res);
      // assert
      expect(res.send).toHaveBeenCalled();
      expect(res.send.mock.calls.length).toBe(1);
    });
  });
});
