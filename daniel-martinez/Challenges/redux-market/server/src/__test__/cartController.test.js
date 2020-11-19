const Cart = require('../models/cartModel');
const cartController = require('../controllers/cartController')(Cart);

describe('cartController', () => {
  test('should send a json when finds the documents', () => {
    const res = {
      json: jest.fn(),
    };

    Cart.find = jest.fn().mockImplementationOnce((query, callb) => callb(false, {}));

    cartController.getMethod(null, res);

    expect(res.json).toHaveBeenCalled();
  });

  test('should send an error when not finds the documents', () => {
    const res = {
      send: jest.fn(),
    };

    Cart.find = jest.fn().mockImplementationOnce((query, callb) => callb(true, {}));

    cartController.getMethod(null, res);

    expect(res.send).toHaveBeenCalled();
  });

  test('should create a document with putMethod', () => {
    const res = {
      json: jest.fn(),
    };

    Cart.create = jest.fn().mockImplementationOnce((query, callb) => callb(false, {}));

    cartController.putMethod({ body: null }, res);

    expect(res.json).toHaveBeenCalled();
  });

  test('should send an error with putMethod', () => {
    const res = {
      send: jest.fn(),
    };

    Cart.create = jest.fn().mockImplementationOnce((query, callb) => callb(true, {}));

    cartController.putMethod({ body: null }, res);

    expect(res.send).toHaveBeenCalled();
  });

  test('should delete a document with deleteMethod', () => {
    const res = {
      json: jest.fn(),
    };

    Cart.find = jest.fn().mockImplementationOnce((query, callb) => callb(false, {}));

    Cart.findOneAndRemove = jest.fn().mockImplementationOnce((query, callb) => callb(false));

    cartController.deleteMethod({ body: null }, res);

    expect(res.json).toHaveBeenCalled();
  });

  test('should send an error with deleteMethod', () => {
    const res = {
      send: jest.fn(),
    };

    Cart.find = jest.fn().mockImplementationOnce((query, callb) => callb(false, {}));

    Cart.findOneAndRemove = jest.fn().mockImplementationOnce((query, callb) => callb(true));

    cartController.deleteMethod({ body: null }, res);

    expect(res.send).toHaveBeenCalled();
  });

  test('should send an error with deleteMethod finding the document', () => {
    const res = {
      send: jest.fn(),
    };

    Cart.find = jest.fn().mockImplementationOnce((query, callb) => callb(true, {}));

    Cart.findOneAndRemove = jest.fn().mockImplementationOnce((query, callb) => callb(false));

    cartController.deleteMethod({ body: null }, res);

    expect(res.send).toHaveBeenCalled();
  });
});
