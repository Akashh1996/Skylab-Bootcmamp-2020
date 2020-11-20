const userController = require('./userController');
const userSchema = require('../models/userSchema');
const countrySchema = require('../models/countrySchema');
const addressSchema = require('../models/addressSchema');

jest.mock('../models/userSchema');
jest.mock('../models/countrySchema');
jest.mock('../models/addressSchema');

describe('userController functions', () => {
  let res;
  let req;
  let controller;
  beforeEach(() => {
    controller = userController(userSchema, addressSchema, countrySchema);
    res = { send: jest.fn() };
    req = { body: { info: {} } };
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  describe('getUsersMethod', () => {
    beforeEach(() => {
      const error = true;

      userSchema.find = jest.fn().mockReturnValue({
        populate: jest.fn().mockReturnValue({
          exec: jest.fn().mockImplementation((callback) => {
            callback(error, null);
          }),
        }),
      });
    });

    test('should call find', () => {
      controller.getUsersMethod(null, res);

      expect(userSchema.find).toHaveBeenCalled();
    });

    test('should call populate', () => {
      controller.getUsersMethod(null, res);

      expect(userSchema.find().populate).toHaveBeenCalled();
    });

    test('should call exec', () => {
      controller.getUsersMethod(null, res);

      expect(userSchema.find().populate().exec).toHaveBeenCalled();
    });

    test('should call res.send with the error', () => {
      controller.getUsersMethod(null, res);

      expect(res.send).toHaveBeenCalledWith(true);
    });

    test('should call res.send with the data if there is no error', () => {
      const error = false;
      userSchema.find = jest.fn().mockReturnValue({
        populate: jest.fn().mockReturnValue({
          exec: jest.fn().mockImplementation((callback) => {
            callback(error, 'data');
          }),
        }),
      });
      controller.getUsersMethod(null, res);

      expect(res.send).toHaveBeenCalledWith('data');
    });
  });

  describe('putUsersMethod', () => {
    test('should call countrySchema.create', () => {
      countrySchema.create = jest.fn();

      controller.putUsersMethod(req);

      expect(countrySchema.create).toHaveBeenCalled();
    });

    test('should call addressSchema.create', () => {
      addressSchema.create = jest.fn();
      countrySchema.create = jest.fn().mockImplementationOnce((countryInfo, callback) => {
        callback(null, {});
      });

      controller.putUsersMethod(req);

      expect(addressSchema.create).toHaveBeenCalled();
    });

    test('should call addressSchema.create', () => {
      userSchema.create = jest.fn();
      addressSchema.create = jest.fn().mockImplementationOnce((addressInfo, callback) => {
        callback(null, {});
      });
      countrySchema.create = jest.fn().mockImplementationOnce((countryInfo, callback) => {
        callback(null, {});
      });

      controller.putUsersMethod(req);

      expect(userSchema.create).toHaveBeenCalled();
    });
  });
});
