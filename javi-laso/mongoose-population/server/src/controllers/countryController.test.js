const countryController = require('./countryController');
const countrySchema = require('../models/countrySchema');

jest.mock('../models/userSchema');
jest.mock('../models/addressSchema');
jest.mock('../models/countrySchema');

describe('userController functions', () => {
  let res;
  let req;
  let controller;
  beforeEach(() => {
    controller = countryController(countrySchema);
    res = { send: jest.fn() };
    req = { body: null };
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  describe('getCountriesMethod', () => {
    beforeEach(() => {
      const error = true;

      countrySchema.find = jest.fn().mockReturnValue({
        populate: jest.fn().mockReturnValue({
          exec: jest.fn().mockImplementation((callback) => {
            callback(error, null);
          }),
        }),
      });
    });

    test('should call res.find', () => {
      controller.getCountriesMethod(null, res);

      expect(countrySchema.find).toHaveBeenCalled();
    });

    test('should call populate', () => {
      controller.getCountriesMethod(null, res);

      expect(countrySchema.find().populate).toHaveBeenCalled();
    });

    test('should call exec', () => {
      controller.getCountriesMethod(null, res);

      expect(countrySchema.find().populate().exec).toHaveBeenCalled();
    });

    test('should call res.send with the error', () => {
      controller.getCountriesMethod(null, res);

      expect(res.send).toHaveBeenCalledWith(true);
    });

    test('should call res.send with the data if there is no error', () => {
      const error = false;
      countrySchema.find = jest.fn().mockReturnValue({
        populate: jest.fn().mockReturnValue({
          exec: jest.fn().mockImplementation((callback) => {
            callback(error, 'data');
          }),
        }),
      });
      controller.getCountriesMethod(null, res);

      expect(res.send).toHaveBeenCalledWith('data');
    });
  });

  describe('postCountriesMethod', () => {
    beforeEach(() => {
      const error = true;

      countrySchema.create = jest.fn().mockImplementation((data, callback) => {
        callback(error, null);
      });
    });

    test('should call res.create', () => {
      controller.postCountriesMethod(req, res);

      expect(countrySchema.create).toHaveBeenCalled();
    });

    test('should call res.send with the error', () => {
      controller.postCountriesMethod(req, res);

      expect(res.send).toHaveBeenCalledWith(true);
    });

    test('should call res.send with the data if there is no error', () => {
      const error = false;

      countrySchema.create = jest.fn().mockImplementation((data, callback) => {
        callback(error, 'data');
      });
      controller.postCountriesMethod(req, res);

      expect(res.send).toHaveBeenCalledWith('data');
    });
  });
});
