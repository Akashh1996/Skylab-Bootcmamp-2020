const Address = require('../models/addressesModel');
const adressesController = require('./addressesController')(Address);

describe('addresses controller', () => {
  describe('getMethod', () => {
    test('find throws error', () => {
      const res = { send: jest.fn() };

      Address.find = jest.fn().mockReturnValue({
        populate: jest.fn().mockReturnValue({
          exec: jest.fn().mockImplementation((callback) => {
            callback(true, {});
          }),
        }),

      });
      adressesController.getMethod({ user: null }, res);
      expect(res.send).toHaveBeenCalled();
    });
    test('find no throws error', () => {
      const res = { json: jest.fn() };

      Address.find = jest.fn().mockReturnValue({
        populate: jest.fn().mockReturnValue({
          exec: jest.fn().mockImplementation((callback) => {
            callback(false, {});
          }),
        }),

      });
      adressesController.getMethod({ user: null }, res);
      expect(res.json).toHaveBeenCalled();
    });
  });
  describe('putMethod', () => {
    test('find throws error', () => {
      const res = { send: jest.fn() };

      Address.create = jest.fn().mockReturnValue({
        populate: jest.fn().mockReturnValue({
          exec: jest.fn().mockImplementation((callback) => {
            callback(true, {});
          }),
        }),

      });
      adressesController.putMethod({ user: null }, res);
      expect(res.send).toHaveBeenCalled();
    });
    test('find no throws error', () => {
      const res = { json: jest.fn() };

      Address.create = jest.fn().mockReturnValue({
        populate: jest.fn().mockReturnValue({
          exec: jest.fn().mockImplementation((callback) => {
            callback(false, {});
          }),
        }),

      });
      adressesController.putMethod({ user: null }, res);
      expect(res.json).toHaveBeenCalled();
    });
  });
});
