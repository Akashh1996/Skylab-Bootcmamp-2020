const BasketProduct = require('../models/basketModel');
const basketDeleteController = require('./basketDeleteController')(BasketProduct);

jest.mock('../models/basketModel');
describe('heroController', () => {
  test('should call response json on deleteMethod', () => {
    const res = {
      send: jest.fn(),
    };

    BasketProduct.deleteOne.mockImplementationOnce((query, callback) => {
      callback(null);
    });

    basketDeleteController.deleteMethod({ id: 1 }, res);

    expect(res.send.mock.calls.length).toBe(1);
  });
  test('should call response json on deleteMethod', () => {
    const res = {
      send: jest.fn(),
    };

    BasketProduct.deleteOne.mockImplementationOnce((query, callback) => {
      callback(true);
    });

    basketDeleteController.deleteMethod({ id: 1 }, res);

    expect(res.send.mock.calls.length).toBe(1);
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
