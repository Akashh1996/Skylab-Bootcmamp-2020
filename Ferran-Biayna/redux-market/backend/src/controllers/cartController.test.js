const Product = require('../../models/productModel');
const Cart = require('../../models/cartModel');
const cartController = require('./cartController')(Product, Cart);

describe('cartController', () => {
  test('should call response json on getMethod', () => {
    const res = {
      json: jest.fn(),
    };

    Cart.find = jest.fn().mockImplementationOnce((query, callback) => {
      callback(false, 'cart');
    });

    cartController.getMethod({ cart: null }, res);

    expect(res.json).toHaveBeenCalled();
  });

  test('should call error on getMethod', () => {
    const res = {
      send: jest.fn(),
    };

    Cart.find = jest.fn().mockImplementationOnce((query, callback) => {
      callback(true, 'errorFindCart');
    });

    cartController.getMethod({ cart: null }, res);

    expect(res.send).toHaveBeenCalled();
  });
  test('should call response json on deleteMethod', () => {
    const res = {
      json: jest.fn(),
    };

    Cart.findByIdAndRemove = jest.fn().mockImplementationOnce((query, callback) => {
      callback(false, 'Eliminado');
    });

    cartController.deleteMethod({ cart: null }, res);

    expect(res.json).toHaveBeenCalled();
  });

  test('should call error on deleteMethod', () => {
    const res = {
      send: jest.fn(),
    };

    Cart.find = jest.fn().mockImplementationOnce((query, callback) => {
      callback(true, 'errorAddProduct');
    });

    cartController.deleteMethod({ cart: null }, res);

    expect(res.send).toHaveBeenCalled();
  });
});
