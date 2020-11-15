const Product = require('../stores/productStore');
const productController = require('./productController')(Product);

describe('heroController', () => {
  test('should call response json on getMethod', () => {
    const res = {
      json: jest.fn(),
    };

    productController.getMethod({ hero: null }, res);

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
});
