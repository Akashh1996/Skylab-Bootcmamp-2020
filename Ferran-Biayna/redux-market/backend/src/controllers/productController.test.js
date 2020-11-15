const Product = require('../store/productStore');
const productController = require('./productController')(Product);

describe('productController', () => {
  test('should call response json on getMethod', () => {
    const res = {
      json: jest.fn(),
    };

    productController.getMethod({ cart: null }, res);

    expect(res.json).toHaveBeenCalled();
  });

  test('should call response json on postMethod', () => {
    const res = {
      json: jest.fn(),
    };

    const req = {
      params: { productId: '1' },
    };

    productController.postMethod(req, res);

    expect(res.json).toHaveBeenCalled();
  });

  test('should call response json on allMiddleware', () => {
    const next = jest.fn();

    const res = null;

    const req = {
      params: { productId: '1' },
    };

    productController.allMiddleware(req, res, next);

    expect(next).toHaveBeenCalled();
  });
});
