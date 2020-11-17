const Cart = require('../../models/cartModel');
const productDetailController = require('../cartController')(Cart);

jest.mock('../../models/cartModel');

describe('Test cart controllers', () => {
  test('Test GET Methods happy path', () => {
    // arrange
    const res = {
      json: jest.fn(),
    };
    Cart.find.mockImplementationOnce((query, callback) => {
      callback(null, null);
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
    };
    Cart.find.mockImplementationOnce((query, callback) => {
      callback(true, null);
    });
    // act
    productDetailController.getMethod(null, res);
    // assert
    expect(res.send.mock.calls.length).toBe(1);
  });

  test('Test POST Methods happy path', () => {
    // arrange
    const res = {
      json: jest.fn(),
    };
    const req = {
      body: {},
    };

    Cart.create.mockImplementationOnce((query, callback) => {
      callback(null, null);
    });
    productDetailController.postMethod(req, res);

    expect(res.json).toHaveBeenCalled();
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
    Cart.create.mockImplementationOnce((query, callback) => {
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
      body: { cartId: 1 },
    };
    // act
    Cart.deleteOne.mockImplementationOnce((query, callback) => {
      callback(true, null);
    });
    productDetailController.deleteMethod(req, res);
    // assert
    expect(res.send).toHaveBeenCalled();
  });
  test('Test Delete Methods happy path', () => {
    // arrange
    const res = {
      json: jest.fn(),
    };
    const req = {
      body: { cartId: 1 },
    };
    // act
    Cart.deleteOne.mockImplementationOnce((query, callback) => {
      callback(null, null);
    });
    productDetailController.deleteMethod(req, res);
    // assert
    expect(res.json.mock.calls.length).toBe(1);
  });
});
