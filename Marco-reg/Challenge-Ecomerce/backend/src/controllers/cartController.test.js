const Cart = require('../models/basketModel');
const cartController = require('./cartController')(Cart);

describe('cartController', () => {
  test('Should call a response on getMethod', () => {
    const res = {
      send: jest.fn(),
    };
    Cart.find = jest.fn().mockImplementationOnce((query, callback) => {
      callback(true, {});
    });
    cartController.getMethod({ cart: null }, res);
    expect(res.send).toHaveBeenCalled();
  });
  it('should call response send on getMethod when find all ok', () => {
    const res = {
      json: jest.fn(),
    };
    Cart.find = jest.fn().mockImplementationOnce((query, callback) => {
      callback(false, {});
    });
    cartController.getMethod({ product: null }, res);

    expect(res.json).toHaveBeenCalled();
  });
  it('call the send method inside de putMethod', () => {
    const req = { body: { id: 12 } };

    const res = {
      send: jest.fn(),
    };
    Cart.create = jest.fn().mockImplementationOnce((query, callback) => {
      callback(true, {});
    });
    cartController.putMethod(req, res);
    expect(res.send).toHaveBeenCalled();
  });
  it('should call json if everything goes fine', () => {
    const req = { body: { id: 9 } };
    const res = {
      json: jest.fn(),
    };
    Cart.create = jest.fn().mockImplementationOnce((query, callback) => {
      callback(false, {});
    });
    cartController.putMethod(req, res);
    expect(res.json).toHaveBeenCalled();
  });
  it('should send error on deleteMethod', () => {
    const req = { body: { id: 9 } };
    const res = {
      send: jest.fn(),
    };
    Cart.findOneAndRemove = jest.fn().mockImplementationOnce((query, callback) => {
      callback(true, {});
    });
    cartController.deleteMethod(req, res);
    expect(res.send).toHaveBeenCalled();
  });
  it('should send error on deleteMethod', () => {
    const req = { body: { id: 9 } };
    const res = {
      json: jest.fn(),
    };
    Cart.findOneAndRemove = jest.fn().mockImplementationOnce(({}, callback) => {
      callback(false, {});
    });
    cartController.deleteMethod(req, res);
    expect(res.json).toHaveBeenCalled();
  });
});
