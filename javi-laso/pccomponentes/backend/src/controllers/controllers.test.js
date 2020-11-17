const itemSchema = require('../models/itemSchema');
const itemsMongoController = require('./itemsMongoController')(itemSchema);
const cartItemSchema = require('../models/cartItemSchema');
const shoppingCarController = require('./shoppingCartController')(cartItemSchema);

jest.mock('../models/itemSchema');
jest.mock('../models/cartItemSchema');

describe('itemsMongoController', () => {
  let res;
  let req;
  let result;
  describe('getMethod', () => {
    beforeEach(() => {
      res = { send: jest.fn(), json: jest.fn() };
      result = {};
    });

    test('should call res.send the error if there is an error', () => {
      itemSchema.find = jest.fn()
        .mockImplementationOnce((condition, callback) => {
          callback(true, result);
        });
      itemsMongoController.getMethod(null, res);

      expect(res.send).toHaveBeenCalledWith(true);
    });

    test('should call res.json with the result if there is no error', () => {
      itemSchema.find = jest.fn()
        .mockImplementationOnce((condition, callback) => {
          callback(false, result);
        });
      itemsMongoController.getMethod(null, res);

      expect(res.json).toHaveBeenCalledWith(result);
    });
  });

  describe('postMethod', () => {
    beforeEach(() => {
      req = { body: null };
      res = { send: jest.fn() };
      result = {};
    });

    test('should call res.send the error if there is an error', () => {
      itemSchema.create = jest.fn()
        .mockImplementationOnce((condition, callback) => {
          callback(true, result);
        });
      itemsMongoController.postMethod(req, res);

      expect(res.send).toHaveBeenCalledWith(true);
    });

    test('should call res.send the result if there is no error', () => {
      itemSchema.create = jest.fn()
        .mockImplementationOnce((condition, callback) => {
          callback(false, result);
        });
      itemsMongoController.postMethod(req, res);

      expect(res.send).toHaveBeenCalledWith(result);
    });
  });

  describe('deleteMethod', () => {
    beforeEach(() => {
      req = { body: { item: { 'product-type': null } } };
      res = { send: jest.fn() };
      result = {};
    });

    test('should call res.send the error if there is an error', () => {
      itemSchema.deleteMany = jest.fn()
        .mockImplementationOnce((condition, callback) => {
          callback(true, result);
        });
      itemsMongoController.deleteMethod(req, res);

      expect(res.send).toHaveBeenCalledWith(true);
    });

    test('should call res.send "deleted" if there is no error', () => {
      itemSchema.deleteMany = jest.fn()
        .mockImplementationOnce((condition, callback) => {
          callback(false, result);
        });
      itemsMongoController.deleteMethod(req, res);

      expect(res.send).toHaveBeenCalledWith('Deleted');
    });
  });

  describe('patchMethod', () => {
    beforeEach(() => {
      req = { body: { item: { id: null } } };
      res = { send: jest.fn() };
      result = {};
    });

    test('should call res.send the error if there is an error', () => {
      itemSchema.updateOne = jest.fn()
        .mockImplementationOnce((condition, change, callback) => {
          callback(true, result);
        });
      itemsMongoController.patchMethod(req, res);

      expect(res.send).toHaveBeenCalledWith(true);
    });

    test('should call res.send "updated" if there is no error', () => {
      itemSchema.updateOne = jest.fn()
        .mockImplementationOnce((condition, change, callback) => {
          callback(false, result);
        });
      itemsMongoController.patchMethod(req, res);

      expect(res.send).toHaveBeenCalledWith('Updated');
    });
  });

  describe('getByIdMethod', () => {
    beforeEach(() => {
      req = { params: { itemId: null } };
      res = { send: jest.fn(), json: jest.fn() };
      result = {};
    });

    test('should call res.send the error if there is an error', () => {
      itemSchema.findOne = jest.fn()
        .mockImplementationOnce((condition, callback) => {
          callback(true, result);
        });
      itemsMongoController.getByIdMethod(req, res);

      expect(res.send).toHaveBeenCalledWith(true);
    });

    test('should call res.json with the result if there is no error', () => {
      itemSchema.findOne = jest.fn()
        .mockImplementationOnce((condition, callback) => {
          callback(false, result);
        });
      itemsMongoController.getByIdMethod(req, res);

      expect(res.json).toHaveBeenCalledWith(result);
    });
  });
});

describe('shoppingCarController', () => {
  describe('getMethod', () => {
    let res;
    let result;
    beforeEach(() => {
      res = { send: jest.fn() };
      result = {};
    });

    test('should res.send the error if there is an error', () => {
      cartItemSchema.find = jest.fn()
        .mockImplementationOnce((condition, callback) => {
          callback(true, result);
        });
      shoppingCarController.getMethod(null, res);

      expect(res.send).toHaveBeenCalledWith(true);
    });

    test('should res.send the result if there is no error', () => {
      cartItemSchema.find = jest.fn()
        .mockImplementationOnce((condition, callback) => {
          callback(false, result);
        });
      shoppingCarController.getMethod(null, res);

      expect(res.send).toHaveBeenCalledWith(result);
    });
  });

  describe('putMethod', () => {
    let res;
    let req;
    let result;
    beforeEach(() => {
      res = { send: jest.fn() };
      req = { body: { item: null } };
      result = {};
    });

    test('should res.send the error if there is an error', () => {
      cartItemSchema.create = jest.fn()
        .mockImplementationOnce((condition, callback) => {
          callback(true, result);
        });
      shoppingCarController.putMethod(req, res);

      expect(res.send).toHaveBeenCalledWith(true);
    });

    test('should res.send the result if there is no error', () => {
      cartItemSchema.create = jest.fn()
        .mockImplementationOnce((condition, callback) => {
          callback(false, result);
        });
      shoppingCarController.putMethod(req, res);

      expect(res.send).toHaveBeenCalledWith(result);
    });
  });

  describe('deleteMethod', () => {
    let res;
    let req;
    let result;
    beforeEach(() => {
      res = { send: jest.fn() };
      req = { body: { item: { id: null } } };
      result = {};
    });

    test('should res.send the error if there is an error', () => {
      cartItemSchema.deleteOne = jest.fn()
        .mockImplementationOnce((condition, callback) => {
          callback(true, result);
        });
      shoppingCarController.deleteMethod(req, res);

      expect(res.send).toHaveBeenCalledWith(true);
    });

    test('should res.send the result if there is no error', () => {
      cartItemSchema.deleteOne = jest.fn()
        .mockImplementationOnce((condition, callback) => {
          callback(false, result);
        });
      shoppingCarController.deleteMethod(req, res);

      expect(res.send).toHaveBeenCalledWith(result);
    });
  });
});
