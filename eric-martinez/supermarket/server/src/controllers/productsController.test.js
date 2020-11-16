const Product = require('../stores/productStore');
const productsController = require('./productsController')(Product);

describe('heroesController', () => {
  test('should call response json on getMethod', () => {
    const res = {
      json: jest.fn(),
    };

    productsController.getMethod(null, res);

    expect(res.json).toHaveBeenCalled();
  });
});
