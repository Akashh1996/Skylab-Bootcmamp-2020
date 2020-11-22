const User = require('../models/userModel');
const addressModel = require('../models/addressModel');
const countryModel = require('../models/countriesModel');
const userController = require('./userController')(User);

jest.mock('../models/userModel');
jest.mock('../models/addressModel');
jest.mock('../models/countriesModel');

describe('test userController', () => {
  describe('getMethod', () => {
    test('should send error on function call', () => {
      User.find = jest.fn().mockReturnValueOnce({
        populate: jest.fn(),
        exec: jest.fn().mockImplementationOnce((callback) => { callback(); }),
      });
      const res = {
        json: jest.fn(),
        send: jest.fn(),
      };
      userController.getMethod(null, res);
      expect(res.send).toHaveBeenCalled();
    });
    test('should send error on function call', () => {
      User.find = jest.fn().mockReturnValueOnce({
        populate: jest.fn(),
        exec: jest.fn().mockImplementationOnce((callback) => { callback(true); }),
      });
      const res = {
        json: jest.fn(),
        send: jest.fn(),
      };
      userController.getMethod(null, res);
      expect(res.send).toHaveBeenCalled();
    });
  });
  describe('test putMethod', () => {
    test('should call countryModel.create', () => {
      const req = { body: { address: {} } };

      countryModel.create = jest.fn();
      userController.putMethod(req);

      expect(countryModel.create).toHaveBeenCalled();
    });
    test('should call addressModel.create', async () => {
      const req = { body: { address: {} } };
      const res = { send: jest.fn() };

      countryModel.create = jest.fn().mockImplementationOnce(() => Promise.resolve({}));
      addressModel.create = jest.fn();

      await userController.putMethod(req, res);
      expect(addressModel.create).toHaveBeenCalled();
    });
  });
});
