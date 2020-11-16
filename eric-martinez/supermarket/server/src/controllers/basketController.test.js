const Product = require('../stores/productStore');
const basketController = require('./basketController')(Product);

describe('productController', () => {
  test('should call response json on getMethod', () => {
    const res = {
      json: jest.fn(),
    };

    basketController.getMethod({ product: null }, res);

    expect(res.json).toHaveBeenCalled();
  });
  test('should call response json on putMethod', () => {
    const res = {
      json: jest.fn(),
    };

    const req = { body: null };

    basketController.putMethod(req, res);

    expect(res.json).toHaveBeenCalled();
  });
});
