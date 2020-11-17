const Product = require('../stores/productStore');
const basketDeleteController = require('./basketDeleteController')(Product);

describe('heroController', () => {
  test('should call response json on deleteMethod', () => {
    const res = {
      json: jest.fn(),
    };

    const req = {
      params: {
        heroId: 12,
      },
    };

    basketDeleteController.deleteMethod(req, res);

    expect(res.json).toHaveBeenCalled();
  });

  test('should call response json on deleteMethod with null id', () => {
    const res = {
      json: jest.fn(),
    };

    const req = {
      params: {
        heroId: null,
      },
    };

    basketDeleteController.deleteMethod(req, res);

    expect(res.json).toHaveBeenCalled();
  });

  test('should call response json on deleteMethod with string id', () => {
    const res = {
      json: jest.fn(),
    };

    const req = {
      params: {
        productId: 'asd',
      },
    };

    basketDeleteController.deleteMethod(req, res);

    expect(res.json).toHaveBeenCalled();
  });

  test('should call next on allMiddleware', () => {
    const req = {
      hero: null,
      params: {
        productId: null,
      },
    };

    const next = jest.fn();

    basketDeleteController.allMiddleware(req, null, next);

    expect(next).toHaveBeenCalled();
  });
});
