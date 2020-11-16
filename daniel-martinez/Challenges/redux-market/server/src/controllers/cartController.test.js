const Product = require('../store/productStore');
const cartController = require('./cartController')(Product);

describe('cartController', () => {
  test('should call response json on getMethod', () => {
    const res = {
      json: jest.fn(),
    };

    cartController.getMethod(null, res);

    expect(res.json).toHaveBeenCalled();
  });

  test('should call response json on putMethod', () => {
    const res = {
      json: jest.fn(),
    };

    const req = { body: null };

    cartController.putMethod(req, res);

    expect(res.json).toHaveBeenCalled();
  });

  test('should call response json on deleteMethod', () => {
    const res = {
      json: jest.fn(),
    };

    const req = { body: { id: 0 } };

    cartController.deleteMethod(req, res);

    expect(res.json).toHaveBeenCalled();
  });
});
