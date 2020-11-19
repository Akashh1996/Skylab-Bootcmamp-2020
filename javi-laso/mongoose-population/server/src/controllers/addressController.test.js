const addressController = require('./addressController');
const addressSchema = require('../models/addressSchema');

jest.mock('../models/addressSchema');

describe('addressController functions', () => {
  let res;
  let req;
  let controller;
  beforeEach(() => {
    controller = addressController(addressSchema);
    res = { send: jest.fn() };
    req = { body: null };
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  describe('getAddressesMethod', () => {
    beforeEach(() => {
      const error = true;

      addressSchema.find = jest.fn().mockReturnValue({
        populate: jest.fn().mockReturnValue({
          exec: jest.fn().mockImplementation((callback) => {
            callback(error, null);
          }),
        }),
      });
    });

    test('should call res.find', () => {
      controller.getAddressesMethod(null, res);

      expect(addressSchema.find).toHaveBeenCalled();
    });

    test('should call populate', () => {
      controller.getAddressesMethod(null, res);

      expect(addressSchema.find().populate).toHaveBeenCalled();
    });

    test('should call exec', () => {
      controller.getAddressesMethod(null, res);

      expect(addressSchema.find().populate().exec).toHaveBeenCalled();
    });

    test('should call res.send with the error', () => {
      controller.getAddressesMethod(null, res);

      expect(res.send).toHaveBeenCalledWith(true);
    });

    test('should call res.send with the data if there is no error', () => {
      const error = false;
      addressSchema.find = jest.fn().mockReturnValue({
        populate: jest.fn().mockReturnValue({
          exec: jest.fn().mockImplementation((callback) => {
            callback(error, 'data');
          }),
        }),
      });
      controller.getAddressesMethod(null, res);

      expect(res.send).toHaveBeenCalledWith('data');
    });
  });

  describe('postAddressesMethod', () => {
    beforeEach(() => {
      const error = true;

      addressSchema.create = jest.fn().mockImplementation((data, callback) => {
        callback(error, null);
      });
    });

    test('should call res.create', () => {
      controller.postAddressesMethod(req, res);

      expect(addressSchema.create).toHaveBeenCalled();
    });

    test('should call res.send with the error', () => {
      controller.postAddressesMethod(req, res);

      expect(res.send).toHaveBeenCalledWith(true);
    });

    test('should call res.send with the data if there is no error', () => {
      const error = false;

      addressSchema.create = jest.fn().mockImplementation((data, callback) => {
        callback(error, 'data');
      });
      controller.postAddressesMethod(req, res);

      expect(res.send).toHaveBeenCalledWith('data');
    });
  });
});
