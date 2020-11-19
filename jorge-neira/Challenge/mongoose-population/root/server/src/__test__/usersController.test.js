const User = require('../models/usersModel');
const Country = require('../models/countriesModel');
const userController = require('../controllers/usersController')(User, Country);

describe('User Controllers', () => {
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

  describe('GET Methods', () => {
    test('should call res.json is no error occurs', () => {
      // arange
      User.find = jest.fn().mockReturnValueOnce({
        populate: jest.fn().mockReturnValueOnce({
          exec: jest.fn().mockImplementationOnce((callback) => callback()),
        }),
      });
      // act
      userController.getUsersMethod(req, res);
      // assert
      expect(res.json).toHaveBeenCalled();
    });
    test('should call res.json is no error occurs', () => {
      // arange
      User.find = jest.fn().mockReturnValueOnce({
        populate: jest.fn().mockReturnValueOnce({
          exec: jest.fn().mockImplementationOnce((callback) => callback(true)),
        }),
      });
      // act
      userController.getUsersMethod(req, res);
      // assert
      expect(res.send).toHaveBeenCalled();
    });
  });
});
