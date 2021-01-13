const mongodb = require('mongodb');
const cart = require('../models/cartModel');
const cartController = require('./cartController')(cart);

jest.mock('mongodb');

describe('getMethod', () => {
  test('should return a res send when there is an error', () => {
    const res = {
      send: jest.fn(),
    };
    cart.find = jest.fn().mockReturnValue({
      populate: jest.fn().mockReturnValue({
        exec: jest.fn().mockImplementationOnce((callback) => {
          callback(false, {});
        }),
      }),
    });
    cartController.getMethod({}, res);

    expect(res.send).toHaveBeenCalled();
  });

  test('should return a res send when there is not an error', () => {
    const res = {
      send: jest.fn(),
    };
    cart.find = jest.fn().mockReturnValue({
      populate: jest.fn().mockReturnValue({
        exec: jest.fn().mockImplementationOnce((callback) => {
          callback(true, {});
        }),
      }),
    });
    cartController.getMethod({}, res);

    expect(res.send).toHaveBeenCalled();
  });
});

describe('deleteAllMethod', () => {
  test('should return a res send when there is an error', () => {
    const res = {
      send: jest.fn(),
    };
    cart.remove = jest.fn().mockImplementationOnce((query, callback) => {
      callback(true, {});
    });
    cartController.deleteAllMethod({}, res);

    expect(res.send).toHaveBeenCalled();
  });

  test('should return a res send when there is an error', () => {
    const res = {
      send: jest.fn(),
    };
    cart.remove = jest.fn().mockImplementationOnce((query, callback) => {
      callback(false, {});
    });
    cartController.deleteAllMethod({}, res);

    expect(res.send).toHaveBeenCalled();
  });

  test('should return a res json when there is not an error', () => {
    const res = {
      send: jest.fn(),
    };
    const req = {
      body: { item: { _id: null } },
    };
    cart.deleteOne = jest.fn().mockImplementationOnce((query, callback) => {
      callback(true, {});
    });
    mongodb.ObjectId = jest.fn();
    cartController.deleteMethod(req, res);

    expect(res.send).toHaveBeenCalled();
  });

  test('should return a res json when there is not an error', () => {
    const res = {
      send: jest.fn(),
    };
    const req = {
      body: { item: { _id: null } },
    };
    cart.deleteOne = jest.fn().mockImplementationOnce((query, callback) => {
      callback(false, {});
    });
    mongodb.ObjectId = jest.fn();
    cartController.deleteMethod(req, res);

    expect(res.send).toHaveBeenCalled();
  });
});

test('should return error when addOrDelete is add', () => {
  const req = {
    body: {
      item: { _id: 12 },
      quantity: 2,
      addOrDelete: 'add',
    },
  };
  const res = {
    send: jest.fn(),
  };
  cart.findOneAndUpdate = jest.fn().mockReturnValue({
    populate: jest.fn().mockReturnValue({
      exec: jest.fn().mockImplementationOnce((callback) => {
        callback(false, {});
      }),
    }),
  });
  cartController.putMethod(req, res);

  expect(res.send).toHaveBeenCalled();
});

test('should return error when addOrDelete is add', () => {
  const req = {
    body: {
      item: { _id: 12 },
      quantity: 2,
      addOrDelete: null,
    },
  };
  const res = {
    send: jest.fn(),
  };
  cart.findOneAndUpdate = jest.fn().mockReturnValue({
    populate: jest.fn().mockReturnValue({
      exec: jest.fn().mockImplementationOnce((callback) => {
        callback(false, {});
      }),
    }),
  });
  cartController.putMethod(req, res);

  expect(res.send).toHaveBeenCalled();
});

test('should return error when addOrDelete is add', () => {
  const req = {
    body: {
      item: { _id: 12 },
      quantity: 2,
      addOrDelete: null,
    },
  };
  const res = {
    send: jest.fn(),
  };
  cart.findOneAndUpdate = jest.fn().mockReturnValue({
    populate: jest.fn().mockReturnValue({
      exec: jest.fn().mockImplementationOnce((callback) => {
        callback(true, {});
      }),
    }),
  });
  cartController.putMethod(req, res);

  expect(res.send).toHaveBeenCalled();
});
