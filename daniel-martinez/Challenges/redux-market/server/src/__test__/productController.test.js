const Product = require('../models/productModel');
const productController = require('../controllers/productController')(Product);

describe('productController', () => {
  test.skip('should call response json on getMethod', () => {
    const res = {
      json: jest.fn(),
    };

    const req = {
      product: {},
    };

    productController.getMethod(req, res);

    expect(res.json).toHaveBeenCalled();
  });

  test.skip('should call next on allMiddleWare', () => {
    const req = {
      product: {},
      params: { productId: null },
    };

    const next = jest.fn();

    productController.allMiddleware(req, null, next);

    expect(next).toHaveBeenCalled();
  });
});
