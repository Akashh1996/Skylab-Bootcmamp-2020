const ProductModel = require('../models/productModel');
const groceryListControllerTest = require('./groceryListController')(ProductModel);

jest.mock('../models/productModel');

describe('groceryListController', () => {
  afterEach(() => {
      ProductModel.mockRestore();
    });

  describe('getMethod', () => {
    test('should call res.send when there is an error', () => {
      const res = {
        send: jest.fn(),
      };
      const req = {
        query: {
          product: null
        }
    }

      ProductModel.find.mockImplementationOnce((query, callback) => {
        callback(true, {});
      });
      groceryListControllerTest.getMethod(req, res);

      expect(res.send).toHaveBeenCalled();
    });

    test('should call res.json', () => {
      const res = {
        json: jest.fn(),
        setHeader: jest.fn(),
      };
      const req = {
          query: {
            product: null
          }
      }

      ProductModel.find.mockImplementationOnce((query, callback) => {
        callback(false, {});
      });
      groceryListControllerTest.getMethod(req, res);

      expect(res.json).toHaveBeenCalled();
    });
  });
});
