const Product = require('../../models/productModel');
const Cart = require('../../models/cartModel')
const productController = require('./productController')(Product, Cart);

describe('productController', () => {
  test('should call response json on getMethod', () => {
    const req = {
      params: { productId: '1' },
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
      params: { productId: '1' },
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
      body: { id: '1' },
    };
    const res = {
      json: jest.fn(),
    };

    Cart.create = jest.fn().mockImplementationOnce((query, callback) => {
      callback(false, 'newProduct');
    });

    productController.postMethod(req, res);

    expect(res.json).toHaveBeenCalled();
  });

  test('should call error on postMethod', () => {
    const req = {
      body: { id: '1' },
    };
    const res = {
      send: jest.fn(),
    };

    Cart.create = jest.fn().mockImplementationOnce((query, callback) => {
      callback(true, 'errorAddProduct');
    });

    productController.postMethod(req, res);

    expect(res.send).toHaveBeenCalled();
  });
});
