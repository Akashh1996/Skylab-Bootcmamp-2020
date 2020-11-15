const Product = require('../stores/productStore');
const productController = require('./productController')(Product);

describe('productController', () => {
  test('should call response json on getMethod', () => {
    const res = {
      json: jest.fn(),
    };

    productController.getMethod({ product: null }, res);

    expect(res.json).toHaveBeenCalled();
  });

  test('should call next on allMiddleware', () => {
    const req = {
      hero: null,
      params: {
        heroId: null,
      },
    };
    const next = jest.fn();
    productController.allMiddleware(req, null, next);
    expect(next).toHaveBeenCalled();
  });

  test('should call response json on postMethod', () => {
    const res = {
      json: jest.fn(),
    };

    const req = {
      product: {
        id: 12,
      },
      body: {},
    };

    productController.postMethod(req, res);

    expect(res.json).toHaveBeenCalled();
  });

  test('should call response json on deleteMethod', () => {
    const res = {
      json: jest.fn(),
    };

    const req = {
      params: {
        productId: 12,
      },
    };

    productController.deleteMethod(req, res);

    expect(res.json).toHaveBeenCalled();
  });

  test('should call response json on deleteMethod with null id', () => {
    const res = {
      json: jest.fn(),
    };

    const req = {
      params: {
        productId: null,
      },
    };

    productController.deleteMethod(req, res);

    expect(res.json).toHaveBeenCalled();
  });

  test('should call response json on deleteMethod with string id', () => {
    const res = {
      json: jest.fn(),
    };

    const req = {
      params: {
        productId: 'asd',
      },
    };

    productController.deleteMethod(req, res);

    expect(res.json).toHaveBeenCalled();
  });

  test('should call next on allMiddleware', () => {
    const req = {
      product: null,
      params: {
        productId: null,
      },
    };

    const next = jest.fn();

    productController.allMiddleware(req, null, next);

    expect(next).toHaveBeenCalled();
  });
});
