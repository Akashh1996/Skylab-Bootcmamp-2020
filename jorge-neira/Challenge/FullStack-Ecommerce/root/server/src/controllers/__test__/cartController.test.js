const Cart = require('../../models/cartModel');
const productDetailController = require('../cartController')(Cart);

describe('Test cart controllers', () => {
  test('Test GET Methods happy path', () => {
    // arrange
    const res = {
      send: jest.fn(),
      json: jest.fn(),
    };
    Cart.find = jest.fn().mockImplementationOnce((query, callback) => {
      callback();
    });
    // act
    productDetailController.getMethod(null, res);
    // assert
    expect(res.json).toHaveBeenCalled();
  });

  test('Test GET Methods not happy path', () => {
    // arrange
    const res = {
      send: jest.fn(),
      json: jest.fn(),
    };
    Cart.find = jest.fn().mockImplementationOnce((query, callback) => {
      callback(true);
    });
    // act
    productDetailController.getMethod(null, res);
    // assert
    expect(res.json).toHaveBeenCalled();
  });

  test('Test POST Methods happy path', () => {
    // arrange
    const res = {
      send: jest.fn(),
    };
    const req = {
      body: {},
    };

    Cart.create = jest.fn().mockImplementationOnce((query, callback) => {
      callback();
    });
    productDetailController.postMethod(req, res);

    expect(res.send).toHaveBeenCalled();
  });

  test('Test POST Methods not happy path', () => {
    // arrange
    const res = {
      send: jest.fn(),
    };
    const req = {
      body: {},
    };
    // act
    Cart.create = jest.fn().mockImplementationOnce((query, callback) => {
      callback(true);
    });
    productDetailController.postMethod(req, res);
    // assert
    expect(res.send).toHaveBeenCalled();
  });

  test('Test Delete Methods happy path', () => {
    // arrange
    const res = {
      send: jest.fn(),
    };
    const req = {
      body: { cartId: {} },
    };
    // act
    Cart.findOneAndDelete = jest.fn().mockImplementationOnce((query, callback) => {
      callback(true);
    });
    productDetailController.deleteMethod(req, res);
    // assert
    expect(res.send).toHaveBeenCalled();
  });
});
