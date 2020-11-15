const Product = require('../store/productStore');
const productsController = require('./productsController')(Product);

describe('productsController', () => {
  test('should call response json on getMethod', () => {
    const res = {
      json: jest.fn(),
    };

    productsController.getMethod({ cart: null }, res);

    expect(res.json).toHaveBeenCalled();
  });
});
