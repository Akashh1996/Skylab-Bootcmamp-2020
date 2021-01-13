const product = require('../models/productsModel');
const productController = require('./productController')(product);

describe('getMethod', () => {
  test('should return a res json when there is not an error', () => {
    const res = {
      json: jest.fn(),

    };
    const req = {
      params: {
        productId: 's',
      },
    };
    product.findById = jest.fn().mockImplementationOnce((productId, callback) => {
      callback(null, {});
    });

    productController.getMethod(req, res);

    expect(res.json).toHaveBeenCalled();
  });

  test('should return a res send when there is an error', () => {
    const res = {
      send: jest.fn(),
    };
    const req = {
      params: {
        productId: 's',
      },
    };
    product.findById = jest.fn().mockImplementationOnce((query, callback) => {
      callback(true, null);
    });
    productController.getMethod(req, res);

    expect(res.send).toHaveBeenCalled();
  });
});

describe('deleteMethod', () => {
  test('should return a res send when there is an error', () => {
    const res = {
      send: jest.fn(),
    };
    const req = {
      params: {
        productId: 's',
      },
    };
    product.findByIdAndRemove = jest.fn().mockImplementationOnce((productId, callback) => {
      callback(true, null);
    });
    productController.deleteMethod(req, res);

    expect(res.send).toHaveBeenCalled();
  });

  test('should return a res send when there is not an error', () => {
    const res = {
      send: jest.fn(),
    };
    const req = {
      params: {
        productId: 's',
      },
    };
    product.findByIdAndRemove = jest.fn().mockImplementationOnce((productId, callback) => {
      callback(null, true);
    });

    productController.deleteMethod(req, res);

    expect(res.send).toHaveBeenCalled();
  });
});

describe('postMethod', () => {
  test('should return a res send when there is an error', () => {
    const res = {
      send: jest.fn(),
    };
    const req = {
      params: {
        productId: 's',
      },
    };
    product.findByIdAndUpdate = jest.fn().mockImplementationOnce((productId, callback) => {
      callback(true, null);
    });
    productController.postMethod(req, res);

    expect(res.send).toHaveBeenCalled();
  });

  test('should return a res send when there is not an error', () => {
    const res = {
      send: jest.fn(),
    };
    const req = {
      params: {
        productId: 's',
      },
    };
    product.findByIdAndUpdate = jest.fn().mockImplementationOnce((productId, callback) => {
      callback(null, true);
    });

    productController.postMethod(req, res);

    expect(res.send).toHaveBeenCalled();
  });
});
