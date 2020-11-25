const Product = require('../../models/productModel');
const Cart = require('../../models/cartModel');
const productController = require('../controllers/productController')(Product, Cart);

describe('productController', () => {
  test('should call response json on getMethod', () => {
    const req = {
      body: { _id: '1' },
    };
    const res = {
      json: jest.fn(),
    };

    Product.findOne = jest.fn().mockImplementationOnce((query, callback) => {
      callback(false, 'product');
    });

    productController.getMethod(req, res);

    expect(res.json).toHaveBeenCalled();
  });

  test('should call error on getMethod', () => {
    const req = {
      body: { _id: '1' },
    };
    const res = {
      send: jest.fn(),
    };

    Product.findOne = jest.fn().mockImplementationOnce((query, callback) => {
      callback(true, 'errorFindProduct');
    });

    productController.getMethod(req, res);

    expect(res.send).toHaveBeenCalled();
  });

  test('should call response json on postMethod', () => {
    const req = {
      body: { _id: '1', description: 'Skylab mola!' },
    };
    const res = {
      json: jest.fn(),
    };

    Cart.findOneAndUpdate = jest.fn().mockImplementationOnce((query, update, options, callback) => {
      callback(false, 'newProduct');
    });

    productController.postMethod(req, res);

    expect(res.json).toHaveBeenCalled();
  });

  test('should call error on postMethod', () => {
    const req = {
      body: { _id: '1', description: 'Skylab mola!' },
    };
    const res = {
      send: jest.fn(),
    };

    Cart.findOneAndUpdate = jest.fn().mockImplementationOnce((query, update, options, callback) => {
      callback(true, 'errorAddProduct');
    });

    productController.postMethod(req, res);

    expect(res.send).toHaveBeenCalled();
  });
});
