const Cart = require('../../models/cartModel');
const cartController = require('../controllers/cartController')(Cart);

describe('cartController', () => {
  test('should call response json on getMethod', () => {
    const res = {
      json: jest.fn(),
    };
    Cart.find = jest.fn().mockReturnValueOnce({});
    Cart.populate = jest.fn().mockReturnValueOnce('products');
    Cart.exec = jest.fn().mockImplementationOnce((query, callback) => {
      callback(false, 'cart');
    });

    cartController.getMethod({ productCart: null }, res);

    expect(res.json).toHaveBeenCalled();
  });

  test('should call error on getMethod', () => {
    const res = {
      send: jest.fn(),
    };
    Cart.find = jest.fn().mockImplementationOnce({});
    Cart.populate = jest.fn().mockImplementationOnce('products');
    Cart.exec = jest.fn().mockImplementationOnce((query, callback) => {
      callback(false, 'cart');
    });

    cartController.getMethod({ cart: null }, res);

    expect(res.send).toHaveBeenCalled();
  });
  test('should send ok response json on deleteMethod', () => {
    const res = {
      json: jest.fn(),
    };
    const req = { body: { _id: '1', description: 'Skylab' } };
    Cart.findOneAndUpdate = jest.fn().mockImplementationOnce((query, update, options, callback) => {
      callback(false, 'deletedProduct');
    });

    cartController.deleteMethod(req, res);

    expect(res.json).toHaveBeenCalled();
  });

  test('should send error on deleteMethod', () => {
    const res = {
      send: jest.fn(),
    };
    const req = { body: { _id: '1', description: 'Skylab' } };
    Cart.findOneAndUpdate = jest.fn().mockImplementationOnce((query, update, options, callback) => {
      callback(true, 'errorDeleteCart');
    });

    cartController.deleteMethod(req, res);

    expect(res.send).toHaveBeenCalled();
  });
});
