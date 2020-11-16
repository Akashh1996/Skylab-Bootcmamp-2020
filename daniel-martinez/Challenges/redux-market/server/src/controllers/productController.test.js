const Product = require('../store/productStore');
const productController = require('./productController')(Product);

describe('productController', () => {
  test('should call response json on getMethod', () => {
    const res = {
      json: jest.fn(),
    };

    const req = {
      product: {},
    };

    productController.getMethod(req, res);

    expect(res.json).toHaveBeenCalled();
  });

  test('should call next on allMiddleWare', () => {
    const req = {
      product: {},
      params: { productId: null },
    };

    const next = jest.fn();

    productController.allMiddleware(req, null, next);

    expect(next).toHaveBeenCalled();
  });
});
