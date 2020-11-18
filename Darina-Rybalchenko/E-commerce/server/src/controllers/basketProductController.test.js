/* eslint-disable no-undef */
const Basket = require('../models/productModel');
const Products = require('../models/productModel');
const basketProductController = require('./basketProductController')(Basket, Products);

describe('basketProductControler', () => {
  describe('postMethod', () => {
    test('should call json', () => {
      const req = {
        params: { productId: '1' },
      };
      const res = {
        json: jest.fn(),
      };
      Products.findOne = jest.fn().mockImplementationOnce((query, callback) => {
        callback(false, {});
      });
      Basket.create = jest.fn().mockImplementationOnce((query, callback) => {
        callback(false, {});
      });

      basketProductController.postMethod(req, res);

      expect(res.json).toHaveBeenCalled();
    });
    test('should call res.json with error in Product.find', () => {
      const req = {
        params: { productId: '1' },
      };
      const res = {
        json: jest.fn(),
        send: jest.fn(),
      };
      Products.findOne = jest.fn().mockImplementationOnce((query, callback) => {
        callback(true, null);
      });
      Basket.create = jest.fn().mockImplementationOnce((query, callback) => {
        callback(true, null);
      });

      basketProductController.postMethod(req, res);

      expect(res.send).toHaveBeenCalled();
    });
    test('should call res.json with error in Basket.create', () => {
      const req = {
        params: { productId: '1' },
      };
      const res = {
        json: jest.fn(),
        send: jest.fn(),
      };
      Products.findOne = jest.fn().mockImplementationOnce((query, callback) => {
        callback(false, {});
      });
      Basket.create = jest.fn().mockImplementationOnce((query, callback) => {
        callback(true, null);
      });

      basketProductController.postMethod(req, res);

      expect(res.send).toHaveBeenCalled();
    });
  });

  describe('deleteMethod', () => {
    test('should call json', () => {
      const req = {
        params: { productId: '1' },
      };
      const res = {
        json: jest.fn(),
      };
      Basket.findOneAndRemove = jest.fn().mockImplementationOnce((query, callback) => {
        callback(false, {});
      });

      basketProductController.deleteMethod(req, res);

      expect(res.json).toHaveBeenCalled();
    });
    test('should call res.json with error', () => {
      const req = {
        params: { productId: '1' },
      };
      const res = {
        json: jest.fn(),
        send: jest.fn(),
      };
      Basket.findOneAndRemove = jest.fn().mockImplementationOnce((query, callback) => {
        callback(true, {});
      });

      basketProductController.deleteMethod(req, res);

      expect(res.send).toHaveBeenCalled();
    });
  });
});
