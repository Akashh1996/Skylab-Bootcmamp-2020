const Product = require('../store/productStore');
const cartController = require('./cartController')(Product);

describe('cartController', () => {
  test('should call response json on getMethod', () => {
    const res = {
      json: jest.fn(),
    };

    cartController.getMethod({ cart: null }, res);

    expect(res.json).toHaveBeenCalled();
  });

  test('should call response json on deleteMethod', () => {
    const res = {
      json: jest.fn(),
    };

    const req = {
      params: { productId: '1' },
    };

    cartController.deleteMethod(req, res);

    expect(res.json).toHaveBeenCalled();
  });
});
