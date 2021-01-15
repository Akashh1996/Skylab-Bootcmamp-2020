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
    req = { body: { address: {} } };
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

    test('should call addressSchema.create', async () => {
      countrySchema.create = jest.fn().mockResolvedValueOnce({ });
      addressSchema.create = jest.fn();

      await controller.putUsersMethod(req, res);

      expect(addressSchema.create).toHaveBeenCalled();
    });

    test('should call userSchema.create', async () => {
      countrySchema.create = jest.fn().mockResolvedValueOnce({ });
      addressSchema.create = jest.fn().mockResolvedValueOnce({ });
      userSchema.create = jest.fn();

      await controller.putUsersMethod(req, res);

      expect(userSchema.create).toHaveBeenCalled();
    });

    test('should call res.send with the object that returns userSchema.create', async () => {
      const lastReturnValue = { id: 'fakeId' };
      countrySchema.create = jest.fn().mockResolvedValueOnce({ });
      addressSchema.create = jest.fn().mockResolvedValueOnce({ });
      userSchema.create = jest.fn().mockResolvedValueOnce(lastReturnValue);

      await controller.putUsersMethod(req, res);

      expect(res.send).toHaveBeenCalledWith(lastReturnValue);
    });

    test('should call res.send with the error if there is an error', async () => {
      const error = 'newError';
      countrySchema.create = jest.fn().mockRejectedValueOnce(error);

      await controller.putUsersMethod(req, res);

      expect(res.send).toHaveBeenCalledWith(error);
    });
  });
});
