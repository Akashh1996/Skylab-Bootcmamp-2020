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
